import { ObjectId } from "mongodb";

const users = [
  {
    firstName: 'Lily',
    lastName: "Johns",
    email: 'lily.j@example.com',
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    role: "user",
  },
  {
    firstName: 'Lynne',
    lastName: "Royston",
    email: 'lynne@example.com',
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    role: "user",
  },
  {
    firstName: 'Sunny',
    lastName: "Zh",
    email: 'sunny.zh@admin.com',
    password: "$2b$10$.io7JkaNKhegCSVyecUb2Oxx1ciBG4bCcgorOUEWbBXy5aC0BYrba",
    role: "admin",
  },
];

const classes = [
  {
    title: 'AWS Certified Cloud Practitioner',
    level: 'Associate',
    videoPath: '/videos/aws-certified-cloud-practitioner.mp4',
    category: 'aws',
    isActive: true
  },
  {
    title: 'AWS Certified Solutions Architect',
    level: 'Associate',
    videoPath: '/videos/aws-certified-solutions-architect-associate.mp4',
    category: 'aws',
    isActive: true
  },
  {
    title: 'Google Cloud Associate Cloud Engineer',
    level: 'Associate',
    videoPath: '/videos/google-cloud-associate-cloud-engineer.mp4',
    category: 'google',
    isActive: false
  },
  {
    title: 'Google Cloud Professional Data Engineer',
    level: 'Professional',
    videoPath: '/videos/google-cloud-professional-data-engineer.mp4',
    category: 'google',
    isActive: true
  },
  // Additional cloud certificates objects
  {
    title: 'AWS Certified Developer - Associate',
    level: 'Associate',
    videoPath: '/videos/aws-certified-developer-associate.mp4',
    category: 'aws',
    isActive: true
  },
  {
    title: 'Azure Fundamentals',
    level: 'Fundamental',
    videoPath: '/videos/azure-fundamentals.mp4',
    category: 'azure',
    isActive: true
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    level: 'Associate',
    videoPath: '/videos/microsoft-certified-azure-administrator-associate.mp4',
    category: 'azure',
    isActive: true
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    level: 'Professional',
    videoPath: '/videos/google-cloud-professional-cloud-architect.mp4',
    category: 'google',
    isActive: true
  },
  {
    title: 'IBM Certified Cloud Solution Architect v3',
    level: 'Professional',
    videoPath: '/videos/ibm-certified-cloud-solution-architect-v3.mp4',
    category: 'ibm',
    isActive: true
  },
  {
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    level: 'Expert',
    videoPath: '/videos/microsoft-certified-azure-solutions-architect-expert.mp4',
    category: 'azure',
    isActive: true
  },
];

const enrolments = [
  { userId: new ObjectId("64bfac60102e61426c240260"), classId: new ObjectId("64bfac60102e61426c240263") },
  { userId: new ObjectId("64bfac60102e61426c240260"), classId: new ObjectId("64bfac60102e61426c240264") },
  { userId: new ObjectId("64bfac60102e61426c240261"), classId: new ObjectId("64bfac60102e61426c240264") },
  { userId: new ObjectId("64bfac60102e61426c240261"), classId: new ObjectId("64bfac60102e61426c240266") },
  // Add more enrolment pairs as needed...
];

export { users, classes, enrolments };
