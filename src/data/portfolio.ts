// Portfolio content data - centralized for easy updates

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  role: string;
  techStack: string[];
  achievements: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Employment {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  contributions: string[];
  techStack: string[];
}

export const personalInfo = {
  name: 'Ashish Bardhan',
  tagline: 'Frontend Engineer | UI/UX Specialist | Creative Coder',
  email: 'ashbardhan@gmail.com',
  location: 'New Delhi, India',
  bio: [
    `I am <strong>Ashish Bardhan</strong> from New Delhi, India. I'm a passionate frontend/UI engineer with 10+ years of experience in building scalable web applications. Proficient with multiple CSS and JS Frameworks, with extensive knowledge of UX and agile project management. I love to <a href="https://www.instagram.com/ashbee.arts/" target="_blank" rel="noopener noreferrer">sketch doodles</a> and <a href="https://codepen.io/AshBardhan" target="_blank" rel="noopener noreferrer">program CSS artworks</a>, as a way to express my creativity.`,
    `In a nutshell... Art, Programming and somewhere in between I'll describe my line of work.`,
  ],
  profileImage: '/assets/images/ashish.jpg',
  headerImage: '/assets/images/ashish-header.jpg',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ashbardhan/',
    icon: 'linkedin',
    ariaLabel: 'Visit my LinkedIn profile',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/CreativeBakchod',
    icon: 'twitter',
    ariaLabel: 'Follow me on Twitter/X',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/AshBardhan',
    icon: 'github',
    ariaLabel: 'Check out my GitHub repositories',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/AshBardhan',
    icon: 'codepen',
    ariaLabel: 'View my CodePen creations',
  },
];

export const projects: Project[] = [
  {
    id: 'memefy-this',
    title: 'Memefy This',
    description: 'A Chrome extension developed in Vanilla JS for making instant memes from images online, with over 8,000 downloads and 2,000 active users.',
    image: '/assets/images/memefy-this.jpg',
    role: 'Solo Developer',
    techStack: ['Vanilla JavaScript', 'Chrome Extension API', 'HTML5 Canvas', 'CSS3'],
    achievements: ['8,000+ total downloads', '2,000+ active users', '4.5★ average rating on Chrome Web Store', 'Featured in multiple tech blogs'],
    demoUrl: 'https://chromewebstore.google.com/detail/memefy-this/iohemjpgjkgkfgfpiglpfpcclogkelcf',
    githubUrl: 'https://github.com/AshBardhan/memefy-this',
    featured: true,
  },
  {
    id: 'robo-galactic-shooter',
    title: 'Robo Galactic Shooter',
    description: 'A Retro single-player shooting video game developed in HTML Canvas and SVG sprites with Kontra and sfxr JS libraries under 13 KB.',
    image: '/assets/images/robo-galactic-shooter.jpg',
    role: 'Game Developer',
    techStack: ['HTML5 Canvas', 'Kontra.js', 'sfxr.js', 'SVG'],
    achievements: ['Built under 13KB file size constraint', 'Custom sprite animations', 'Dynamic sound effects generation', 'Retro arcade-style gameplay'],
    demoUrl: 'https://robo-galactic-shooter.netlify.app/',
    githubUrl: 'https://github.com/AshBardhan/robo-galactic-shooter',
    featured: true,
  },
  // Add more projects here as needed
];

export const employment: Employment[] = [
  {
    id: 'demtech-2024',
    company: 'DemTech.ai',
    position: 'Lead Frontend Engineer',
    duration: 'Aug 2024 - Present',
    location: 'Bangalore, India',
    description: 'Leading the development of a self-hosted Citizen Mobilisation tool for campaigners and citizens.',
    contributions: [
      'Restructured the entire architecture of multiple distributed modules using Next.js and Redux, improving scalability and maintainability',
      'Brainstormed and designed wireframes for multiple web application modules',
      'Developed responsive applications by building and maintaining reusable Material UI and Styled Components, improving the overall user experience',
      'Implemented an automated unit and E2E testing using Vitest and Playwright, achieving 80% code coverage',
      'Established version-controlled deployments with tagged releases for seamless rollbacks',
    ],
    techStack: ['Next.js', 'Redux', 'Material UI', 'Styled Components', 'Vitest', 'Playwright', 'TypeScript'],
  },
  {
    id: 'wingify-vwo-2015',
    company: 'Wingify/VWO',
    position: 'Lead Software Engineer',
    duration: 'Feb 2015 - Nov 2023',
    location: 'New Delhi, India',
    description: 'Led a team of 4 engineers to develop a B2B SaaS platform used by businesses in 90+ countries.',
    contributions: [
      'Developed scalable web applications with React, Angular, Vue, and integrated RESTful APIs to fulfill business requirements',
      'Built a WCAG 2.0-compliant marketing website using WordPress, Bootstrap, and jQuery',
      'Improved rendering and animation performance of graph components with D3.js',
      'Refactored web components, reducing file sizes by 80%, improving performance',
      'Enhanced NPS score by 20% by gathering user feedback and improving usability',
      'Implemented visual regression testing with Percy framework and performed across multiple versions of diverse browsers and devices, achieving 85% test coverage',
      'Wrote thousands of unit and E2E tests with Jasmine, Jest, Cypress, and Selenium frameworks with 75% code coverage',
      'Designed and implemented email templates using Stripo and Tabular tools',
      'Mentored junior developers through pair programming and code reviews',
    ],
    techStack: ['React', 'Angular', 'Vue', 'D3.js', 'WordPress', 'Bootstrap', 'jQuery', 'Percy', 'Jasmine', 'Jest', 'Cypress', 'Selenium'],
  },
  {
    id: 'healthkart-2013',
    company: 'HealthKart',
    position: 'Software Engineer',
    duration: 'Jun 2013 - Jan 2015',
    location: 'Gurgaon, India',
    description: 'Contributed in developing a health e-commerce site with over 1 million monthly visitors.',
    contributions: [
      'Developed responsive web applications using Spring, Stripes, Grails, and Node.js',
      'Brainstormed and developed interactive prototypes of web components',
      'Designed and implemented email templates using Mailchimp tool',
      'Conducted cross-browser and cross-device testing with BrowserStack, ensuring seamless compatibility across multiple versions of different browsers and devices',
    ],
    techStack: ['Spring', 'Stripes', 'Grails', 'Node.js', 'Mailchimp', 'BrowserStack'],
  },
];

export const skills = {
  languages: ['HTML', 'CSS', 'JavaScript (ES6+)', 'TypeScript'],
  frameworks: ['React', 'Redux', 'Next.js', 'Angular', 'Vue', 'jQuery', 'D3.js', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Styled Components', 'Node.js'],
  tools: ['Git', 'GitHub', 'Grunt', 'Webpack', 'Vite', 'Jenkins', 'Jasmine', 'Jest', 'Vitest', 'Playwright', 'Cypress', 'Netlify', 'Vercel', 'BrowserStack', 'WordPress', 'Storybook', 'Sass', 'Design Systems', 'Figma', 'Rest APIs', 'Web APIs'],
  strengths: ['Collaborative', 'Detail-oriented', 'Strong Communication', 'Ownership'],
  certifications: ['Professional Scrum Master 1 (Scrum.org, 2019)', 'Human-Computer Interaction (Interaction Design Foundation, 2022)', 'Agile Methods for UX Design (Interaction Design Foundation, 2024)'],
};
