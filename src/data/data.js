// image import
import toffy from "../img/toffyWide.png";
import coffida from "../img/coffida2.png";
import typeincat from "../img/typeincat.png";
import trainStationApp from "../img/train-station-app.png";
import gameGuide from "../img/GameGuide-min.png";

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
    slug: "toffy-tournament-organizer",
    readme: "https://raw.githubusercontent.com/teobot/toffy/main/README.md",
  },
  {
    header: "Coffida - Coffee Review App",
    header_sub: "A coffee review mobile app",
    image: coffida,
    tags: ["All", "MOBILE DEVELOPMENT"],
    slug: "coffida-mobile-app",
    readme:
      "https://raw.githubusercontent.com/teobot/18055445-coffida-mobile-app/main/README.md",
  },
  {
    header: "TypeInCat - Typography App",
    header_sub: "A fun typography web app",
    image: typeincat,
    tags: ["All", "WEB"],
    slug: "type-in-cat-app",
    readme: "https://raw.githubusercontent.com/teobot/typeInCat/main/README.md",
  },
  {
    header: "Android Client Server App",
    header_sub: "1-day Hackathon Android App for train stations.",
    image: trainStationApp,
    tags: ["All", "MOBILE DEVELOPMENT", "JAVA"],
    slug: "android-client-server-app",
    readme:
      "https://raw.githubusercontent.com/teobot/Android-Client-Server-App/main/README.md",
  },
  {
    header: "GameGuide",
    header_sub: "A PHP game review website.",
    image: gameGuide,
    tags: ["All", "WEB", "PHP"],
    slug: "game-guide",
    readme:
      "https://raw.githubusercontent.com/teobot/GameGuide/master/readme.md",
  },
];
