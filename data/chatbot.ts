export type ChatLink = { label: string; href: string };

export type Intent = {
  id: string;
  /** Lowercase phrases to match against the visitor's message. */
  keywords: string[];
  answer: string;
  links?: ChatLink[];
};

export const GREETING =
  "Hi! I'm Oussama's assistant 👋 Ask me about his experience, projects, skills, or how to get in touch.";

export const QUICK_REPLIES = [
  "How do I contact you?",
  "What do you build?",
  "Best project?",
  "Are you available for hire?",
];

export const intents: Intent[] = [
  {
    id: "greeting",
    keywords: ["hello", "hi ", "hey", "salam", "good morning", "good evening", "bonjour"],
    answer:
      "Hey! Good to meet you. I can tell you about Oussama's work in industrial AI and computer vision, his projects, or how to reach him. What would you like to know?",
  },
  {
    id: "contact",
    keywords: [
      "contact", "email", "e-mail", "mail", "phone", "number", "call", "reach",
      "get in touch", "whatsapp", "talk to",
    ],
    answer:
      "You can reach Oussama directly:\n\n📧  chakeuroussama@gmail.com\n📱  +60 17 224 6462\n📍  Selangor, Malaysia\n\nHe usually replies within 24 hours.",
    links: [
      { label: "Send an email", href: "mailto:chakeuroussama@gmail.com" },
      { label: "Call", href: "tel:+60172246462" },
    ],
  },
  {
    id: "location",
    // Deliberately not a bare "where" — that also matches "where did you study".
    keywords: [
      "where are you", "where is he", "where do you live", "located", "location",
      "based in", "city", "country", "malaysia", "relocate", "remote",
    ],
    answer:
      "Oussama is based in Selangor, Malaysia. He's originally from Algeria and is actively looking for Industrial AI/ML roles abroad — so relocation is very much on the table.",
  },
  {
    id: "hire",
    keywords: [
      "hire", "available", "availability", "freelance", "work together", "job",
      "opportunity", "recruit", "open to", "looking for",
    ],
    answer:
      "Yes — he's open to full-time roles and selective freelance work, and is specifically looking for Industrial AI/ML engineering positions abroad.\n\nThe fastest way to start a conversation is email.",
    links: [{ label: "Email Oussama", href: "mailto:chakeuroussama@gmail.com" }],
  },
  {
    id: "role",
    keywords: [
      "who are you", "who is", "about", "yourself", "introduce", "what do you do",
      "what do you build", "specialise", "specialize", "background",
    ],
    answer:
      "Oussama is an Industrial AI & Automation Engineer with an unusual combination: a degree in electromechanical engineering plus data science.\n\nThat means he can walk a factory floor, understand the process, and then build the AI system that improves it — computer vision safety systems, agentic automation, and the backends behind them.",
  },
  {
    id: "experience",
    keywords: ["experience", "worked", "work history", "career", "employment", "internship", "hicom", "job history"],
    answer:
      "Current role: AI & Digitalization Intern at HICOM Diecastings, a heavy-industry die-casting manufacturer in Malaysia.\n\nThere he's shipped PPE safety detection across the plant's CCTV network, a multi-camera vehicle tracking system, an agentic chatbot on the public company site, and an e-form platform used by 1,000+ staff.\n\nBefore that: backend developer intern at Proceedit Trading (8 months, remote), plus hands-on production roles at ACGroup and Tosyali Manufacturing.",
  },
  {
    id: "impact",
    keywords: ["impact", "savings", "saved", "money", "roi", "results", "value", "cost", "rm"],
    answer:
      "Roughly RM 99,000 in documented savings at HICOM Diecastings:\n\n• RM 50,000 — PPE safety detection system\n• RM 40,000 — multi-camera vehicle tracking\n• RM 9,000 — enterprise e-form digitisation\n\nHis systems are also used by over 1,000 employees across 4 departments.",
  },
  {
    id: "projects",
    keywords: ["project", "portfolio", "built", "made", "showcase", "work samples", "case study"],
    answer:
      "There are 10 featured projects plus 6 smaller AI tools. Highlights:\n\n• AgriSenx — AI + IoT poultry monitoring (his startup)\n• PPE Detection — plant-wide safety compliance via CCTV\n• Vehicle Entry Control — multi-camera ANPR tracking\n• HICOM Ops — production shift logging app\n• Exhale — AI-supported quit-smoking app\n\nScroll to the Work section to see them all with live links.",
  },
  {
    id: "best-project",
    keywords: ["best project", "favourite", "favorite", "proudest", "biggest", "most impressive", "top project"],
    answer:
      "Probably AgriSenx / Poultrix — it's the one that's both a startup and peer-reviewed research.\n\nIt puts production-grade computer vision on a Raspberry Pi instead of expensive GPUs, hitting 98.27% fecal classification and 98% mortality detection accuracy. It won the Hult Prize campus round and reached the national top 8.\n\nThe PPE detection system is a close second — that one runs live in a factory and saved RM 50,000.",
  },
  {
    id: "ppe",
    keywords: ["ppe", "helmet", "hardhat", "safety", "gloves", "cctv", "detection system"],
    answer:
      "The PPE Safety Detection System is a custom YOLOv8 model wired into HICOM's full CCTV network. It spots missing hardhats and gloves in real time, fires instant Telegram alerts to the Safety Department with an annotated frame, and feeds a live compliance dashboard.\n\nManagement estimated it saved RM 50,000.",
  },
  {
    id: "vehicle",
    keywords: ["vehicle", "car", "anpr", "plate", "tracking", "guard", "security"],
    answer:
      "Vehicle Entry Control reads number plates at the gate, then hands each car between every camera on site — so a guard can see where any vehicle is and how long it's been in each zone. Unauthorised dwell time raises an alert with a snapshot.\n\nThe model runs entirely on local hardware: no cloud inference costs, and plant footage never leaves the site. Saved around RM 40,000.",
  },
  {
    id: "skills",
    // "programming language" rather than bare "language", so "what languages
    // do you speak" routes to the spoken-languages intent instead.
    keywords: [
      "skill", "tech stack", "technolog", "tools", "framework", "stack",
      "programming language", "coding language", "programming", "python", "yolo",
    ],
    answer:
      "Core areas:\n\n• Computer Vision — YOLOv8, OpenCV, TensorFlow, PyTorch, Keras, TF Lite\n• AI Automation — n8n, OpenAI API, RAG, FAISS, LLM agents\n• Backend — Python, FastAPI, Django REST, PostgreSQL, MongoDB, SQL\n• Cloud & Tools — AWS, GCP, Docker, Git, Streamlit\n• Mobile — React Native, Flutter\n\nPlus the industrial side: CCTV/RTSP integration, PPE systems, and mechanical engineering fundamentals.",
  },
  {
    id: "research",
    keywords: ["research", "paper", "publication", "published", "academic", "poultrix", "study"],
    answer:
      "He's first author on \"Edge AI–Driven Poultry Health Monitoring Using Computer Vision in Resource-Constrained IoT Environments\", published through Albukhary International University's School of Computing and Informatics.\n\nIt describes a four-stage cascading YOLOv8 pipeline achieving 98.27% fecal classification and 98% mortality detection — all on a Raspberry Pi 4 and ESP32-CAM, with alerts delivered in 4.2 seconds on average.",
  },
  {
    id: "education",
    keywords: [
      "education", "study", "studied", "degree", "university", "school",
      "college", "graduate", "cgpa", "where did you study", "academic background",
    ],
    answer:
      "Two degrees:\n\n🎓 B.Sc. Computer Science (Data Science) — Albukhary International University, Malaysia. Expected Nov 2026, Dean's List every semester since enrolment.\n\n🎓 B.Sc. Electromechanical Engineering — Algeria, 2021 (taught in French).\n\nThat mechanical foundation is what makes his industrial AI work different from a pure software background.",
  },
  {
    id: "awards",
    keywords: ["award", "prize", "hult", "won", "win", "competition", "achievement", "certification", "certificate"],
    answer:
      "• Hult Prize — campus winner at AIU, then national top 8 in Malaysia with AgriSenx\n• Swiss Innovation Challenge — participant, presented Poultrix\n• Published research — first author\n• Certifications: Google Cloud Professional, IBM Data Fundamentals, IBM Cloud Essentials, Python (Coursera)",
  },
  {
    id: "technexus",
    keywords: ["technexus", "club", "teaching", "community", "volunteer", "leadership", "mentor"],
    answer:
      "He co-founded TechNexus, a student-led tech club at Albukhary International University. It runs coding bootcamps, workshops and peer-learning sessions covering coding fundamentals, AI and cloud computing — reaching over 150 students.",
    links: [{ label: "Visit technexus.club", href: "https://technexus.club/" }],
  },
  {
    id: "languages",
    keywords: [
      "speak", "spoken", "arabic", "french", "english", "multilingual", "fluent",
      "language", "languages",
    ],
    answer:
      "Arabic (native), English (fluent), French (intermediate). His first degree was taught entirely in French and his current one in English.",
  },
  {
    id: "resume",
    keywords: ["resume", " cv ", "curriculum", "download"],
    answer: "You can download the full CV here — it covers everything in more detail.",
    links: [{ label: "Download resume", href: "/resume.pdf" }],
  },
  {
    id: "thanks",
    keywords: ["thank", "thanks", "cheers", "appreciate", "nice", "cool", "awesome", "great"],
    answer: "Happy to help! Anything else you'd like to know?",
  },
];

export const FALLBACK =
  "I'm not sure about that one — I only know what's on this portfolio. Try asking about his experience, projects, skills, research, or how to get in touch.\n\nFor anything else, email him directly at chakeuroussama@gmail.com.";

const SHORT_GREETINGS = ["hi", "hey", "hello", "yo", "sup", "salam", "hola", "bonjour"];

/**
 * Scores each intent by how much of its keyword list appears in the message.
 * Longer keyword matches score higher so a specific phrase like
 * "computer vision" outranks an incidental short word.
 */
export function matchIntent(message: string): Intent | null {
  const text = ` ${message.toLowerCase().replace(/[^\w\s@.+-]/g, " ").replace(/\s+/g, " ")} `;

  // "hi" / "hey there" are too short to clear the keyword-length threshold
  // below, so greet on a short opener whose first word is a greeting. Anything
  // longer ("hi, what's your email?") falls through to real intent matching.
  const words = text.trim().split(" ");
  if (words.length <= 3 && SHORT_GREETINGS.includes(words[0])) {
    return intents.find((i) => i.id === "greeting") ?? null;
  }

  let best: Intent | null = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        score += keyword.trim().length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }

  // Require a small threshold so a stray "a" or "hi" inside a word doesn't match.
  return bestScore >= 3 ? best : null;
}
