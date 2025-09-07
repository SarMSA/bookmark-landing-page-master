export const navLinks = ["features", "pricing", "contact"];
import {
  illustrationFeatures,
  illustrationFeatures2,
  illustrationFeatures3,
  illustrationHero,
  logoChrome,
  logoFirefox,
} from "../assets/images";
export const headers = [
  {
    id: 1,
    title: "a simple bookmark manager",
    desc: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    cta: [
      { title: "Get it on Chrome", url: "#" },
      { title: "Get it on Firefox", url: "#" },
    ],
    img: { src: illustrationHero, alt: "heroImage" },
  },
  {
    id: 2,
    title: "features",
    desc: "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
    btns: [
      {
        btnName: "simple bookmarking",
        title: "Bookmark in one click",
        desc: "Organize your bookmarks however you like. Add, edit, and remove bookmarks with a single click.",
        link: "#",
        img: { src: illustrationFeatures, alt: "illustrationFeatures1" },
      },
      {
        btnName: "speedy searching",
        title: "Intelligent search",
        desc: "Our powerful search functionality allows you to quickly find the pages you are looking for.",
        link: "#",
        img: { src: illustrationFeatures2, alt: "illustrationFeatures2" },
      },
      {
        btnName: "easy sharing",
        title: "Easy to share",
        desc: "Share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        link: "#",
        img: { src: illustrationFeatures3, alt: "illustrationFeatures3" },
      },
    ],
  },
  {
    id: 3,
    title: "download the extension",
    desc: "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.",
    browsers: [
      {
        src: logoChrome,
        alt: "logo chrome",
        title: "Add to Chrome",
        ex: "Minimum version 62",
        link: "#",
      },
      {
        src: logoFirefox,
        alt: "logo firefox",
        title: "Add to Firefox",
        ex: "Minimum version 55",
        link: "#",
      },
      {
        src: logoChrome,
        alt: "logo Opera",
        title: "Add to Opera",
        ex: "Minimum version 46",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "frequently asked questions",
    desc: "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.",
    fags: [
      {
        question: "what is bookmark?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        question: "how can i request a new browser?",
        answer:
          "Vivamus luctus eros aliquet convallis ultricies. Mauris attuamet quam vel lacus accumsan.",
      },

      {
        question: "is there a mobile app?",
        answer:
          "Sed consectetur quam a odio dignissim pharetra. Vestibulum ultrices nisi diam. Nam quam nisl, subdolor sit amet, consectetur.",
      },

      {
        question: "what about other Chromium browsers?",
        answer:
          "Vivamus luctus eros aliquet convallis ultricies. Mauris attuamet quam vel lacus accumsan.",
      },
    ],
    // call to action
    cta: {
      title: "more info",
      url: "#",
    },
  },
  {
    id: 5,
    title: "Stay up-to-date with what we're doing",
    desc: "35,000+ already joined",
    form: {
      placeholder: "Enter your emaii address",
      url: "#",
    },
  },
];
//     {
//   queation: "is there a mobile app?",
//   answer:
//     "Sed consectetur quam a odio dignissim pharetra. Vestibulum ultrices nisi diam. Nam quam nisl, subdolor sit amet, consectetur.",
// },
