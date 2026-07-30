export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  tag?: string;
  /** Featured projects render as large alternating cards; the rest go in a compact grid. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "agrisenx",
    index: "01 / 10",
    title: "AgriSenx",
    subtitle: "AI + IoT Smart Poultry Monitoring for Rural Farmers",
    description:
      "Founder-led startup putting production-grade computer vision in reach of smallholder poultry farmers priced out of commercial systems. A four-stage cascading YOLOv8 pipeline detects intruders, classifies fecal health, flags behavioural abnormalities and confirms mortality from live CCTV — running on a Raspberry Pi 4 and ESP32-CAM rather than dedicated GPUs. Backed by peer-reviewed research where I'm first author.",
    features: [
      "98.27% fecal classification, 98% mortality detection",
      "Sub-100ms inference on commodity edge hardware",
      "Alerts in 4.2s average, 100% delivery success",
      "Temporal validation layer cut false alarms by 73%",
      "Hult Prize: campus winner → national top 8",
    ],
    stack: [
      "YOLOv8",
      "TensorFlow Lite",
      "OpenCV",
      "Django REST",
      "Flutter",
      "AWS",
      "Raspberry Pi",
      "ESP32-CAM",
    ],
    image: "/projects/agrisenx.png",
    caseStudyUrl: "https://agrisenx-website.vercel.app/",
    tag: "Founder — Published Research",
    featured: true,
  },
  {
    id: "ppe-detection",
    index: "02 / 10",
    title: "PPE Safety Detection System",
    subtitle: "Plant-Wide Computer Vision Safety Compliance",
    description:
      "Production computer vision system built at HICOM Diecastings. A custom YOLOv8 model wired into the plant's full CCTV network detects missing hardhats and gloves in real time, pushes instant Telegram alerts to the Safety Department, and feeds a live compliance dashboard. Estimated by management to have saved RM 50,000.",
    features: [
      "Custom YOLOv8 model, continuously retrained",
      "Integrated across 12+ live CCTV feeds",
      "Instant Telegram alerts with annotated frames",
      "HDSB Safety Watch compliance dashboard",
    ],
    stack: ["YOLOv8", "OpenCV", "Python", "Telegram API", "CCTV/RTSP", "React"],
    image: "/projects/ppe-detection.png",
    tag: "Internal — HICOM Diecastings",
    featured: true,
  },
  {
    id: "vehicle-tracking",
    index: "03 / 10",
    title: "Vehicle Entry Control",
    subtitle: "Multi-Camera ANPR & Vehicle Tracking System",
    description:
      "Site-wide vehicle tracking running in production at HICOM Diecastings. A YOLOv8 pipeline reads number plates at the gate, registers each vehicle on entry, then hands it off between every camera on site so the guard can see where any car currently is and how long it has been sitting in each zone. Unauthorised dwell time raises an alert with a snapshot. The model is trained and served entirely on local hardware — no cloud inference costs, and plant footage never leaves the site. Estimated RM 40,000 saved.",
    features: [
      "Plate recognition and vehicle registration at the gate",
      "Cross-camera handoff — track a vehicle anywhere on site",
      "Per-zone dwell timers with unauthorised-dwell alerts",
      "Guard dashboard: live feed, vehicles inside, event log",
      "Self-hosted YOLOv8 — zero cloud cost, RM 40,000 saved",
    ],
    stack: ["YOLOv8", "ANPR", "OpenCV", "Python", "Multi-Camera Tracking", "React"],
    image: "/projects/car_tracking.png",
    tag: "Internal — HICOM Diecastings",
    featured: true,
  },
  {
    id: "hicom-ops",
    index: "04 / 10",
    title: "HICOM Ops",
    subtitle: "Production Shift Logging Mobile App",
    description:
      "Mobile app that digitises production floor data collection at HICOM Diecastings. Operators log straight to the sheet from the machine — automatic timestamps and MO assignment, live LOR% calculation, and a dashboard of daily trends. Cut shift data entry from hours to seconds and eliminated paper entirely.",
    features: [
      "Real-time logging at the machine",
      "Automatic LOR% calculation & live dashboard",
      "Casting, Secondary and Machining modules",
      "Day/night shift cycles (8AM–8PM), zero paper",
    ],
    stack: ["React Native", "Android", "Google Sheets API", "JavaScript"],
    image: "/projects/operational-app.png",
    caseStudyUrl: "https://operational-app-landing-page.vercel.app/",
    tag: "Internal — HICOM Diecastings",
    featured: true,
  },
  {
    id: "exhale",
    index: "05 / 10",
    title: "Exhale",
    subtitle: "AI-Supported Smoking Cessation App",
    description:
      "Quit-smoking app built around compassion rather than shame. A lung recovery tracker fills in over 30 smoke-free days, a craving SOS toolkit runs 4-7-8 breathing and guided urge-surfing, and an AI companion called Mind talks users through emotional triggers. Ships with community rooms for 68 countries.",
    features: [
      "Visual lung recovery tracker over 30 days",
      "Craving SOS — breathing timer & urge surfing",
      "AI coach for emotional triggers + trigger heatmap",
      "68 country community rooms, 4 languages",
    ],
    stack: ["React Native", "OpenAI API", "Android", "Offline-First"],
    image: "/projects/quitnow.png",
    caseStudyUrl: "https://quit-now.vercel.app/",
    tag: "Play Store Ready",
    featured: true,
  },
  {
    id: "vms",
    index: "06 / 10",
    title: "Visitor Management System",
    subtitle: "Facility Access & Visitor Tracking — In Production",
    description:
      "Visitor management platform built for HICOM Diecastings and actively in use on site, now holding over 1,000 visitor records. Handles secure check-in, live tracking of who is currently in the facility, and exportable reporting for the security team.",
    features: [
      "Secure check-in with role-based access",
      "Live tracking of on-site visitors",
      "Reports and data exports",
      "1,000+ records in active production use",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST API"],
    image: "/projects/visitor-management.png",
    caseStudyUrl: "https://visitors-managment-system.vercel.app/login",
    tag: "In Production — 1,000+ Records",
    featured: true,
  },
  {
    id: "hdsb-chatbot",
    index: "07 / 10",
    title: "HICOM Assistant (Nur)",
    subtitle: "Agentic Website Chatbot on the Live Company Site",
    description:
      "Agentic assistant deployed on hdsb.com.my, the public site of a die-casting manufacturer serving 100+ customers worldwide including Honda, Mazda, Perodua and Proton. Built on OpenAI and n8n, it collects enquiry details from visitors and routes each one by email to the correct internal department automatically.",
    features: [
      "Live on the public company website",
      "Extracts and structures visitor enquiries",
      "Auto-routes email to the right department",
      "OpenAI + n8n agentic workflow",
    ],
    stack: ["n8n", "OpenAI API", "LLM Agents", "Prompt Engineering", "JavaScript"],
    image: "/projects/hdsb.png",
    caseStudyUrl: "https://www.hdsb.com.my/",
    tag: "Live — Public Company Site",
    featured: true,
  },
  {
    id: "dreaming-ball",
    index: "08 / 10",
    title: "Dreaming Ball",
    subtitle: "Street Football Booking & Community Platform",
    description:
      "Platform connecting street football players with local pitches, and letting organisers host and monetise games. Players earn XP from goals, assists and clean sheets to climb from Bronze to Legend; organisers manage squads, confirm QR payments and track revenue — keeping 100% with no commission.",
    features: [
      "Pitch discovery by area, format and time",
      "QR payments — organisers keep 100%",
      "XP leaderboard: Bronze → Legend tiers",
      "Live match scoring & private invite rooms",
    ],
    stack: ["React Native", "Node.js", "QR Payments", "Real-Time DB"],
    image: "/projects/dreaming-ball.png",
    caseStudyUrl: "https://landing-page-dreaming-ball.vercel.app/",
    featured: true,
  },
  {
    id: "street-football-dz",
    index: "09 / 10",
    title: "Street Football DZ",
    subtitle: "Algerian Grassroots Football League Platform",
    description:
      "Install-free platform for organising amateur street football across all 58 Algerian provinces. Captains create teams and publish matches to an interactive map by location, format and style, with results feeding a national provincial league ranking. Fully bilingual with right-to-left Arabic and French interfaces.",
    features: [
      "Interactive match map across 58 provinces",
      "Team codes, captain roster controls",
      "National provincial league ranking",
      "Full Arabic (RTL) and French support",
    ],
    stack: ["React", "Geolocation", "i18n / RTL", "Node.js"],
    image: "/projects/algerian-street.png",
    caseStudyUrl: "https://algerian-street-dz-landinging-page.vercel.app/",
    featured: true,
  },
  {
    id: "portfolio-ai",
    index: "10 / 10",
    title: "AI Engineer Portfolio",
    subtitle: "Frontend Portfolio Build",
    description:
      "Frontend portfolio site built around computer vision and applied data science work — a clean, motion-driven single-page build focused on presentation and responsive layout.",
    features: [
      "Motion-driven single-page layout",
      "Fully responsive across breakpoints",
      "Project and credential showcase",
      "Deployed on Vercel",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/portfolio-ai.png",
    caseStudyUrl: "https://portfolio-ai-eta-six.vercel.app/",
    featured: true,
  },

  // ---- Secondary: applied AI tooling ----
  {
    id: "ocr-parser",
    index: "",
    title: "Receipt & Invoice OCR Parser",
    subtitle: "Document Intelligence",
    description:
      "Parses uploaded invoices and receipts with OCR, automatically identifying vendor, date, line items and totals, and outputs clean structured data — eliminating manual data entry.",
    features: [],
    stack: ["OCR", "Python", "Streamlit"],
    image: "/projects/ocr-parser.png",
    caseStudyUrl: "https://invoice-ocr-parser-onnn52qryjnf6pgggcqlun.streamlit.app/",
  },
  {
    id: "ap-automation",
    index: "",
    title: "3-Way Matching AP Automation",
    subtitle: "Document Intelligence",
    description:
      "Ingests Purchase Orders, Goods Received Notes and invoices, auto-matches fields across all three, and flags mismatches through a rule engine — reducing human review to exceptions only.",
    features: [],
    stack: ["FastAPI", "Python", "Rule Engine"],
    image: "/projects/ap-automation.png",
    caseStudyUrl: "https://3way-matching-ap-3dykfwu5gg3rszlxrrsxkr.streamlit.app/",
  },
  {
    id: "sales-forecasting",
    index: "",
    title: "Sales Forecasting Dashboard",
    subtitle: "AI Forecasting",
    description:
      "Projects revenue over 30/60/90-day horizons from historical sales data using Facebook Prophet, with adjustable date ranges and live confidence intervals.",
    features: [],
    stack: ["Prophet", "Plotly", "Streamlit"],
    image: "/projects/sales-forecasting.png",
    caseStudyUrl: "https://sales-forecasting-8huzbpsjavjtzuuecold8x.streamlit.app/",
  },
  {
    id: "forecasting-engine",
    index: "",
    title: "Multi-Scenario Forecasting Engine",
    subtitle: "AI Forecasting",
    description:
      "Models revenue, headcount and inventory simultaneously under user-defined growth assumptions, with side-by-side scenario comparison and AI-generated narrative summaries.",
    features: [],
    stack: ["Python", "OpenAI API", "Streamlit"],
    image: "/projects/forecasting-engine.png",
    caseStudyUrl: "https://forecastingengine-6wyyebyusm583idejypkov.streamlit.app/",
  },
  {
    id: "faq-chatbot",
    index: "",
    title: "FAQ Chatbot with RAG",
    subtitle: "AI Chatbot",
    description:
      "Ingests company documents, chunks and embeds them into a FAISS vector store, and answers questions grounded strictly in the uploaded content — cutting manual support load.",
    features: [],
    stack: ["RAG", "FAISS", "OpenAI API"],
    image: "/projects/faq-chatbot.png",
    caseStudyUrl: "https://chatbot-ten-green-62.vercel.app/",
  },
  {
    id: "support-bot",
    index: "",
    title: "Nova — Multi-Channel Support Bot",
    subtitle: "AI Chatbot",
    description:
      "Support bot on Telegram and web combining RAG with live database lookups such as order status, handling multi-turn conversations and routing unresolved queries to a human agent.",
    features: [],
    stack: ["RAG", "Telegram API", "OpenAI API"],
    image: "/projects/support-bot.png",
    caseStudyUrl: "https://multi-channel-support-bot.vercel.app/widget/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
