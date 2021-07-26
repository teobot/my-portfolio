// image import
import toffy from "../img/toffyWide.png";
import coffida from "../img/coffida2.png";
import typeincat from "../img/typeincat.png";
import trainStationApp from "../img/train-station-app.png";
import gameGuide from "../img/GameGuide-min.png";

// Return home screen path data
export const returnHomeJSON = (title, path, color) => {
  return { path, title, color };
};

// my Email
export const email = "theoclapperton@outlook.com";

// fullname
export const fullname = "Theo Clapperton";

// Github link
export const github_link = "https://github.com/teobot";

// Linkedin link
export const linkedin_link =
  "https://www.linkedin.com/in/theo-clapperton-6aa916121/";

// Buttons colors
export const button_colours =
  "red orange yellow olive green teal blue violet purple pink brown grey black facebook instagram linkedin twitter vk youtube".split(
    " "
  );

// filter tags
export const filter_tags = ["All", "MOBILE DEVELOPMENT", "JAVA", "WEB", "PHP"];

// project data
// 1130 x 565 , closest ratio  2 : 1, use this 2230 x 1130
export const projects = [
  {
    header: "Toffy - Tournament Organizer",
    header_sub: "A smart tournament organizer",
    image: toffy,
    tags: ["All", "WEB"],
    langs: ["HTML", "React", "NodeJs", "MongoDB", "Express", "MVC"],
    slug: "toffy-tournament-organizer",
    readme: "https://raw.githubusercontent.com/teobot/toffy/main/README.md",
  },
  {
    header: "Coffida - Coffee Review App",
    header_sub: "A coffee review mobile app",
    image: coffida,
    tags: ["All", "MOBILE DEVELOPMENT"],
    langs: ["React Native", "NodeJs", "MongoDB", "Express"],
    slug: "coffida-mobile-app",
    readme:
      "https://raw.githubusercontent.com/teobot/18055445-coffida-mobile-app/main/README.md",
  },
  {
    header: "TypeInCat - Typography App",
    header_sub: "A fun typography web app",
    image: typeincat,
    tags: ["All", "WEB"],
    langs: ["HTML", "CSS", "React"],
    slug: "type-in-cat-app",
    readme: "https://raw.githubusercontent.com/teobot/typeInCat/main/README.md",
  },
  {
    header: "Android Client Server App",
    header_sub: "1-day Hackathon Android App for train stations.",
    image: trainStationApp,
    tags: ["All", "MOBILE DEVELOPMENT", "JAVA"],
    langs: ["Java"],
    slug: "android-client-server-app",
    readme:
      "https://raw.githubusercontent.com/teobot/Android-Client-Server-App/main/README.md",
  },
  {
    header: "GameGuide",
    header_sub: "A PHP game review website.",
    image: gameGuide,
    tags: ["All", "WEB", "PHP"],
    langs: ["PHP", "MVC"],
    slug: "game-guide",
    readme:
      "https://raw.githubusercontent.com/teobot/GameGuide/master/readme.md",
  },
];

// Data for the main index screen
export const DATA = {
  NOT_READY_MESSAGE: "📅 Coming Soon!",
  QUICK_INFO: ["Sofware Engineer", "Waterpolo Player"],
  EXTERNAL_LINKS: [
    { text: "GitHub", to: github_link, color: "red" },
    {
      text: email,
      to: `mailto:${email}`,
      color: "orange",
    },
    {
      text: "LinkedIn",
      to: linkedin_link,
      color: "yellow",
    },
  ],
  INTERNAL_LINKS: [
    {
      color: "#219653",
      subColor: "#27AE60",
      text: "Projects",
      icon: "code",
      to: "/projects",
      ready: true,
    },
    {
      color: "#2F80ED",
      subColor: "#2D9CDB",
      text: "Blog",
      icon: "book",
      to: "/blog",
      ready: false,
    },
    {
      color: "#9B51E0",
      subColor: "#BB6BD9",
      text: "Reviews",
      icon: "cloud",
      to: "/review",
      ready: false,
    },
  ],
};

// Options for the main index screen
export const OPTIONS = {
  BUTTON_SIZE: "large",
  SKILL_STYLE_TEXT: {
    fontSize: 24,
    fontWeight: "bold",
  },
  BULLET_POINT_COLOR: "#434850",
  INTERNAL_LINKS_OPTIONS: {
    height: 275,
    ratio: [1, 1.8],
  },
};
