export const release: {
  status: "development" | "released";
  label: string;
  description: string;
  androidUrl: string | null;
} = {
  status: "development",
  label: "Android app in development",
  androidUrl: null,
  description:
    "Nivo is taking shape. The Android app is not publicly available, and no release date has been announced. This website previews the intended design and experience.",
};
export const site = {
  sourceUrl: "https://github.com/bendavid01/nivo-showcase",
  screenshots: [
    {
      src: "/images/nivo-android-concept.png",
      alt: "Nivo design concept on Android phones with centered punch-hole cameras, showing fictional balances and activity.",
      caption: "Android concept visual · Not captured from a working app",
    },
  ],
  features: [
    {
      title: "See where you stand.",
      copy: "A simple overview of balances, money coming in, and money going out. Designed to make the everyday picture easier to understand.",
    },
    {
      title: "Give each moment a place.",
      copy: "An intended view of everyday activity, with details that connect a transaction to the life around it.",
    },
    {
      title: "Find your own rhythm.",
      copy: "Thoughtful spending views that aim to offer perspective, so you can decide what feels right for you.",
    },
  ],
};
