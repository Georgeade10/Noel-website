import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.jpg';

import Testimonial1 from './assets/testimonial1.jpeg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial33.jpg';
import Testimonial4 from './assets/testimonial4.jpeg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Resume',
    path: 'resume',
  },

  {
    name: 'Recommendations',
    path: 'testimonial',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & development',
    description:
      'Create custom designs for your website that are tailored to your brand and business goals.Build your website from scratch or work with an existing design to develop a functional website using the latest web technologies.',
  },
  {
    id: 2,
    name: ' Creative ',
    title: ' Graphics Design, UI & UX',
    description:
      ' create a user experience (UX) design that ensures your website is intuitive and easy to navigate, leading to increased user satisfaction and engagement.',
  },
  {
    id: 3,
    name: ' Digital Marketing ',
    title: ' Campaign Manager ',
    description:
      '  I can help you create and execute successful digital marketing campaigns to promote your brand and reach your target audience. services include: Strategy development, campaign planning and execution, audience targeting etc. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Paid & Organic ',
    description:
      '  I can work with you to develop a comprehensive paid and organic advertising strategy that aligns with your business goals and targets your ideal audience. ',
  },
  {
    id: 5,
    name: ' Innovation ',
    title: ' Innovation Management ',
    description:
      'As an innovation manager, I can work with you to develop and implement strategies to foster innovation within your organization',
  },
  {
    id: 6,
    name: ' Social Media ',
    title: ' Social Media Management ',
    description:
      'As a social media manager, I can help you create and execute successful social media strategies to build your brand, engage with your audience, and drive business results.',
  },
  {
    id: 7,
    name: ' SEO ',
    title: ' Search Engine Optimization ',
    description:
      'As an SEO specialist, I can work with you to improve your websites search engine rankings, increase organic traffic, and drive business results.',
  },
  {
    id: 8,
    name: ' Marketing ',
    title: ' Marketing Manager ',
    description:
      'As a marketing manager, I can work with you to develop and implement effective marketing strategies that help you reach your business goals. ',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Python programming & Data analysis ',
    percentage: 70,
    description:
      'The ability to programme efficiently and accurately manipulate large datasets with Python',
  },

  {
    id: 2,
    name: 'SQL programming:',
    percentage: 75,
    description:
      'Ability to query databases to extract, manipulate, and analyze data using SQL commands, functions, and operators.',
  },
  {
    id: 3,
    name: 'Data Visualization',
    percentage: 80,
    description:
      'Ability to create graphical representations of data to facilitate understanding and communication of insights',
  },
  {
    id: 4,
    name: 'Machine learning',
    percentage: 70,
    description:
      'Ability to designe, implemente, and evaluate models that can learn from data to make predictions or decisions.',
  },

  {
    id: 5,
    name: ' Project Management   ',
    percentage: 70,
    description:
      "Proven a track record of managing complex projects from start to finish, ensuring they are completed on time, within budget, and to the satisfaction of all stakeholders. I have experience using various project management methodologies, including Agile, Waterfall, and Scrum.",
  },
  {
    id: 7,
    name: 'Digital Transformation',
    percentage: 75,
    description:
      "Specialized in guiding businesses through digital and agile transformations, product development, and change management. My services are tailored to meet each client's unique goals, helping them leverage technology to streamline operations, improve customer experiences, and manage change effectively. With my strategic guidance and technical support, businesses can become more agile, customer-centric, and competitive while achieving measurable growth and success.",
  },
  {
    id: 8,
    name: 'Business Intelligence ',
    percentage: 80,
    description:
      "Using SQL queries and Tableau, I can provide answers to business problems and create visualizations to help you take actionable insights from your business data sets.",
  },
  {
    id: 6,
    name: 'Oil and Gas Consultancy',
    percentage: 85,
    description:
    "With over 20 years of experience in Oil and Gas, I can readily provide domain expertise on Log Quality Assurance (Mudlog +MWD +Wireline), Data aggregation and Normalization (Remove Silos), Data Integration, Data Security, Subsurface data analytics.  ",
  },
  {
    id: 9,
    name: 'Manpower Development and training',
    percentage: 80,
    description:
      "Curated a couple of in person Training courses that showcase the application of Data Science and Machine learning in the Oil and Gas industry.",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Tableau',
    title: 'Visualization of the U.S Census Data sets',
    description:
      'The US Census Demography project done in Tableau is an interactive dashboard that presents various visualizations of the demographic data collected from the US Census Bureau.',
    href: 'https://drive.google.com/file/d/1wL2hCKcOIk9TRTtCjVm9EM1MfwYq6YaA/view',
  },
  {
    id: 2,
    img: Project2,
    category: 'SQL',
    title: 'Deforestation Exploration project',
    description:
      'ForestQuery is on a mission to combat deforestation around the world and to raise awareness about this topic and its impact on the environment.',
    href: 'https://drive.google.com/file/d/1Bm3FESz1eAjNyJ7xUikAmUqVSn8ociKg/view',
  },
  {
    id: 3,
    img: Project3,
    category: 'Excel',
    title:
      'Built Financial And Sales Model Forecast With Excel Using NYSE Kaggle Data Sets',
    description:
      'The standard Deviation of the the energy sector (246742166065) is much higher than that of the Information Technology sector (30469652974).This',
    href: 'https://drive.google.com/file/d/1IwVWNN9Tf7mDmhhZZpkOx2OJgLiQq3Um/view',
  },
  {
    id: 4,
    img: Project4,
    category: 'Oil and Gas',
    title: 'Lithofacies prediction',
    description:
      'The overall aim of this project is to use a machine learning algorithm to predict the lithology label(lithofacies) of a well log sample',
    href: 'https://docs.google.com/presentation/d/1eHXSYsFcg7zD15r5-Qq0-0um6cTfcNae/edit#slide=id.p25',
  },
  {
    id: 5,
    img: Project4,
    category: 'Publication',
    title: 'Formation Related Drilling Difficulty and Possible Ways to Improve Drilling Performance – Deepwater-02 Well Case Study',
    description:
      'This paper emphasizes the importance of proactively identifying and characterizing difficult-to-drill formations in order to select appropriate drilling practices and equipment to avoid downtime, increased costs, and failure to achieve geological targets, as seen in the Deep water-02 well, and recommends identifying such formations in offset wells to improve future drilling practices...',
    href: 'https://nape.org.ng/wp-content/uploads/2020/09/18-27.-Formation-Related-Drilling-Difficulty.pdf',
  },
  {
    id: 6,
    img: Project4,
    category: 'Publication',
    title: 'Coring Unconsolidated Formations under Challenging Drilling Conditions – A Case Study, Swamp- Niger Delta.',
    description: 'This paper emphasizes the importance of conventional coring in reservoir management and optimizing oil and gas production, highlighting the challenges encountered in coring a poorly consolidated sandstone reservoir and the innovative techniques deployed to mitigate these challenges, including the use of gyro survey while drilling, anti-collision analysis, well-designed drilling fluid, and special coring bottom hole assembly, resulting in a high-quality recovery factor of over 93 percent.',
    href: 'https://www.researchgate.net/publication/328166990_Coring_Unconsolidated_Formations_under_Challenging_Drilling_Conditions_-_A_Case_Study_Swamp-_Niger_Delta',
  },
  {
    id: 7,
    img: Project4,
    category: 'Oil and Gas',
    title: 'Fault Identification',
    description: '',
    href: 'https://drive.google.com/drive/folders/1N8GGHrHq47xB6K0MXBpXk3-kpEBtgdLF',
  },
  {
    id: 10,
    img: Project4,
    category: 'Oil and Gas',
    title: 'Neural Network for Lithofacies prediction',
    description:
      'The overall aim of this project is to predict the lithology label(lithofacies) of a well log sample using a neural network.',
    href: 'https://docs.google.com/presentation/d/12H6bKadfaV8Z5h0VoAtEmRPkht-Ym_D7fJj09VT3QFI/edit#slide=id.g1435c20e036_0_54',
  },
  {
    id: 11,
    img: Project4,
    category: 'Oil and Gas',
    title: 'Basic python for Geosciences',
    description:
      'Geoscientists study the physical aspects of the Earth, such as its composition, structure, and processes, to learn about its past, present, and future.',
    href: 'https://docs.google.com/presentation/d/1MY6J1icYd2-WCFSZWBt1NDxby8h_D-ruDJVcr3_uWaM/edit#slide=id.g13e08eb8a97_1_59',
  },
];

export const cv = [
  
  {
    id: 1,
    title: 'Mastershool Data Analytics Program, ',
    subtitle: 'Masterschool New York, USA',
    date: '2022',
    description: 'I have acquired a diverse range of skills and techniques that equip me with the ability to utilize data for informed decision-making and problem-solving, along with practical experience in utilizing data analysis software including Python, and SQL to manipulate and analyze large datasets.',
    category: 'education',
  },
  {
    id: 1,
    title: 'Mini MBA, ',
    subtitle: 'Tekedia Institute, Boston, MA, United States',
    date: '2022',
    description: '',
    category: 'education',
  },

  {
    id: 2,
    title: 'Competing in the Age of AI, Executive Business Course,',
    subtitle: 'Harvard Business School, Boston, MA, United States',
    date: '2021',
    description: '',
    category: 'education',
  },

  {
    id: 3,
    title: 'Msc Geophysics',
    subtitle: 'University of Lagos, Lagos, Nigeria',
    date: '2012',
    description: '',
    category: 'education',
  },
  {
    id: 4,
    title: 'Bsc Geology,',
    subtitle: ' Ahmadu Bello University, Zaria, Nigeria',
    date: '2002',
    description: '',
    category: 'education',
  },
  {
    id: 5,
    title: 'Data Science Nigeria (DSNai)',
    subtitle: 'Lead Consultant',
    date: '2021 till present',
    description:
      "Experienced leader of cross-functional teams consisting of Earth Scientists, Data Scientists, and Machine Learning Engineers in developing and implementing digital solutions for the Oil and Gas industry using artificial intelligence. Provides business leadership support for Bill and Melinda Gates' crowdsourcing project, Eko-360, and SpotOn product development. Successfully leverages expertise in data analytics, AI, and business strategy to drive innovation and achieve business objectives.",
      category: 'experience'
  },
  {
    id: 6,
    title: 'Chevron Corporation',
    subtitle: 'Earth Scientist',
    date: '08/2001 - 09/2021',
    description:
      "15+ years in various roles as wellsite geologist, log analyst, and contract administrator gathering, evaluating, and deriving insights from big data, which resulted in a $24 million cost savings in GNPT for the 2016/2017 Cheetah drilling campaign.",
      
    category: 'experience',
  },
  
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Shammah Chidoka Peters',
    author: 'Geoscience Major',
    description:
      'I have not seen anyone that commits to the growth of his mentees like Mr Noel does. Mr Noel wants to be involved in every step of your growth journey. He insists to be involved. His passion for emerging technologies and the way he leads young techies is exemplary on every level.',
    href: 'https://www.linkedin.com/in/shammah-chidoka-peters-a95643220/',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Sophie Riding',
    author: '',
    description:
      'During his time as a student in the Masterschool Data Analytics program, Noel demonstrated leaderships skills when mentoring his fellow peers. He provided support to his group throughout the rigorous program and always provided constructive insights....."',
    href: 'https://www.linkedin.com/in/sophie-riding/',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Oluwole Dada',
    author: 'Drilling Engineer ',
    description:
      'I highly recommend Noel as a technical leader and seasoned professional. He demonstrated exceptional leadership skills while working with our team of six engineers and coordinating with various G&G service providers during the exploration and development of several multimillion dollar offshore wells in the Niger Delta region......”',
    href: 'https://www.linkedin.com/in/woledada1/',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Ogbo Awoke Ogbo',
    author: 'Business Owner Coach ',
    description:
      'I have known Noel for over 20 years. Our paths crossed when we both worked for Chevron corporation. Noel’s passion for growth has put him on the path of continuous learning.His brilliance came to bare when he founded one of the most impactful  career mentoring programmes,  which has enabled many young African professionals to grow.',
    href: 'https://www.linkedin.com/in/ogboawokeogbo/',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Ogunlolu Daniel',
    author: 'CEO, Ace Embedded',
    description:
      "I like  Mr. Noel's inclusive leadership style. He valued my opinions and encouraged me to share my ideas openly. He recognized the importance of collaboration and trusted me to contribute to the company's vision. This level of trust and autonomy fostered an environment where creativity thrived, enabling me to explore new ideas and push boundaries.",
    href: 'https://www.linkedin.com/in/daniel-ogunlolu-falcon/',
  },
];
