import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kostiantyn Borysov",
  initials: "KB",
  location: "Dnipro, Ukraine, EEST",
  locationLink: "https://www.google.com/maps/place/Dnipro",
  about:
    "Detail-oriented Front-end Engineer dedicated to building high-quality products.",
  summary: (
    <>
      A dedicated Frontend Developer with 3 years of professional experience
      specializing in building user-centric, performant, and accessible web
      applications. Passionate about optimizing web experiences and adapting
      modern technologies. Always open to learning and exploring the latest in
      the IT industry.
    </>
  ),
  avatarUrl:
    "https://avatars.githubusercontent.com/u/109829632?s=400&u=a667fdd4637a42f0a3dc8a6209c7efc406725f96&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "koss199710@gmail.com",
    tel: "+380955149322",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/koddaks",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kostiantyn-borysov-b3a23a212/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Dnipro State Academy of Physical Culture and Sports",
      degree:
        "Master's Degree. Field of Study Education/Pedagogy. Programme Subject Area: Physical Education and Sport",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "ITwiz Media Group",
      link: "",
      badges: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      title: "Front-end Developer",
      logo: ParabolLogo,
      start: "2023",
      end: null,
      description: (
        <>
          I worked as a Front-end Developer, contributing to the development of
          a web application for booking apartments, houses, and other
          accommodations for various periods.
          <br />
          The main aspects of my work:
          <ul className="list-inside list-disc">
            <li>
              Developed SPAs using React, Redux, TypeScript, JavaScript,
              Tailwind.
            </li>
            <li>
              Implemented and optimized components using Redux for efficient
              state management in React applications.
            </li>
            <li>
              Optimized web applications to improve loading times and rendering
              efficiency.
            </li>
            <li>
              Utilized state management to ensure effective updates of
              application states.
            </li>
            <li>
              Developed and implemented accessible web applications to enhance
              user convenience for all users.
            </li>
            <li>
              Successfully optimized the performance of web applications,
              improving loading times and rendering.
            </li>
            <li>Rewriting the project for mobile and tablet resolutions.</li>
            <li>
              Increase in conversion by 30% after successful adaptation of the
              project for mobile and tablet capabilities.
            </li>
            <li>
              Integrated a map from the Leaflet library to display markers of
              products on the map, enhancing visualization and user interaction
              with real-time product locations, and providing precise and
              intuitive representation for end-users.
            </li>
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "RSA Devs",
      link: "",
      badges: ["Remote", "React", "TypeScript", "Redux Toolkit", "Material-UI"],
      title: "Front-end Developer",
      logo: ConsultlyLogo,
      start: "2022",
      end: 2023,
      description: (
        <>
          At RSA Devs, I contributed as a front-end developer to a project for a
          pizza restaurant chain. My primary tasks involved building and
          supporting web-based solutions, including internal tools for
          operational efficiency and the company&apos;s customer-facing website.
          <br />
          The main aspects of my work:
          <ul className="list-inside list-disc">
            <li>
              Development and support of a service for business automation and
              document flow in the restaurant sector.
            </li>
            <li>
              Implemented the functionality of filtering and sorting reports for
              users with administrative access. It allowed analyze the impact of
              each factor on the final result, as well as monitor the dynamics
              of changes.
            </li>
            <li>Implemented unit testing using Jest.</li>
            <li>
              Developed a reporting component to display employee performance.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "SCSS",
    "shadcn/ui",
    "Material-UI",
    "Sass",
    "Figma",
    "Lottie",
    "Dnd-kit",
    "Node.js",
    "Express.js",
    "REST API",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Drizzle",
    "Axios",
    "Redux",
    "Redux Toolkit",
    "Zustand",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "JWT",
    "Next Auth",
    "Jest",
    "Cypress",
    "Playwright",
    "Cucumber",
    "WebdriverIO",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Docker",
    "Docker Compose",
    "OAuth",
    "Formik",
    "Yup",
    "Clerk",
    "Stripe",
    "Jira",
    "Slack",
  ],
  softSkills: (
    <>
      <ul className="list-inside list-disc">
        <li>
          Worked with management tools such as Jira, Slack, Zoom, and Google
          Meet.
        </li>
        <li>Proactive and responsible.</li>
        <li>Adaptable to feedback and criticism.</li>
        <li>Effective time management and self-organization.</li>
        <li>
          Strong team collaboration and commitment to continuous learning.
        </li>
      </ul>
    </>
  ),
} as const;
