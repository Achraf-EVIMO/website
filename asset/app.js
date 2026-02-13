// Met à jour automatiquement l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

const _contactForm = document.getElementById("contact-form");
if (_contactForm) {
  _contactForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
      fields: [
        { name: "name", value: form.name.value || "" },
        { name: "email", value: form.email.value || "" },
        { name: "message", value: form.message.value || "" }
      ]
    };

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/147371814/3227d18b-3a88-40f0-8a42-7c377f2b0447",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }
      );

      if(response.ok) {
        alert("Merci ! Vos informations ont été envoyées.");
        form.reset();
      } else {
        console.error(await response.text());
        alert("Erreur lors de l'envoi, veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi, veuillez réessayer.");
    }
  });
}


// Slider automatique avec barre verticale gauche et pause au survol
document.addEventListener("DOMContentLoaded", function () {
  const slides = Array.from(document.querySelectorAll("#slider .slide"));
  const fills = Array.from(document.querySelectorAll("#feature-text .fill"));
  const features = Array.from(
    document.querySelectorAll("#feature-text .feature")
  );

  if (!slides.length || !fills.length || !features.length) return;

  let current = 0;
  const DELAY = 3000; // 3 secondes
  let timer = null;

  // ✅ État initial des barres et du texte
  fills.forEach((f) => {
    f.style.transform = "scaleY(0)";
    f.style.transformOrigin = "top";
    f.style.willChange = "transform";
  });

  // ✅ Fonction pour mettre à jour les couleurs du texte
  function updateFeatureColors(activeIndex) {
    features.forEach((feature, i) => {
      const h2 = feature.querySelector("h2");
      const p = feature.querySelector("p");

      if (i === activeIndex) {
        h2.classList.remove("text-gray-400");
        h2.classList.add("text-black");
        p.classList.remove("text-gray-400");
        p.classList.add("text-gray-500");
      } else {
        h2.classList.remove("text-black");
        h2.classList.add("text-gray-400");
        p.classList.remove("text-gray-500");
        p.classList.add("text-gray-400");
      }
    });
  }

  // ✅ Fonction d'affichage du slide actif
  function showSlide(index) {
    // -- Images
    slides.forEach((s, i) => {
      s.classList.toggle("opacity-100", i === index);
      s.classList.toggle("opacity-0", i !== index);
    });

    // -- Barres
    fills.forEach((f, i) => {
      f.style.transition = "none";
      f.style.transform = "scaleY(0)";
      if (i === index) {
        requestAnimationFrame(() => {
          f.style.transition = `transform ${DELAY}ms linear`;
          f.style.transform = "scaleY(1)";
        });
      }
    });

    // -- Texte actif/inactif
    features.forEach((f, i) => {
      f.classList.toggle("active", i === index);
    });

    // ✅ Met à jour la couleur du texte actif
    updateFeatureColors(index);
  }

  // ✅ Passage au slide suivant
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // ✅ Lancement du cycle
  function startCycle() {
    showSlide(current);
    timer = setInterval(nextSlide, DELAY);
  }

  startCycle();

  // ✅ Nouveau : quand on clique sur un texte, on affiche son image immédiatement
  features.forEach((feature, index) => {
    feature.addEventListener("click", () => {
      clearInterval(timer); // stoppe le cycle temporairement
      current = index;
      showSlide(current);
      timer = setInterval(nextSlide, DELAY); // relance le cycle ensuite
    });
  });
});


// ✅ Animation ligne + points au scroll (section "How it works")
document.addEventListener("DOMContentLoaded", () => {
  const howSection = document.querySelector("#how");
  const animatedLine = document.querySelector(".animated-line");
  const lineFill = document.createElement("div");
  lineFill.classList.add("line-fill");
  animatedLine.appendChild(lineFill);

  const dots = document.querySelectorAll(".animated-dot");
  if (!howSection || !animatedLine || !dots.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLine();
          observer.disconnect(); // Une seule fois
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(howSection);

  function animateLine() {
    const duration = 7000; // 7s
    const start = performance.now();

    // Détecte orientation (verticale ou horizontale)
    const isVertical = animatedLine.offsetHeight > animatedLine.offsetWidth;
    const lineLength = isVertical ? animatedLine.offsetHeight : animatedLine.offsetWidth;

    function updateFrame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentProgress = progress * 100;
      const currentValue = progress * lineLength;

      if (isVertical) {
        // ✅ ANIMATION MOBILE (VERTICALE)
        // La ligne croît de haut en bas (barre de progression verticale)
        lineFill.style.height = `${currentProgress}%`;
        lineFill.style.width = "100%";
        lineFill.style.top = "0";
        lineFill.style.left = "0";
        lineFill.style.transform = "none";

        // Points s'allument et restent bleus définitivement
        dots.forEach((dot) => {
          // Calcule la position du point relative à la ligne
          const dotTop = dot.getBoundingClientRect().top;
          const lineTop = animatedLine.getBoundingClientRect().top;
          const relativePos = dotTop - lineTop;
          const dotPercent = (relativePos / lineLength) * 100;
          
          // La ligne passe sur le point exactement quand elle atteint sa position
          if (currentProgress >= dotPercent && !dot.classList.contains("animate")) {
            dot.classList.add("animate");
          }
        });
      } else {
        // ✅ ANIMATION DESKTOP (HORIZONTALE) - Inchangée
        lineFill.style.width = `${currentProgress}%`;
        lineFill.style.height = "100%";
        lineFill.style.top = "0";
        lineFill.style.transform = "none";
        lineFill.style.left = "0";

        // Points s'allument progressivement
        dots.forEach((dot) => {
          const dotLeft = dot.getBoundingClientRect().left;
          const lineLeft = animatedLine.getBoundingClientRect().left;
          const relativePos = dotLeft - lineLeft;
          const dotPercent = (relativePos / lineLength) * 100;

          if (currentProgress >= dotPercent) {
            dot.classList.add("animate");
          } else {
            dot.classList.remove("animate");
          }
        });
      }

      if (progress < 1) {
        requestAnimationFrame(updateFrame);
      }
    }

    requestAnimationFrame(updateFrame);
  }
});


/* ============================
      EVIMO - COOKIE CONSENT
   ============================ */

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");

  // 👉 Vérifier si un cookie existe déjà
  const hasCookie = document.cookie.split("; ").some(c => c.startsWith("evimo-cookie="));

  // 👉 Si le cookie existe → NE PAS afficher le banner
  if (!hasCookie) {
    banner.classList.remove("hidden");
  }

  // Fonction utilitaire : définir un cookie
  function setCookie(name, value, days) {
    const now = new Date();
    const expires = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

    const cookieValue = JSON.stringify({
      status: value,
      createdAt: now.toISOString(),
      expiration: expires.toISOString(),
    });

    document.cookie = `${name}=${encodeURIComponent(
      cookieValue
    )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  }

  // Fonction utilitaire : cacher le bandeau
  function hideBanner() {
    banner.classList.add("opacity-0");
    setTimeout(() => banner.classList.add("hidden"), 300);
  }

  // ACCEPTER
  acceptBtn.addEventListener("click", () => {
    setCookie("evimo-cookie", "accepted", 365);
    hideBanner();
    console.log("🍪 Cookie accepté");
  });

  // REFUSER
  rejectBtn.addEventListener("click", () => {
    setCookie("evimo-cookie", "rejected", 365);
    hideBanner();
    console.log("🍪 Cookie refusé");
  });
});


// Traductions EN -> FR
const translations = {
  "EVIMO — The AI assistant for maintenance operations":
    "EVIMO — L'assistant IA pour les opérations de maintenance",
  Product: "Produit",
  Industries: "Industries",
  "How it works": "Comment ça fonctionne",
  Pilot: "Pilote",
  Contact: "Contact",
  "Talk to us": "Contactez-nous",
  "Book a demo": "Réserver une démo",
  "The AI assistant for maintenance operations":
    "L'assistant IA pour les opérations de maintenance",
  "EVIMO helps infrastructure operators maximize uptime and cut OPEX with native-AI diagnostics, predictive maintenance, and workflow automation. We start with EV charging (IRVE) and expand to facility management, BESS, and industry.":
    "EVIMO aide les opérateurs d'infrastructures à maximiser la disponibilité et réduire l'OPEX grâce aux diagnostics IA natifs, à la maintenance prédictive et à l'automatisation des workflows. Nous commençons par la recharge EV (IRVE) et étendons à la gestion des installations, BESS et industrie.",
  "Start a pilot": "Lancer un pilote",
  "See how it works": "Voir comment ça fonctionne",
  "Built in France • GDPR-first • Works with your data (OCPP, IoT, CMMS).":
    "Conçu en France • RGPD prioritaire • Compatible avec vos données (OCPP, IoT, GMAO).",
  "EVA Diagnostics": "Diagnostics EVA",
  "AI explanation & root cause analysis on charger faults":
    "Explications IA et analyse des causes des pannes de chargeurs",
  "Predictive alerts": "Alertes prédictives",
  "Failure risk forecasts from logs, sensors & tickets":
    "Prévisions des risques de panne à partir des logs, capteurs et tickets",
  "Technician assist": "Assistance technicien",
  "Step-by-step fix plans, parts & SLA-aware scheduling":
    "Plans de réparation étape par étape, pièces et planification SLA",
  "EVIMO One": "EVIMO One",
  "Native-AI platform for predictive maintenance, diagnostics, and work orchestration.":
    "Plateforme IA native pour la maintenance prédictive, les diagnostics et l'orchestration du travail.",
  "Predictive maintenance": "Maintenance prédictive",
  "Forecast failures using OCPP logs, IoT signals, tickets, and environment data.":
    "Prévoir les pannes grâce aux logs OCPP, signaux IoT, tickets et données environnementales.",
  "AI diagnostics (EVA)": "Diagnostics IA (EVA)",
  "Explain anomalies, deduplicate errors, and propose probable root causes with confidence.":
    "Expliquer les anomalies, dédupliquer les erreurs et proposer les causes probables avec confiance.",
  "Technician assist": "Assistance technicien",
  "Generate step-by-step repair plans, required parts, and safety checklists on the fly.":
    "Générer des plans de réparation étape par étape, les pièces nécessaires et les checklists de sécurité à la volée.",
  "Workflow automation": "Automatisation des workflows",
  "Create and update work orders in your CMMS/CRM. Assign by skills, SLA and proximity.":
    "Créer et mettre à jour les ordres de travail dans votre GMAO/CRM. Assigner selon compétences, SLA et proximité.",
  "Open integrations": "Intégrations ouvertes",
  "Connect to Salesforce, ServiceNow, Jira, and data lakes. Import/export with APIs.":
    "Connectez-vous à Salesforce, ServiceNow, Jira et aux data lakes. Import/export via API.",
  "Secure & compliant": "Sécurisé & conforme",
  "GDPR-first, SOC2-ready architecture with granular roles, audit, and encryption.":
    "Architecture conforme RGPD et SOC2 avec rôles granulaires, audit et chiffrement.",
  "Built for the field. Starting with IRVE.":
    "Conçu pour le terrain. Début avec IRVE.",
  "We begin with EV charging infrastructure, then expand to adjacent asset-heavy operations.":
    "Nous commençons par l'infrastructure de recharge EV, puis étendons aux opérations intensives en actifs.",
  // --- Industries ---
  "Built for the field. Starting with IRVE.":
    "Conçu pour le terrain. Début avec IRVE.",
  "We begin with EV charging infrastructure, then expand to adjacent asset-heavy operations.":
    "Nous commençons par l'infrastructure de recharge EV, puis étendons aux opérations intensives en actifs.",
  "EV Charging (IRVE)": "Recharge EV (IRVE)",
  "Uptime KPIs": "KPI de disponibilité",
  "OCPP analytics": "Analyse OCPP",
  "Remote reset → dispatch": "Réinitialisation à distance → intervention",
  "Facility Management": "Gestion des installations",
  "HVAC & elevators": "CVC & ascenseurs",
  "Energy & comfort": "Énergie & confort",
  "Preventive cycles": "Cycles préventifs",
  BESS: "BESS",
  "Cell health": "État des cellules",
  "Thermal issues": "Problèmes thermiques",
  "Alarm triage": "Triage des alarmes",
  Industry: "Industrie",
  "Critical assets": "Actifs critiques",
  "Predictive spares": "Pièces de rechange prédictives",
  "Downtime reduction": "Réduction des temps d’arrêt",
  "How it works": "Comment ça fonctionne",
  "From data to action—in four steps.":
    "Des données à l'action — en quatre étapes.",
  Ingest: "Ingestion",
  "Connect OCPP, IoT, CMMS, CRM and data lakes securely.":
    "Connectez OCPP, IoT, GMAO, CRM et data lakes en toute sécurité.",
  Detect: "Détecter",
  "Models spot anomalies, risks and duplicate errors.":
    "Les modèles détectent anomalies, risques et doublons.",
  Assist: "Assister",
  "EVA explains, recommends fixes, and drafts work orders.":
    "EVA explique, recommande des correctifs et rédige des ordres de travail.",
  Automate: "Automatiser",
  "Orchestrate workflows, SLAs, routing and reporting.":
    "Orchestrez les workflows, SLA, routage et rapports.",
  "Pilot EVIMO in 30 days": "Pilotez EVIMO en 30 jours",
  "Integrate one site or region, connect data sources, and measure uptime & OPEX impact. We provide templates, KPIs and success criteria.":
    "Intégrez un site ou une région, connectez les sources de données et mesurez la disponibilité et l’impact OPEX. Nous fournissons modèles, KPI et critères de succès.",
  "Request a pilot": "Demander un pilote",
  Contact: "Contact",
  "Tell us about your operations and we’ll tailor a demo.":
    "Parlez-nous de vos opérations et nous adapterons une démo.",
  Name: "Nom",
  Email: "Email",
  Message: "Message",
  "By submitting, you agree to be contacted about EVIMO.":
    "En soumettant, vous acceptez d'être contacté par EVIMO.",
  Send: "Envoyer",
  Company: "Entreprise",
  "Book a demo": "Réserver une démo",
  "AI for maintenance operations": "IA pour les opérations de maintenance",
  "🍪 Cookies & Confidentiality": "🍪 Cookies & Confidentialité",
  "We use cookies to enhance your experience, measure audience engagement, and provide tailored content. You can choose to accept or decline.":
    "Nous utilisons des cookies pour améliorer votre expérience, mesurer l'audience et fournir du contenu personnalisé. Vous pouvez accepter ou refuser.",
  Decline: "Refuser",
  Accept: "Accepter",
  "EVIMO. All rights reserved.": "EVIMO. Tous droits réservés.",
  Privacy: "Confidentialité",
  Security: "Sécurité",
  Terms: "Conditions",
  "Legal notice": "Mentions légales",
  "Follow us": "Suivez-nous",
  "Useful links": "Liens utiles",
  Phone: "Téléphone",
  // Page Privacy Policy
  "Privacy Policy – EVIMO": "Politique de confidentialité – EVIMO",
  "1. Introduction": "1. Introduction",
  "This privacy policy explains how Evimo collects, uses, and protects the personal and technical information of users of our website or electric charging station maintenance service.":
    "Cette politique de confidentialité explique comment Evimo collecte, utilise et protège les informations personnelles et techniques des utilisateurs de notre site ou du service de maintenance des bornes électriques.",
  "2. Information Collected": "2. Informations collectées",
  "We may collect:": "Nous pouvons collecter :",
  "Personal information: first name, last name, email address, phone number, company (if applicable)":
    "Informations personnelles : prénom, nom, adresse e-mail, numéro de téléphone, entreprise (le cas échéant)",
  "Technical and service information: location of charging stations, maintenance history, equipment identification, connection data to charging station management platforms":
    "Informations techniques et de service : localisation des bornes, historique de maintenance, identification des équipements, données de connexion aux plateformes de gestion des bornes",
  "Browsing information: IP address, browser type, pages visited, cookies and other similar technologies":
    "Informations de navigation : adresse IP, type de navigateur, pages consultées, cookies et autres technologies similaires",
  "3. Use of Information": "3. Utilisation des informations",
  "The collected data is used to:":
    "Les données collectées sont utilisées pour :",
  "Provide, manage, and improve our electric charging station maintenance services":
    "Fournir, gérer et améliorer nos services de maintenance des bornes électriques",
  "Plan and carry out on-site interventions":
    "Planifier et réaliser des interventions sur site",
  "Communicate with clients about services, updates, and potential offers":
    "Communiquer avec les clients sur les services, mises à jour et offres éventuelles",
  "Prevent incidents and ensure the security of equipment":
    "Prévenir les incidents et assurer la sécurité des équipements",
  "Comply with legal and regulatory obligations":
    "Se conformer aux obligations légales et réglementaires",
  "4. Information Sharing": "4. Partage des informations",
  "We do not sell your information. We may share your data with:":
    "Nous ne vendons pas vos informations. Nous pouvons partager vos données avec :",
  "Our partners and service providers (e.g., maintenance tool providers, hosting, data analysis)":
    "Nos partenaires et prestataires de services (ex : fournisseurs d’outils de maintenance, hébergement, analyse de données)",
  "Competent authorities if required by law":
    "Autorités compétentes si requis par la loi",
  "In case of merger, acquisition, or business transfer":
    "En cas de fusion, acquisition ou transfert d’entreprise",
  "5. Cookies and Similar Technologies":
    "5. Cookies et technologies similaires",
  "Our website uses cookies to analyze traffic, improve user experience, and personalize content. You can manage your preferences through your browser settings.":
    "Notre site utilise des cookies pour analyser le trafic, améliorer l’expérience utilisateur et personnaliser le contenu. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.",
  "6. Data Security": "6. Sécurité des données",
  "We apply technical and organizational measures to protect your information from unauthorized access, loss, or disclosure.":
    "Nous appliquons des mesures techniques et organisationnelles pour protéger vos informations contre tout accès, perte ou divulgation non autorisés.",
  "7. Data Retention": "7. Conservation des données",
  "Information is retained only for the time necessary to fulfill the purposes described and in accordance with legal requirements.":
    "Les informations sont conservées uniquement le temps nécessaire pour atteindre les objectifs décrits et conformément aux exigences légales.",
  "8. Your Rights": "8. Vos droits",
  "Access your personal data": "Accéder à vos données personnelles",
  "Correct or delete your information":
    "Corriger ou supprimer vos informations",
  "Limit or object to the processing of your data":
    "Limiter ou s’opposer au traitement de vos données",
  "Withdraw your consent at any time":
    "Retirer votre consentement à tout moment",
  "9. Contact": "9. Contact",
  "For any questions regarding your data or this policy, contact us at: contact@evimo.fr":
    "Pour toute question concernant vos données ou cette politique, contactez-nous à : contact@evimo.fr",
  "10. Policy Updates": "10. Mises à jour de la politique",
  "This policy may be updated periodically. The latest update will be indicated below.":
    "Cette politique peut être mise à jour périodiquement. La dernière mise à jour sera indiquée ci-dessous.",
  "Last update: 12/02/2025": "Dernière mise à jour : 12/02/2025",
  // Page Security
  "Security – EVIMO": "Sécurité – EVIMO",
  "1. Data Security": "1. Sécurité des données",
  "EVIMO implements technical and organizational measures to protect the personal and technical information collected on the website and through our maintenance services. This includes:":
    "EVIMO met en œuvre des mesures techniques et organisationnelles pour protéger les informations personnelles et techniques collectées sur le site et via nos services de maintenance. Cela inclut :",
  "Encryption of communications via HTTPS":
    "Chiffrement des communications via HTTPS",
  "Secure data storage on protected servers":
    "Stockage sécurisé des données sur des serveurs protégés",
  "Regular backups to prevent data loss":
    "Sauvegardes régulières pour prévenir la perte de données",
  "Strict access control to sensitive information":
    "Contrôle strict de l’accès aux informations sensibles",
  "2. On-Site Intervention Safety": "2. Sécurité des interventions sur site",
  "Our technicians follow strict procedures to ensure safety during interventions on electric charging stations:":
    "Nos techniciens suivent des procédures strictes pour garantir la sécurité lors des interventions sur les bornes électriques :",
  "Use of personal protective equipment (PPE)":
    "Utilisation d’équipements de protection individuelle (EPI)",
  "Compliance with electrical standards and local regulations":
    "Respect des normes électriques et réglementations locales",
  "Verification and testing before putting stations back into service":
    "Vérification et tests avant la remise en service des bornes",
  "Tracking and traceability of maintenance operations":
    "Suivi et traçabilité des opérations de maintenance",
  "3. IT Security and Cyber-Risk Prevention":
    "3. Sécurité informatique et prévention des cyber-risques",
  "Internal systems are protected against viruses, malware, and intrusion attempts":
    "Les systèmes internes sont protégés contre les virus, malwares et tentatives d’intrusion",
  "User accounts have secure passwords and authentication when required":
    "Les comptes utilisateurs disposent de mots de passe sécurisés et d’authentification lorsque nécessaire",
  "Regular audits and security updates are carried out to maintain system reliability":
    "Des audits réguliers et des mises à jour de sécurité sont réalisés pour maintenir la fiabilité du système",
  "4. Incident Reporting": "4. Signalement d’incidents",
  "If you encounter any security issue related to the website or services, you can contact us immediately at: contact@evimo.fr":
    "Si vous rencontrez un problème de sécurité lié au site ou aux services, vous pouvez nous contacter immédiatement à : contact@evimo.fr",
  "5. Liability": "5. Responsabilité",
  "EVIMO cannot be held responsible for damages resulting from improper use of the website or services, nor for incidents related to external factors beyond our control.":
    "EVIMO ne peut être tenu responsable des dommages résultant d’une utilisation incorrecte du site ou des services, ni des incidents liés à des facteurs externes échappant à notre contrôle.",
  "Last update: 04/12/2025": "Dernière mise à jour : 04/12/2025",
  // Page Terms of Use
  "Terms of Use – EVIMO": "Conditions d'utilisation – EVIMO",
  "1. Acceptance of the Terms": "1. Acceptation des conditions",
  "By using Evimo’s website or services, you fully accept these terms of use. If you do not agree with these terms, you must not use our services.":
    "En utilisant le site ou les services d’Evimo, vous acceptez pleinement ces conditions d’utilisation. Si vous n’acceptez pas ces conditions, vous ne devez pas utiliser nos services.",
  "2. Description of Services": "2. Description des services",
  "EVIMO provides maintenance, inspection, and management services for electric charging stations. The information and services available on the site are provided for informational purposes and may be modified at any time without notice.":
    "EVIMO fournit des services de maintenance, d’inspection et de gestion des bornes électriques. Les informations et services disponibles sur le site sont fournis à titre informatif et peuvent être modifiés à tout moment sans préavis.",
  "3. Authorized Use": "3. Utilisation autorisée",
  "Use the services in accordance with applicable laws and regulations":
    "Utiliser les services conformément aux lois et réglementations en vigueur",
  "Provide accurate and up-to-date information when using our services":
    "Fournir des informations exactes et à jour lors de l’utilisation de nos services",
  "Do not attempt to access systems or data without authorization":
    "Ne pas tenter d’accéder à des systèmes ou données sans autorisation",
  "4. User Accounts": "4. Comptes utilisateur",
  "You are responsible for keeping your login credentials and password confidential":
    "Vous êtes responsable de la confidentialité de vos identifiants et mots de passe",
  "You are responsible for all activities conducted through your account":
    "Vous êtes responsable de toutes les activités effectuées via votre compte",
  "You must immediately inform Evimo in case of unauthorized access":
    "Vous devez informer immédiatement Evimo en cas d’accès non autorisé",
  "5. Intellectual Property": "5. Propriété intellectuelle",
  "All website content (texts, images, logos, software, technical documents) is the property of EVIMO or its partners and is protected by intellectual property laws. Any reproduction or use without authorization is prohibited.":
    "Tout le contenu du site (textes, images, logos, logiciels, documents techniques) est la propriété d’EVIMO ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation est interdite.",
  "6. Liability": "6. Responsabilité",
  "EVIMO cannot be held responsible for direct or indirect damages resulting from the use of the website or services, except in cases of gross negligence or intentional misconduct":
    "EVIMO ne peut être tenu responsable des dommages directs ou indirects résultant de l’utilisation du site ou des services, sauf en cas de négligence grave ou de faute intentionnelle",
  "We strive to provide accurate information, but we do not guarantee the accuracy, completeness, or continuous availability of the services":
    "Nous nous efforçons de fournir des informations exactes, mais nous ne garantissons pas l’exactitude, l’exhaustivité ou la disponibilité continue des services",
  "7. Privacy and Personal Data": "7. Confidentialité et données personnelles",
  "The use of our services is subject to our Privacy Policy":
    "L’utilisation de nos services est soumise à notre politique de confidentialité",
  "Privacy Policy": "Politique de confidentialité",
  "which explains how we collect, use, and protect your personal data.":
    "qui explique comment nous collectons, utilisons et protégeons vos données personnelles.",
  "8. Changes to the Terms": "8. Modifications des conditions",
  "We may modify these terms at any time. Changes take effect upon publication on the site. Continued use of the site constitutes acceptance of the new terms.":
    "Nous pouvons modifier ces conditions à tout moment. Les changements prennent effet dès leur publication sur le site. L’utilisation continue du site constitue l’acceptation des nouvelles conditions.",
  "9. Governing Law and Jurisdiction": "9. Droit applicable et juridiction",
  "These terms are governed by French law. Any dispute will be submitted to the jurisdiction of the competent courts of Paris.":
    "Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence des tribunaux compétents de Paris.",
  "10. Contact": "10. Contact",
  "For any questions regarding these terms, contact us at: contact@evimo.com 123 Rue de l’Innovation 75001 Paris, France":
    "Pour toute question concernant ces conditions, contactez-nous à : contact@evimo.com 123 Rue de l’Innovation 75001 Paris, France",
  "Last update: 04/12/2025": "Dernière mise à jour : 04/12/2025",
  // Page Legal Notice
  "Legal Notice – EVIMO": "Mentions légales – EVIMO",

  "1. Website Publisher": "1. Éditeur du site",
  "Company name: [Your company name]":
    "Nom de l’entreprise : [Votre nom d’entreprise]",
  "Legal form: [e.g., LLC, Inc., SAS, SARL, etc.]":
    "Forme juridique : [ex : SAS, SARL, Inc.]",
  "Share capital: [amount in €]": "Capital social : [montant en €]",
  "Registered office address: [Full address]":
    "Adresse du siège social : [Adresse complète]",
  "SIRET number: [SIRET number]": "Numéro SIRET : [Numéro SIRET]",
  "VAT number (if applicable): [EU VAT number]":
    "Numéro de TVA (si applicable) : [Numéro de TVA]",
  "Email: [Contact email address]": "Email : [Contact email address]",
  "Phone: [Phone number]": "Téléphone : [Numéro de téléphone]",

  "2. Publication Director": "2. Directeur de publication",
  "[Full name of the person in charge]":
    "[Nom complet de la personne responsable]",
  "Position: [e.g., Director, Manager, Communications Officer]":
    "Poste : [ex : Directeur, Responsable, Chargé de communication]",

  "3. Website Hosting Provider": "3. Hébergeur du site",
  "Hosting provider: [Hosting provider name]":
    "Hébergeur : [Nom de l’hébergeur]",
  "Address: [Full address]": "Adresse : [Adresse complète]",
  "Phone: [Phone number]": "Téléphone : [Numéro de téléphone]",
  "Website: [Hosting provider URL]": "Site web : [URL de l’hébergeur]",

  "4. Intellectual Property": "4. Propriété intellectuelle",
  "The content of the website (texts, images, logos, videos, software) is protected by copyright and intellectual property laws. Any reproduction, even partial, without authorization is prohibited.":
    "Le contenu du site (textes, images, logos, vidéos, logiciels) est protégé par le droit d’auteur et les lois sur la propriété intellectuelle. Toute reproduction, même partielle, sans autorisation est interdite.",

  "5. Personal Data": "5. Données personnelles",
  "Data collected through the website is processed in accordance with our Privacy Policy and applicable legislation (GDPR). Users have rights to access, rectify, and delete their data.":
    "Les données collectées via le site sont traitées conformément à notre politique de confidentialité et à la législation applicable (RGPD). Les utilisateurs disposent d’un droit d’accès, de rectification et de suppression de leurs données.",

  "6. Cookies": "6. Cookies",
  "The website uses cookies to improve user experience. You can manage your preferences in your browser settings.":
    "Le site utilise des cookies pour améliorer l’expérience utilisateur. Vous pouvez gérer vos préférences dans les paramètres de votre navigateur.",

  "7. Limitation of Liability": "7. Limitation de responsabilité",
  "EVIMO cannot be held liable for direct or indirect damages resulting from accessing or using the website.":
    "EVIMO ne peut être tenu responsable des dommages directs ou indirects résultant de l’accès ou de l’utilisation du site.",

  "8. Applicable Law": "8. Loi applicable",
  "The website is governed by French law. Any dispute will be brought before the competent courts.":
    "Le site est soumis au droit français. Tout litige sera porté devant les tribunaux compétents.",

  "Last update: 04/12/2025": "Dernière mise à jour : 04/12/2025",

  // Traductions FR
"Frequently Asked Questions": "Questions Fréquemment Posées",
"Everything you need to know about EVIMO and AI-powered maintenance.": "Tout ce que vous devez savoir sur EVIMO et la maintenance assistée par IA.",

// Questions
"What is predictive maintenance software?": "Qu'est-ce qu'un logiciel de maintenance prédictive ?",
"How does AI improve maintenance operations?": "Comment l'IA améliore-t-elle les opérations de maintenance ?",
"Is EVIMO suitable for EV charging infrastructure?": "EVIMO est-il adapté aux infrastructures de recharge électrique ?",
"How does EVIMO integrate with CMMS systems?": "Comment EVIMO s'intègre-t-il avec les systèmes CMMS ?",
"Can EVIMO help reduce maintenance costs?": "EVIMO peut-il aider à réduire les coûts de maintenance ?",
"How quickly can EVIMO be deployed?": "En combien de temps EVIMO peut-il être déployé ?",
"Does EVIMO support OCPP analytics?": "EVIMO prend-il en charge l'analyse OCPP ?",
"What types of infrastructure are supported?": "Quels types d'infrastructures sont pris en charge ?",
"Is EVIMO a preventive or predictive maintenance solution?": "EVIMO est-il une solution de maintenance préventive ou prédictive ?",
"How does the EVIMO pilot work?": "Comment fonctionne le pilote EVIMO ?",

// Réponses
"Predictive maintenance software uses data and AI to anticipate equipment failures before they occur. It helps operators reduce downtime, optimize maintenance workflows, and lower operational costs by acting at the right time.": "Un logiciel de maintenance prédictive utilise les données et l'IA pour anticiper les pannes d'équipement avant qu'elles ne se produisent. Il aide les opérateurs à réduire les temps d'arrêt, à optimiser les flux de travail de maintenance et à réduire les coûts opérationnels en agissant au bon moment.",

"AI analyzes large volumes of operational data to detect anomalies, identify failure patterns, and recommend corrective actions. This enables faster decisions, more accurate diagnostics, and automated maintenance workflows.": "L'IA analyse de grands volumes de données opérationnelles pour détecter les anomalies, identifier les schémas de défaillance et recommander des actions correctives. Cela permet des décisions plus rapides, des diagnostics plus précis et des flux de travail de maintenance automatisés.",

"Yes, EVIMO is designed to support EV charging maintenance. It monitors charging stations, detects faults early, and improves uptime for electric vehicle charging infrastructure using AI-based diagnostics.": "Oui, EVIMO est conçu pour prendre en charge la maintenance de la recharge électrique. Il surveille les bornes de recharge, détecte les pannes précocement et améliore la disponibilité des infrastructures de recharge pour véhicules électriques grâce à des diagnostics basés sur l'IA.",

"EVIMO offers seamless CMMS AI integration. It connects with existing maintenance management systems to enrich work orders, automate workflows, and improve decision-making without disrupting current processes.": "EVIMO offre une intégration transparente avec les systèmes CMMS. Il se connecte aux systèmes de gestion de maintenance existants pour enrichir les bons de travail, automatiser les flux de travail et améliorer la prise de décision sans perturber les processus actuels.",

"Yes, EVIMO helps reduce maintenance costs by AI by preventing unexpected failures, optimizing maintenance schedules, and reducing unnecessary interventions across your infrastructure.": "Oui, EVIMO aide à réduire les coûts de maintenance grâce à l'IA en prévenant les pannes inattendues, en optimisant les calendriers de maintenance et en réduisant les interventions inutiles dans votre infrastructure.",

"EVIMO can be deployed in a few weeks. A pilot typically runs for 30 days and includes data integration, KPI definition, and performance measurement on a selected site or region.": "EVIMO peut être déployé en quelques semaines. Un pilote dure généralement 30 jours et comprend l'intégration des données, la définition des KPI et la mesure des performances sur un site ou une région sélectionné.",

"Yes, EVIMO includes OCPP analytics capabilities. The platform analyzes charging station data to detect faults, monitor performance, and optimize maintenance strategies for EV infrastructure.": "Oui, EVIMO inclut des capacités d'analyse OCPP. La plateforme analyse les données des bornes de recharge pour détecter les pannes, surveiller les performances et optimiser les stratégies de maintenance pour les infrastructures de VE.",

"EVIMO supports a wide range of infrastructures, including EV charging stations, industrial assets, facilities management systems, and other critical infrastructure requiring high availability.": "EVIMO prend en charge une large gamme d'infrastructures, y compris les bornes de recharge électrique, les actifs industriels, les systèmes de gestion des installations et d'autres infrastructures critiques nécessitant une haute disponibilité.",

"EVIMO is both. It combines preventive maintenance AI with predictive maintenance software to anticipate failures while automating preventive actions based on real-time data.": "EVIMO est les deux. Il combine l'IA de maintenance préventive avec un logiciel de maintenance prédictive pour anticiper les défaillances tout en automatisant les actions préventives basées sur des données en temps réel.",

"The EVIMO pilot allows you to test the platform on a real use case. It includes data ingestion, AI diagnostics, workflow automation, and measurable results on uptime and maintenance efficiency.": "Le pilote EVIMO vous permet de tester la plateforme sur un cas d'usage réel. Il comprend l'ingestion de données, les diagnostics IA, l'automatisation des flux de travail et des résultats mesurables sur la disponibilité et l'efficacité de la maintenance."
};

// Fonction pour basculer la langue
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (lang === "FR") {
      el.textContent = translations[key] || key;
    } else {
      el.textContent = key;
    }
  });
  document.getElementById("lang-current").textContent = lang;
  localStorage.setItem("lang", lang);
}

document.getElementById("year").textContent = new Date().getFullYear();

// ==============================
// LANGUE + DRAPEAU
// ==============================

// Références
const toggle = document.getElementById("lang-toggle");
const menu = document.getElementById("lang-menu");
const langFlag = document.getElementById("lang-flag");

// Met à jour le drapeau principal
function updateLangFlag(lang) {
  langFlag.setAttribute("icon", lang === "FR" ? "twemoji:flag-france" : "twemoji:flag-united-kingdom");
}

// Change la langue et les textes
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = lang === "FR" ? (translations[key] || key) : key;
  });
  localStorage.setItem("lang", lang);
  updateLangFlag(lang);
}

// Ouvre/ferme le dropdown au hover
toggle.addEventListener("mouseenter", () => {
  menu.classList.add("show");
  toggle.classList.add("menu-open");
});
toggle.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!menu.matches(':hover')) {
      menu.classList.remove("show");
      toggle.classList.remove("menu-open");
    }
  }, 100);
});
menu.addEventListener("mouseenter", () => {
  menu.classList.add("show");
  toggle.classList.add("menu-open");
});
menu.addEventListener("mouseleave", () => {
  menu.classList.remove("show");
  toggle.classList.remove("menu-open");
});

// Sélection d'une langue
document.querySelectorAll("#lang-menu button").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const lang = btn.dataset.lang.toUpperCase();
    setLanguage(lang);
    menu.classList.remove("show");
    toggle.classList.remove("menu-open");
  });
});

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "EN";
  setLanguage(savedLang);
});



// ===========================
// MENU LANGUE DESKTOP
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const langMenu = document.getElementById("lang-menu");
  const langFlag = document.getElementById("lang-flag");

  if (langToggle && langMenu) {
    // S'assurer que le menu est fermé au chargement
    langMenu.classList.remove("show");

    // Fonction pour mettre à jour le drapeau desktop
    function updateDesktopLangFlag(lang) {
      langFlag.setAttribute(
        "icon",
        lang === "FR" ? "twemoji:flag-france" : "twemoji:flag-united-kingdom"
      );
    }

    // Toggle du menu langue desktop
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langMenu.classList.toggle("show");
      langToggle.classList.toggle("menu-open", isOpen);
    });

    // Sélection d'une langue desktop
    langMenu.querySelectorAll("button[data-lang]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const lang = btn.dataset.lang.toUpperCase();
        
        // Appeler votre fonction setLanguage() existante
        if (typeof setLanguage === 'function') {
          setLanguage(lang);
        }
        
        // Mettre à jour l'affichage
        updateDesktopLangFlag(lang);
        
        // Sauvegarder dans localStorage
        localStorage.setItem("lang", lang);
        
        // Fermer le menu
        langMenu.classList.remove("show");
        langToggle.classList.remove("menu-open");
      });
    });

    // Fermer si on clique ailleurs
    document.addEventListener("click", () => {
      langMenu.classList.remove("show");
      langToggle.classList.remove("menu-open");
    });

    // Empêcher la fermeture au clic sur le menu
    langMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // Initialiser avec la langue sauvegardée
    const savedLang = localStorage.getItem("lang") || "EN";
    updateDesktopLangFlag(savedLang);
  }
});

// ===========================
// MENU BURGER GRAND FORMAT
// ===========================

// Éléments DOM
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileCard = document.getElementById("mobile-card");
const closeMenuBtn = document.getElementById("close-menu");
const headerLogo = document.getElementById("header-logo");
const headerLogoMobile = document.getElementById("header-logo-mobile");
const body = document.body;

// Fonction pour ouvrir le menu
function openMenu() {
  burger.classList.add("active");
  mobileMenu.classList.add("active");
  body.classList.add("menu-open");
}

// Fonction pour fermer le menu
function closeMenu() {
  mobileMenu.classList.remove("active");
  burger.classList.remove("active");
  body.classList.remove("menu-open");
}

// Ouvrir le menu avec le burger
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  openMenu();
});

// Fermer avec le bouton croix DANS la card
closeMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeMenu();
});

// Clic sur le logo du header (celui du haut) ferme le menu
headerLogo.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("active")) {
    e.preventDefault();
    closeMenu();
    // Après fermeture, faire le scroll
    setTimeout(() => {
      window.location.href = "#top";
    }, 300);
  }
});

// Clic sur le logo DANS la card ferme également
headerLogoMobile.addEventListener("click", (e) => {
  e.preventDefault();
  closeMenu();
  setTimeout(() => {
    window.location.href = "#top";
  }, 300);
});

// Empêcher la fermeture au clic dans la card
mobileCard.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Fermer le menu au clic sur un lien de navigation
mobileMenu.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// ===========================
// MENU LANGUE MOBILE
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  
  const burgerLangToggle = document.getElementById("lang-toggle-mobile");
  const burgerLangMenu = document.getElementById("lang-menu-mobile");
  const burgerLangChevron = document.getElementById("lang-chevron-mobile");
  const burgerLangFlag = document.getElementById("lang-flag-mobile");
  const burgerLangCurrent = document.getElementById("lang-current-mobile");

  // S'assurer que le menu langue est fermé au chargement
  burgerLangMenu.classList.remove("active");
  burgerLangMenu.classList.add("lang-menu-mobile-hidden");
  burgerLangChevron.style.transform = "rotate(0deg)";

  // Fonction pour mettre à jour le drapeau
  function updateBurgerLangFlag(lang) {
    burgerLangFlag.setAttribute(
      "icon",
      lang === "FR" ? "twemoji:flag-france" : "twemoji:flag-united-kingdom"
    );
    burgerLangCurrent.textContent = lang;
  }

  // Toggle du menu langue
  burgerLangToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    
    const isCurrentlyOpen = burgerLangMenu.classList.contains("active");
    
    if (isCurrentlyOpen) {
      // Fermer
      burgerLangMenu.classList.remove("active");
      burgerLangMenu.classList.add("lang-menu-mobile-hidden");
      burgerLangChevron.style.transform = "rotate(0deg)";
    } else {
      // Ouvrir
      burgerLangMenu.classList.remove("lang-menu-mobile-hidden");
      burgerLangMenu.classList.add("active");
      burgerLangChevron.style.transform = "rotate(180deg)";
    }
  });

  // Sélection d'une langue
  burgerLangMenu.querySelectorAll("button[data-lang]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lang = btn.dataset.lang.toUpperCase();
      
      // Appeler votre fonction setLanguage() existante
      if (typeof setLanguage === 'function') {
        setLanguage(lang);
      }
      
      // Mettre à jour l'affichage
      updateBurgerLangFlag(lang);
      
      // Sauvegarder dans localStorage
      localStorage.setItem("lang", lang);
      
      // Fermer le menu langue
      burgerLangMenu.classList.remove("active");
      burgerLangMenu.classList.add("lang-menu-mobile-hidden");
      burgerLangChevron.style.transform = "rotate(0deg)";
    });
  });

  // Fermer le menu langue si on clique ailleurs dans la card
  mobileCard.addEventListener("click", (e) => {
    if (!burgerLangToggle.contains(e.target) && !burgerLangMenu.contains(e.target)) {
      if (burgerLangMenu.classList.contains("active")) {
        burgerLangMenu.classList.remove("active");
        burgerLangMenu.classList.add("lang-menu-mobile-hidden");
        burgerLangChevron.style.transform = "rotate(0deg)";
      }
    }
  });

  // Initialiser avec la langue sauvegardée (SANS ouvrir le menu)
  const savedLang = localStorage.getItem("lang") || "EN";
  updateBurgerLangFlag(savedLang);
  
  // Synchroniser avec setLanguage au chargement
  if (typeof setLanguage === 'function') {
    setLanguage(savedLang);
  }
});
// ======================
// ANIMATION navigation 
// ======================
const links = document.querySelectorAll('.underline-active');
const sections = document.querySelectorAll('section');

// Fonction pour mettre à jour le lien actif
function updateActiveLink() {
  let maxVisible = 0;
  let currentId = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.height <= 0) return;
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    const ratio = Math.max(0, visibleHeight) / rect.height;

    if (ratio > maxVisible) {
      maxVisible = ratio;
      currentId = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href') || '';
    const linkHash = href.includes('#') ? '#' + href.split('#').pop() : href;
    if (linkHash === '#' + currentId && maxVisible > 0) {
      link.classList.add('active');
    }
  });
}

// Scroll + resize
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('resize', updateActiveLink);

// Click : active le lien et scroll smoothly
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href') || '';
    // If it's an intra-page hash
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      return;
    }

    // If it's a link with a hash to another (or same) page, decide to scroll or navigate
    if (href.includes('#')) {
      e.preventDefault();
      const parts = href.split('#');
      const path = parts[0] || '';
      const hash = '#' + parts.slice(1).join('#');

      const currentFile = location.pathname.split('/').pop();
      const targetFile = path.replace(/^\//, '');

      // If the link points to the same file (or is relative empty), smooth-scroll to the section
      if (targetFile === '' || targetFile === currentFile || targetFile === location.pathname) {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      } else {
        // Otherwise navigate to the target page (browser will jump to hash)
        location.href = href;
      }

      return;
    }

    // External or plain link — let browser handle it
  });
});

// Initial call
updateActiveLink();

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!burger || !mobileMenu) return;

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Optionnel : fermer le menu au clic sur un lien
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});

// ===========================
// FAQ ACCORDION FUNCTIONALITY
// ===========================

document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle current item
      const isActive = item.classList.contains('active');
      
      // Close all other items (optional - remove if you want multiple open)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
});