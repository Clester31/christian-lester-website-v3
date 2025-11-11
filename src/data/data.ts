export interface Skill {
    name: string;
    src: string;
    type: 'frontend' | 'backend' | 'lang';
}

export interface Project {
    name: string;
    year: string;
    description: string;
    notes: string[];
    link: string;
}

export const skills: Record<string, Skill> = {
    ts: {
        name: 'TypeScript',
        src: 'skills/typescript.png',
        type: 'frontend'
    },
    js: {
        name: 'JavaScript',
        src: 'skills/js.png',
        type: 'frontend'
    },
    java: {
        name: 'Java',
        src: 'skills/java.png',
        type: 'lang'
    },
    python: {
        name: 'python',
        src: 'skills/python.png',
        type: 'lang'
    },
    html: {
        name: 'HTML',
        src: 'skills/html-5.png',
        type: 'frontend'
    },
    css: {
        name: 'CSS',
        src: 'skills/css-3.png',
        type: 'frontend'
    },
    sass: {
        name: 'SASS',
        src: 'skills/sass.png',
        type: 'frontend'
    },
    react: {
        name: 'React',
        src: 'skills/react.png',
        type: 'frontend'
    },
    tailwind: {
        name: 'Tailwind',
        src: 'skills/tailwind.png',
        type: 'frontend'
    },
    shadcn: {
        name: 'ShadCN',
        src: 'skills/shadcn.png',
        type: 'frontend'
    },
    redux: {
        name: 'Redux',
        src: 'skills/redux.png',
        type: 'frontend'
    },
    nxetjs: {
        name: 'Next',
        src: 'skills/nextjs.png',
        type: 'frontend'
    },
    electron: {
        name: 'Electron',
        src: 'skills/electron.png',
        type: 'frontend'
    },
    express: {
        name: 'Express',
        src: 'skills/express.png',
        type: 'backend'
    },
    node: {
        name: 'Node',
        src: 'skills/node.png',
        type: 'backend'
    },
    psql: {
        name: 'Postgresql',
        src: 'skills/psql.png',
        type: 'backend'
    },
    innegest: {
        name: 'Innegest',
        src: 'skills/innegest.png',
        type: 'backend'
    },
    Drizzle: {
        name: 'Drizzle',
        src: 'skills/drizzle.png',
        type: 'backend'
    },
    claude: {
        name: 'Claude API',
        src: 'skills/claude.png',
        type: 'backend'
    },
    clerk: {
        name: 'Clerk',
        src: 'skills/clerk.png',
        type: 'backend'
    },
    firebase: {
        name: 'Firebase',
        src: 'skills/firebase.png',
        type: 'backend'
    },
    gcp: {
        name: 'GCP',
        src: 'skills/gcp.png',
        type: 'backend'
    },
    neon: {
        name: 'Neon',
        src: 'skills/neon.png',
        type: 'backend'
    },
    cpp: {
        name: 'C++',
        src: 'skills/cpp.png',
        type: 'lang'
    },
    csh: {
        name: 'C#',
        src: 'skills/csh.png',
        type: 'lang'
    },
    c: {
        name: 'C',
        src: 'skills/c.png',
        type: 'lang'
    },
    git: {
        name: 'git',
        src: 'skills/git.png',
        type: 'lang'
    }
}

export const projects: Record<string, Project> = {
    p1: {
        name: 'Mind Map For Future Envisioning',
        year: 'Sep-Dec 2024',
        description: 'Worked in a group to develop a web application where formerly incarcerated individuals can set goals and plan their paths for re-entry into society',
        notes: ['Worked alongside Project Rebound, a non-profit organization that aims to provide formerly incarcerated individuals with skills and resources for their re-entry', 'Developed the frontend for the application using React.js and Tailwind'],
        link: 'https://github.com/Clester31/PR-MindMap-React',
    },
    p2: {
        name: 'AI-Powered Job Board',
        year: 'Sep 2025',
        description: 'Job listing website where users can get AI-based recommendations for job openings that match their skill set',
        notes: ['Frontend incorporates both Tailwind and ShadCN for styling/components', 'Uses Drizzle and Innegest for backend/db purposes', 'Resend used for emailing users with new listings that would apply to their skill set'],
        link: 'https://github.com/Clester31/AI-Powered-Job-Board'
    },
    p3: {
        name: 'AI Color Palette Generator',
        year: 'Oct 2025',
        description: 'Website for generating attractive color palettes from an AI Prompt',
        notes: ['Uses Claude API for generating palettes based off prompts', 'Frontend created using Tailwind and ShadCN'],
        link: 'https://github.com/Clester31/AI-color-palette-generator'
    },
    p4: {
        name: 'LifeLogger',
        year: 'Aug 2025',
        description: 'A simple web app for creating journal entries and to-do lists',
        notes: ['Features custom-made markdown editor for creating notes', 'developed using React and TailwindCSS'],
        link: 'https://github.com/Clester31/LifeLogger'
    },
    p5: {
        name: 'My Album Catalog',
        year: 'May 2025',
        description: 'Website where music enthusiasts can create custom catalogs for the music they have listened to',
        notes: ['Albums can have ratings and short reviews, along with individual track ratings', 'Uses last.fm api for album searching', 'Frontend built in React/Next.js with Auth/DB handled in Firebase'],
        link: 'https://github.com/Clester31/my-album-catalog'
    },
    p6: {
        name: 'SideChain',
        year: 'Feb 2025',
        description: 'Website where musicians can receive feedback on their music from fellow producers/artists',
        notes: ['Created for the TartanHacks 2025 hackathon at Carnegie Mellon University', 'Firebase used for uploading/storing MP3 files/user profile info'],
        link: 'https://github.com/Clester31/sidechain-project'
    },
    p7: {
        name: 'MyPowerRankings',
        year: 'Oct 2024',
        description: 'Website for creating power rankings for the 4 major American sports leagues (NFL, NBA, MLB, NHL)',
        notes: ['Users can screenshot and share their power rankings after creating them', 'Auth/DB handled in Firebase'],
        link: 'https://github.com/Clester31/MyPowerRankings'
    }
}