export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  metrics?: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  logo?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
}

export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  category: "Machine Learning" | "Programming Languages" | "Frameworks-Libraries" | "Deployment";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "News Researcher AI Agent",
    description: "Built a dual-agent AI system using Crew AI, Python, and Serper API to automate research-to-blog transitions, improving content creation efficiency by 80% through inter-agent collaboration. Enabled real-time topic research and content synthesis with autonomous Researcher and Writer agents, reducing manual effort by 75% and streamlining end-to-end content generation.",
    technologies: ["Python", "Crew AI", "Serper API", "LLM", "NLP"],
    metrics: ["80% improved efficiency", "75% reduced manual effort"],
    image: "/images/news-researcher.jpg",
    githubUrl: "https://github.com/himadri-09/news-researcher"
  },
  {
    id: 2,
    title: "MultiModel RAG",
    description: "Built a multimodal RAG system using Qwen for image captioning and Gemini for answering; integrated FAISS-based retrieval from PDFs containing text, tables, and images, with PDF memory caching to skip redundant processing, achieving 95%+ accuracy and sub-second search. Implemented automatic query decomposition to handle complex questions through sub-querying, boosting answer depth and relevance by 40%. Designed a scalable retrieval pipeline with 768-dim embeddings, chunk-level metadata, persistent FAISS storage, and both local image and PDF caching for fast, efficient semantic search.",
    technologies: ["Python", "Qwen", "Gemini", "FAISS", "RAG", "LLM"],
    metrics: ["95%+ accuracy", "40% improved answer relevance", "Sub-second search time"],
    image: "/images/multimodel-rag.jpg",
    githubUrl: "https://github.com/himadri-09/multimodel-rag"
  },
  {
    id: 3,
    title: "End to end ML project with MLflow",
    description: "Developed a comprehensive machine learning pipeline with MLflow for experiment tracking, model versioning, and deployment. Implemented automated feature engineering, hyperparameter tuning, and model evaluation to optimize performance.",
    technologies: ["Python", "MLflow", "Scikit-Learn", "Docker", "AWS"],
    metrics: ["95% model accuracy", "60% reduced deployment time"],
    image: "/images/mlflow-project.jpg",
    githubUrl: "https://github.com/himadri-09/mlflow-project"
  },
  {
    id: 4,
    title: "CAR Parking Space Detection",
    description: "Created a computer vision system to detect and monitor parking space availability in real-time. Used deep learning models to identify vacant and occupied spaces from camera feeds.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    metrics: ["98% detection accuracy", "Real-time processing"],
    image: "/images/parking-detection.jpg",
    githubUrl: "https://github.com/himadri-09/parking-detection"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Dyyota Software",
    position: "AI/ML Intern",
    duration: "June 2025 - Present",
    description: [
      "Developed an Apartment Vastu Evaluation system by integrating Qwen-VL for image captioning and Gemini/GPT models for spatial and textual analysis, enhancing vastu recommendation accuracy by ~35%. Applied query decomposition, prompt engineering, and reranking strategies to improve document retrieval precision, answer completeness and boost user satisfaction by ~40%.",
      "Designed a LangSmith-integrated evaluation pipeline enabling traceable with automated logging of retrieved chunks, prompts, answers, and RAGAS metrics, supporting transparent eval and debugging.",
      "Contributed to the Coding Agent project by automating Supabase credential fetching and setting up Azure containers with Hot Module Replacement, reducing setup time by ~70%.",
      "Assisted in creating a Scope Analyzer-based pipeline within the Coding Agent project that interprets user prompts and applies modifications through one of five predefined scopes."
    ],
    logo: "/images/dryota-logo.png"
  },
  {
    id: 2,
    company: "Vishal Contract Works",
    position: "Data Science Intern",
    duration: "April 2024 - Sep 2024",
    description: [
      "Engineered an image-based product retrieval system using CLIP and Milvus, achieving 96% visual match accuracy with scalable vector search and FastAPI integration for e-commerce platforms.",
      "Enhanced retrieval precision and reduced latency by applying clustering-based image optimization and hybrid search strategies, cutting search time by 35% and improving recommendation quality."
    ],
    logo: "/images/vcw-logo.png"
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Netaji Subhash Engineering College",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2021 - 2025",
    gpa: "8.56/10"
  }
];

export const skills: Skill[] = [
  // Machine Learning
  { id: 1, name: "Deep Learning", proficiency: 90, category: "Machine Learning" },
  { id: 2, name: "Neural Networks", proficiency: 85, category: "Machine Learning" },
  { id: 3, name: "LLM", proficiency: 95, category: "Machine Learning" },
  { id: 4, name: "NLP", proficiency: 90, category: "Machine Learning" },
  { id: 5, name: "Fine Tuning", proficiency: 80, category: "Machine Learning" },
  
  // Programming Languages
  { id: 6, name: "Python", proficiency: 95, category: "Programming Languages" },
  { id: 7, name: "SQL", proficiency: 85, category: "Programming Languages" },
  { id: 8, name: "Java", proficiency: 75, category: "Programming Languages" },
  { id: 9, name: "HTML/CSS", proficiency: 80, category: "Programming Languages" },
  
  // Frameworks-Libraries
  { id: 10, name: "TensorFlow", proficiency: 90, category: "Frameworks-Libraries" },
  { id: 11, name: "PyTorch", proficiency: 85, category: "Frameworks-Libraries" },
  { id: 12, name: "Scikit-Learn", proficiency: 90, category: "Frameworks-Libraries" },
  { id: 13, name: "Pandas", proficiency: 95, category: "Frameworks-Libraries" },
  { id: 14, name: "NumPy", proficiency: 95, category: "Frameworks-Libraries" },
  { id: 15, name: "LangChain", proficiency: 85, category: "Frameworks-Libraries" },
  
  // Deployment
  { id: 16, name: "Docker", proficiency: 80, category: "Deployment" },
  { id: 17, name: "AWS", proficiency: 75, category: "Deployment" },
  { id: 18, name: "Fast API", proficiency: 85, category: "Deployment" },
  { id: 19, name: "Git", proficiency: 90, category: "Deployment" },
  { id: 20, name: "MLOps", proficiency: 80, category: "Deployment" }
];

export const personalInfo = {
  name: "Himadri Mondal",
  email: "mondalhimadri43@gmail.com",
  phone: "+91-9641643774",
  github: "himadri-09",
  linkedin: "himadrimondal09",
  bio: "AI Engineer specializing in machine learning, deep learning, and natural language processing with experience in building intelligent systems and applications."
};