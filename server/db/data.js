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
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-Hidden+love.mp4',
    category: 'aws',
    isActive: true,
    poster: "cover1.jpg",
    description: 'The AWS Certified Cloud Practitioner certification is designed for individuals with basic knowledge of AWS Cloud services. It validates the candidate\'s understanding of AWS Cloud concepts, global infrastructure, security, pricing, and compliance. This certification is an excellent starting point for those who want to demonstrate their overall understanding of AWS Cloud.',
  },
  {
    title: 'AWS Certified Solutions Architect',
    level: 'Associate',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-Waiting+For+You+Official+MV.mp4',
    category: 'aws',
    isActive: true,
    poster: "cover2.jpg",
    description: 'The AWS Certified Solutions Architect - Associate certification is intended for individuals who have experience in designing distributed applications and systems on the AWS platform. It validates the candidate\'s ability to design cost-effective, fault-tolerant, and scalable architectures on AWS. This certification is suitable for professionals working in architect or developer roles.',
  },
  {
    title: 'Google Cloud Associate Cloud Engineer',
    level: 'Associate',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-Handwritten+Past+Official+MV.mp4',
    category: 'google',
    isActive: false,
    poster: "cover3.jpg",
    description: 'The Google Cloud Associate Cloud Engineer certification is designed for individuals who can deploy applications, monitor operations, and manage enterprise solutions on the Google Cloud Platform (GCP). Certified Associate Cloud Engineers have proficiency in using GCP services and implementing best practices for security and compliance.',
  },
  {
    title: 'Google Cloud Professional Data Engineer',
    level: 'Professional',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-You+Are+The+Firework+I+Missed+Official+MV.mp4',
    category: 'google',
    isActive: true,
    poster: "cover4.jpg",
    description: 'The Google Cloud Professional Data Engineer certification is intended for data professionals who design and build data processing systems on Google Cloud Platform. Certified Data Engineers can use GCP services to solve data challenges, transform raw data into valuable insights, and ensure data security and compliance.',
  },
  {
    title: 'AWS Certified Developer - Associate',
    level: 'Associate',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-Your+Love+Song+Official+Music+Video.mp4',
    category: 'aws',
    isActive: true,
    poster: "cover5.jpg",
    description: 'The AWS Certified Developer - Associate certification is designed for developers who have experience in designing, building, and deploying applications on AWS. It validates the candidate\'s ability to use AWS SDKs to interact with AWS services, write code for serverless applications, and implement security and troubleshooting best practices.',
  },
  {
    title: 'Azure Fundamentals',
    level: 'Fundamental',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-+Here%2C+After%2C+Us++Official+Music+Video.mp4',
    category: 'azure',
    isActive: true,
    poster: "cover6.jpg",
    description: 'The Azure Fundamentals certification is an entry-level certification that validates foundational knowledge of Microsoft Azure cloud services. It is suitable for individuals who are new to Azure and want to learn about its core services, security features, compliance, and pricing. This certification is a prerequisite for more advanced Azure certifications.',
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate',
    level: 'Associate',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-Red+Scarf.mp4',
    category: 'azure',
    isActive: true,
    poster: "cover7.jpg",
    description: 'The Microsoft Certified: Azure Administrator Associate certification is for Azure administrators who manage cloud services and resources. It validates the candidate\'s ability to implement, monitor, and maintain Azure solutions, including identity and storage management, virtual networks, and security. This certification is ideal for professionals responsible for managing Azure environments.',
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    level: 'Professional',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-Miss+You+Official+Music+Video.mp4',
    category: 'google',
    isActive: true,
    poster: "cover8.jpg",
    description: 'The Google Cloud Professional Cloud Architect certification is designed for experienced cloud professionals who can design, develop, and manage scalable, secure, and reliable solutions on Google Cloud Platform. Certified Cloud Architects have expertise in GCP services and can make well-informed decisions on infrastructure and solution design.',
  },
  {
    title: 'IBM Certified Cloud Solution Architect v3',
    level: 'Professional',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io+The+Dark+Plum+Sauce+Official+Music+Video.mp4',
    category: 'ibm',
    isActive: true,
    poster: "cover9.jpg",
    description: 'The IBM Certified Cloud Solution Architect v3 certification is intended for architects who can design and plan cloud solutions on the IBM Cloud. Certified Cloud Solution Architects have the knowledge and skills to define cloud computing concepts, design cloud services, and manage cloud security and compliance. This certification is specific to IBM Cloud offerings.',
  },
  {
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    level: 'Expert',
    videoPath: 'https://cloudtech-project-videos.s3.ap-southeast-2.amazonaws.com/yt5s.io-+Beginning+of+the+End+Official+Music+Video.mp4',
    category: 'azure',
    isActive: true,
    poster: "cover10.jpg",
    description: 'The Microsoft Certified: Azure Solutions Architect Expert certification is for experienced Azure solutions architects who design and implement advanced cloud solutions on Microsoft Azure. It validates the candidate\'s expertise in compute, storage, networking, and security services. This certification is suitable for professionals responsible for complex Azure deployments.',
  },
];


const enrolments = [
  { userId: new ObjectId("64bfac60102e61426c240260"), classId: new ObjectId("64d2ee92d8871b5f45aa46cf") },
  { userId: new ObjectId("64bfac60102e61426c240260"), classId: new ObjectId("64d2ee92d8871b5f45aa46d0") },
  { userId: new ObjectId("64bfac60102e61426c240261"), classId: new ObjectId("64d2ee92d8871b5f45aa46d0") },
  { userId: new ObjectId("64bfac60102e61426c240261"), classId: new ObjectId("64d2ee92d8871b5f45aa46d2") },
  // Add more enrolment pairs as needed...
];

export { users, classes, enrolments };
