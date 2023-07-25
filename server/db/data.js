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
    title: 'AWS Certified Solutions Architect - Associate',
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
];

const enrolments = [
  { userId: new ObjectId("64bfac60102e61426c240260"), classId: new ObjectId("64bfac60102e61426c240263") },
  { userId: new ObjectId("64bfac60102e61426c240260"), classId: new ObjectId("64bfac60102e61426c240264") },
  { userId: new ObjectId("64bfac60102e61426c240261"), classId: new ObjectId("64bfac60102e61426c240264") },
  { userId: new ObjectId("64bfac60102e61426c240261"), classId: new ObjectId("64bfac60102e61426c240266") },
  // Add more enrolment pairs as needed...
];

export { users, classes, enrolments };
