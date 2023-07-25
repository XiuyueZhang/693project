import { ObjectId } from "mongodb";

const users = [
  {
    firstName: 'Lily',
    lastName: "Johns",
    email: 'lily.j@example.com',
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy"
  },
  {
    firstName: 'Lynne',
    lastName: "Royston",
    email: 'lynne@example.com',
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy"
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
  { userId: new ObjectId("64bf7afe06cc09556cacaa46"), classId: new ObjectId("64bf7afe06cc09556cacaa48") },
  { userId: new ObjectId("64bf7afe06cc09556cacaa46"), classId: new ObjectId("64bf7afe06cc09556cacaa49") },
  { userId: new ObjectId("64bf7afe06cc09556cacaa47"), classId: new ObjectId("64bf7afe06cc09556cacaa49") },
  { userId: new ObjectId("64bf7afe06cc09556cacaa47"), classId: new ObjectId("64bf7afe06cc09556cacaa4b") },
  // Add more enrolment pairs as needed...
];

export { users, classes, enrolments };
