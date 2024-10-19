// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Zeida';
export const SITE_DESCRIPTION = 'Welcome to my Portfolio';

//Social links
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/zeida-de-los-reyes-rodr%C3%ADguez-mendoza/';
export const GITHUB_LINK = 'https://github.com/Zeida';
export const X_LINK = '';

// Icons
export const LINKEDIN_SVG_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>`;

export const GITHUB_SVG_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg>
`;

export const X_SVG_ICON = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 24 24">
<path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
</svg>`;

export const jobs = [
    {
      title: "Programmer Analyst",
      company: "Bitbox S.L",
      dates: "February 2021 - November 2022",
      description: "At Bitbox S.L, I honed my analytical skills while engaging in requirements gathering, functional design, and documentation. My role involved:",
      responsibilities: [
        "Developing back-end solutions using Spring Boot and PostgreSQL, ensuring high performance and responsiveness.",
        "Creating dynamic user interfaces with React, enhancing user experience through intuitive design.",
        "Collaborating with cross-functional teams to deliver projects on time and meet client expectations."
      ]
    },
    {
      title: "Programmer",
      company: "Plexus Tech",
      dates: "November 2022 - May 2024",
      description: "As a Programmer at Plexus Tech, I contributed to the development and maintenance of Platino, the interoperability platform for the Government of Canarias. My key responsibilities included:",
      responsibilities: [
        "Implementing front-end enhancements using Angular, improving usability and functionality.",
        "Developing back-end services with Java 8 and participating in the migration to Red Hat Fuse 7.",
        "Updating and migrating servers to optimize system performance and security."
      ]
    }
  ];

export const projects = [
    {
        title: 'MindCare',
        description: 'For my final degree project, I developed a software tool that addresses the crucial role of emotional well-being in our daily lives. Understanding that our emotional state can influence our ability to think, feel, and act, this application leverages technology to promote personal well-being. MindCare offers a variety of resources for self-care, emotional support, and social interaction, all enhanced with a unique badge system that motivates users in their personal growth journey. Additionally, it serves as a valuable resource for professionals in therapeutic processes, supporting the promotion of healthy habits.',
        technologies: [
            'Marvel App',
            'Visual Studio Code',
            'Android Studio',
            'GitHub',
            'Expo',
            'Firebase',
            'Firestore',
            'Firebase Authentication',
            'Microsoft Word',
            'StarUML',
            'React Native'
        ],
        githubLink:'https://github.com/Zeida/MindCare' ,
        documentationLink: 'https://accedacris.ulpgc.es/bitstream/10553/117753/1/P%c3%a1ginas%20desdeEII-GII-2022-07_RodriguezMendozaZeida.pdf'
    },

];

export const technologies = [
    { name: 'Marvel App', link: 'https://marvelapp.com/', icon: 'https://img.shields.io/badge/Marvel%20App-1.0-FF4081?style=flat-square' },
    { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/', icon: 'https://img.shields.io/badge/VS%20Code-1.78.0-blue?style=flat-square&logo=visualstudiocode' },
    { name: 'Android Studio', link: 'https://developer.android.com/studio', icon: 'https://img.shields.io/badge/Android%20Studio-2023.1-3DDC84?style=flat-square&logo=androidstudio' },
    { name: 'GitHub', link: 'https://github.com/', icon: 'https://img.shields.io/badge/GitHub-Profile-black?style=flat-square&logo=github' },
    { name: 'Expo', link: 'https://expo.dev/', icon: 'https://img.shields.io/badge/Expo-48.0.0-000000?style=flat-square&logo=expo' },
    { name: 'Firebase', link: 'https://firebase.google.com/', icon: 'https://img.shields.io/badge/Firebase-11.0.0-yellow?style=flat-square&logo=firebase' },
    { name: 'Firestore', link: 'https://firebase.google.com/products/firestore', icon: 'https://img.shields.io/badge/Firestore-11.0.0-blue?style=flat-square&logo=firestore' },
    { name: 'Firebase Authentication', link: 'https://firebase.google.com/docs/auth', icon: 'https://img.shields.io/badge/Firebase%20Auth-11.0.0-orange?style=flat-square&logo=firebase' },
    { name: 'Microsoft Word', link: 'https://www.microsoft.com/en-us/microsoft-365/word', icon: 'https://img.shields.io/badge/Microsoft%20Word-2021-2B579A?style=flat-square&logo=microsoftword' },
    { name: 'StarUML', link: 'http://staruml.io/', icon: 'https://img.shields.io/badge/StarUML-3.0-blue?style=flat-square&logo=staruml' },
    { name: 'React Native', link: 'https://reactnative.dev/', icon: 'https://img.shields.io/badge/React%20Native-0.72.3-61DAFB?style=flat-square&logo=react' },
];