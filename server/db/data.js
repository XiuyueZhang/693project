const users = [
  {
    _id: 'user001',
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy"
  },
  {
    _id: 'user002',
    name: 'Jane Smith',
    age: 25,
    email: 'jane@example.com',
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy"
  },
  // Add more dummy data objects as needed
];

const classes = [
  {
    _id: 'class001',
    title: 'AWS Certified Cloud Practitioner',
    level: 'Associate',
    videoPath: '/videos/aws-certified-cloud-practitioner.mp4',
    category: 'aws',
    isActive: true
  },
  {
    _id: 'class002',
    title: 'AWS Certified Solutions Architect - Associate',
    level: 'Associate',
    videoPath: '/videos/aws-certified-solutions-architect-associate.mp4',
    category: 'aws',
    isActive: true
  },
  {
    _id: 'class003',
    title: 'Google Cloud Associate Cloud Engineer',
    level: 'Associate',
    videoPath: '/videos/google-cloud-associate-cloud-engineer.mp4',
    category: 'google',
    isActive: false
  },
  {
    _id: 'class004',
    title: 'Google Cloud Professional Data Engineer',
    level: 'Professional',
    videoPath: '/videos/google-cloud-professional-data-engineer.mp4',
    category: 'google',
    isActive: true
  },
  // Add more dummy data objects as needed
];

const enrolments = [
  { userId: 'user001', classId: 'class001' },
  { userId: 'user001', classId: 'class002' },
  { userId: 'user002', classId: 'class003' },
  { userId: 'user002', classId: 'class004' },
];

export { users, classes, enrolments };
