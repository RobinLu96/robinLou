import { robinSkill } from "./interface/robinSkill";

export const SKILLS_DATA: robinSkill[] = [
  {
    type: 'Programming Language',
    names: [
      'Java', 'C#', 'JavaScript', 'TypeScript', 'Python'
    ]
  },
  {
    type: 'Backend & FrameWork',
    names: [
      'Node.js & Express.js', 'ASP.NET Core/MVC/WebAPI'
    ]
  },
  {
    type: 'Frontend',
    names: [
      'Angular', 'React.js', 'CSS', 'HTML', 'jQuery'
    ]
  },
  {
    type: 'Database & ORM',
    names: [
      'Hadoop', 'SQL Server', 'MongoDB', 'Entity Framework', 'IBM DB2'
    ]
  },
  {
    type: 'Cloud',
    names: [
      'Azure Web Service & Storage', 'Firebase DB & Functions', 'Heroku'
    ]
  },
  {
    type: 'DevOps & Testing',
    names: [
      'JUnit', 'Protractor', 'Jenkins', 'K8S', 'Docker'
    ]
  },
  {
    type: 'Others',
    names: [
      'Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Auth0', 'Agile(Scrum)'
    ]
  },
];
