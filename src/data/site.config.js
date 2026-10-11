/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://utsavsharma27.github.io/utsavwedssrishti/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Utsav & Srishti — We're getting married",
    description:
      "Join Utsav and Srishti at The Namah Grand, Noida, on 11 December 2026 for Haldi and Reception.",
  },
  couple: {
    partnerA: "Utsav",
    partnerB: "Srishti",
  },
  hashtag: "#SrishtiMeinUtsav",
  weddingDateIso: "2026-12-11T11:00:00+05:30",
  displayDate: "11 December 2026",
  city: "Noida, Uttar Pradesh",
  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "With joyful hearts and the blessings of our families",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A humble invitation",
    heading: "We would be honoured by your presence",
    paragraphs: [
      "With grateful hearts, we invite you to share in the beginning of our new journey. Utsav and Srishti are getting married, and we would be truly blessed to have you with us.",
      "Please join us for Haldi in the morning and our Reception in the evening. Your presence, your blessings, and your warm wishes mean more to us than any gift. We humbly request you to come and celebrate this happy occasion with us.",
    ],
    signOff: "With respect and love",
  },
  countdown: {
    heading: "Until we begin our journey together",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We are grateful to have you with us.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "haldi",
      title: "Haldi",
      date: "11 December 2026",
      time: "11:00 AM onwards",
      venue: "The Namah Grand, Sector 149, Noida",
      note: "Turmeric, blessings, and joyful memories. Please come in traditional clothes if you wish.",
      accent: "marigold",
      mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    },
    {
      id: "reception",
      title: "Reception",
      date: "11 December 2026",
      time: "7:00 PM onwards",
      venue: "The Namah Grand, Sector 149, Noida",
      note: "An evening of dinner, good company, and blessings for the newly married couple.",
      accent: "lotus",
      mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The venue",
    name: "The Namah Grand",
    addressLines: [
      "(Previously Ganeshwaram Hotel)",
      "Near Kidzee Play School, Kondli Market, Sector 149",
      "Noida, Uttar Pradesh 201304",
      "India",
    ],
    directions:
      "Please use the map link to find the venue. Kindly reach a little before your event time so that you can be seated comfortably.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    loadMapLabel: "Load the map",
    mapTitle: "Map of The Namah Grand, Noida",
    embedUrl:
      "https://maps.google.com/maps?q=The%20Namah%20Grand%20Sector%20149%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facadeCaption: "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  gallery: {
    eyebrow: "A few frames",
    heading: "From our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      { src: "photos/01.jpg", alt: "Baraat (Dancing)", width: 336, height: 305 },
      { src: "photos/02.jpg", alt: "Bidaai (Emotional)", width: 336, height: 305 },
      { src: "photos/03.jpg", alt: "Mehndi", width: 336, height: 305 },
      { src: "photos/04.jpg", alt: "Mehndi Hand (Fun)", width: 336, height: 305 },
      { src: "photos/05.jpg", alt: "Groom's Grooming / Posing", width: 336, height: 305 },
      { src: "photos/06.jpg", alt: "Feeding Sweets", width: 336, height: 305 },
      { src: "photos/07.jpg", alt: "Ennippoon", width: 336, height: 305 },
      { src: "photos/08.jpg", alt: "Selfie Moment", width: 336, height: 305 },
    ],
  },
  footer: {
    closing: "With blessings and love, we look forward to celebrating with you.",
    crafted: "With love, from Utsav and Srishti.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;
