const users = [
  {
    _id: "64bf385bcce2a4f8eeb9ada9",
    firstName: 'Lily',
    lastName: "Johns",
    email: 'lily.j@example.com',
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy"
  },
  {
    _id: "64bf385bcce2a4f8eeb9adac",
    firstName: 'Lynne',
    lastName: "Royston",
    email: 'lynne@example.com',
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy"
  },
];

const classes = [
  {
    _id: "64bf385bcce2a4f8eeb9adad",
    title: 'AWS Certified Cloud Practitioner',
    level: 'Associate',
    videoPath: '/videos/aws-certified-cloud-practitioner.mp4',
    category: 'aws',
    isActive: true
  },
  {
    _id: "64bf385bcce2a4f8eeb9adaf",
    title: 'AWS Certified Solutions Architect - Associate',
    level: 'Associate',
    videoPath: '/videos/aws-certified-solutions-architect-associate.mp4',
    category: 'aws',
    isActive: true
  },
  {
    _id: "64bf385bcce2a4f8eeb9adae",
    title: 'Google Cloud Associate Cloud Engineer',
    level: 'Associate',
    videoPath: '/videos/google-cloud-associate-cloud-engineer.mp4',
    category: 'google',
    isActive: false
  },
  {
    _id: "64bf385bcce2a4f8eeb9adaj",
    title: 'Google Cloud Professional Data Engineer',
    level: 'Professional',
    videoPath: '/videos/google-cloud-professional-data-engineer.mp4',
    category: 'google',
    isActive: true
  },
];

const enrolments = [
  { userId: "64bf385bcce2a4f8eeb9ada9", classId: "64bf385bcce2a4f8eeb9adad" },
  { userId: "64bf385bcce2a4f8eeb9ada9", classId: "64bf385bcce2a4f8eeb9adae" },
  { userId: "64bf385bcce2a4f8eeb9adac", classId: "64bf385bcce2a4f8eeb9adae" },
  { userId: "64bf385bcce2a4f8eeb9adac", classId: "64bf385bcce2a4f8eeb9adaj" },
];

export { users, classes, enrolments };
