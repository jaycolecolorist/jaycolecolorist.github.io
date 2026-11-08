/* ------------------------------------------------------------------
   JAY WHITE — PORTFOLIO DATA
   This is the only file you need to edit to change what the site says
   or shows. Everything else reads from here.
   ------------------------------------------------------------------ */

window.SITE = {
  name: "Jay White",
  email: "jaycolle2@gmail.com",
  instagram: { handle: "@jaywhite_colorist", url: "https://www.instagram.com/jaywhite_colorist/" },
  vimeo: { user: "nimusiimajaydencollins", url: "https://vimeo.com/nimusiimajaydencollins" },
  lumina: { name: "Lumina Grade", url: "https://luminagrade.com" },

  /* Vimeo: anything PUBLIC on your Vimeo appears on the site by itself
     (newest first, at the top of Films or Vertical by its shape).
     To keep a public video OFF the site, put its number in `hidden`. */
  autoAddNewVimeo: true,

  /* The work, in the order it shows. Each item is either
       vimeo: <number from the Vimeo link>
     or
       file: "media/film/<name>.mp4", poster: "media/poster/<name>.jpg"
     `note` is the small grey line under the title. */
  films: [
    { vimeo: 1199109325, title: "Al Jazeera Perfumes", poster: "media/poster/al-jazeera-perfumes.jpg?v=12" },
    { vimeo: 1199107760, title: "Qatar Ministry of Sports", poster: "media/poster/ministry-of-sports.jpg" },
    { vimeo: 1178205289, title: "Evil Lady Game", poster: "media/poster/evil-lady-game.jpg" },
    { file: "media/film/al-gharafa.mp4", poster: "media/poster/al-gharafa.jpg",
      title: "Al Gharafa SC", duration: 37 },
    { file: "media/film/qiib-qatar-airways.mp4", poster: "media/poster/qiib-qatar-airways.jpg?v=12",
      title: "QIIB × Qatar Airways", duration: 62 },
    { file: "media/film/jayo.mp4", poster: "media/poster/jayo.jpg",
      title: "JAYO", note: "Music video", duration: 171 },
    { vimeo: 1149620400, title: "American Sports Crib" },
    { vimeo: 1154638753, title: "JAIA — Egypt" },
    { vimeo: 1145838828, title: "Zuvera Cosmetics" },
    { vimeo: 1212539734, title: "Toyota Supra", note: "Car edit" },
    { vimeo: 1199109850, title: "Color grading" },
    { vimeo: 1145835334, title: "Egypt in One Minute" }
  ],

  vertical: [
    { vimeo: 1212539690, title: "Al Jazeera Perfumes" },
    { vimeo: 1153254204, title: "JAIA — Street Walk" },
    { vimeo: 1199109851, title: "222 CL Cars", note: "Car edit" },
    { vimeo: 1212539691, title: "Al Jazeera Perfumes" },
    { vimeo: 1153254215, title: "JAIA" },
    { vimeo: 1199109326, title: "Flowletics" },
    { vimeo: 1153254239, title: "JAIA — Egypt" },
    { vimeo: 1149621497, title: "NAN Fitness" }
  ],

  motion: [
    { vimeo: 1239415492, title: "Ooredoo", note: "Spec ad" },
    { vimeo: 1239415494, title: "Snoonu", note: "Spec ad" },
    { vimeo: 1239415495, title: "Ninja", note: "Spec ad" }
  ],

  /* Public on Vimeo, but kept off the site. */
  hidden: [
    1145835354, // tesr
    1199109849, // EDIT BTS
    1212540724, // VICTORIA AI VOICE FHD
    1212540112, // flowletic (second copy)
    1212539715, // AL JAZEERAA
    1212539689, // AL JAZEERA 3
    1212539688, // AL JAZEERA 5 AC
    1212539729, // aljazeera F
    1212540725, // PRET FRIENDLY V3
    1145835408  // qatar desert farm (Jay removed it, 2026-11-08)
  ],

  /* Instagram tiles: the picture is saved in media/ig/, the link opens the post. */
  instagramPosts: [
    { code: "DSp1Xl9kuKr", image: "media/ig/DSp1Xl9kuKr.jpg" },
    { code: "DRcQRhpDIPL", image: "media/ig/DRcQRhpDIPL.jpg" },
    { code: "DVQ_jMVjHLW", image: "media/ig/DVQ_jMVjHLW.jpg" },
    { code: "DfKjSJWDqFC", image: "media/ig/DfKjSJWDqFC.jpg" }
  ],

  /* Which project is on screen in the landing film, by second. */
  heroCredits: [
    { from: 0,     title: "QIIB × Qatar Airways" },
    { from: 3.85,  title: "JAYO" },
    { from: 8.35,  title: "Al Jazeera Perfumes" },
    { from: 11.85, title: "Qatar Ministry of Sports" },
    { from: 13.35, title: "JAYO" }
  ]
};
