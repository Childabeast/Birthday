const mapsLink = (name) => {
  const query = /(san jose|campbell)/i.test(name) ? `${name} CA` : `${name} San Jose CA`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const localImages = (id, name) =>
  [1, 2, 3].map((number) => ({
    src: `images/${id}-${number}.jpg`,
    alt: `${name} photo ${number}`
  }));

const options = [
  {
    id: "tomi-sushi",
    section: "dinner",
    name: "Tomi Sushi & Seafood Buffet",
    emoji: "🍣",
    label: "Best Birthday Option",
    rating: "3.9",
    type: "Sushi restaurant",
    status: "Open",
    phone: "(408) 239-1000",
    budget: "$$",
    birthdayScore: "9/10",
    funScore: "9/10",
    description:
      "Huge all-you-can-eat sushi and seafood buffet in a mall. It has lots of variety, feels like an event, and is usually much cheaper than ordering sushi a la carte for a hungry group.",
    highlights: [
      "Huge all-you-can-eat sushi and seafood buffet in a mall.",
      "Lots of variety, so everyone finds something they like.",
      "Feels more like an event than a normal dinner.",
      "Usually much cheaper than ordering sushi a la carte for a hungry group.",
      "Multiple reviews specifically mention birthday celebrations there."
    ],
    tags: ["Buffet", "Sushi", "Best Value", "Birthday Friendly", "Big Group"],
    awards: ["Best value"],
    links: { website: "#", menu: "#", directions: mapsLink("Tomi Sushi and Seafood Buffet") },
    images: localImages("tomi-sushi", "Tomi Sushi & Seafood Buffet")
  },
  {
    id: "sushi-confidential",
    section: "dinner",
    name: "Sushi Confidential",
    emoji: "🍣",
    label: "Trendy Sushi Vibe",
    rating: "3.8",
    type: "Sushi Bars",
    status: "Closed",
    budget: "$$$",
    birthdayScore: "9/10",
    funScore: "8/10",
    description: "A lively sushi spot with cocktails, specialty rolls, and a trendy birthday-friendly atmosphere.",
    highlights: ["Lively atmosphere.", "Good cocktails and specialty rolls.", "People describe it as a fun place for celebrations."],
    tags: ["Sushi", "Trendy", "Cocktails", "Celebration", "Downtown Energy"],
    awards: ["Downtown energy"],
    links: {
      reserve: "#",
      website: "https://sushiconfidential.com/",
      menu: "#",
      directions: mapsLink("Sushi Confidential San Jose")
    },
    images: localImages("sushi-confidential", "Sushi Confidential")
  },
  {
    id: "gyu-kaku",
    section: "dinner",
    name: "Gyu-Kaku Japanese BBQ",
    emoji: "🔥",
    label: "Most Interactive",
    rating: "3.9",
    type: "Japanese BBQ",
    status: "Open",
    budget: "$$-$$$",
    birthdayScore: "10/10",
    funScore: "10/10",
    description:
      "An interactive Japanese BBQ spot where everyone grills meats at the table. Great for group energy and a birthday dinner that feels more memorable than a normal restaurant.",
    highlights: [
      "Everyone grills their own meats at the table.",
      "Great group energy.",
      "Easy to spend 2+ hours hanging out.",
      "More memorable than a standard restaurant.",
      "Often one of the most popular birthday-group choices in the area."
    ],
    tags: ["Interactive", "Japanese BBQ", "Best Overall", "Group Favorite", "Birthday Friendly"],
    awards: ["Best overall", "Most interactive"],
    links: {
      reserve: "https://www.opentable.com/r/gyu-kaku-san-jose",
      website: "https://www.gyu-kaku.com/sanjose/",
      menu: "https://www.gyu-kaku.com/sanjose/",
      directions: mapsLink("Gyu-Kaku Japanese BBQ San Jose")
    },
    images: localImages("gyu-kaku", "Gyu-Kaku Japanese BBQ")
  },
  {
    id: "kura",
    section: "dinner",
    name: "Kura Revolving Sushi Bar",
    emoji: "🚂",
    label: "Fun & Different",
    rating: "3.8",
    type: "Sushi Bars",
    status: "Open",
    phone: "(408) 675-3332",
    budget: "$$",
    birthdayScore: "8/10",
    funScore: "9/10",
    description: "A conveyor-belt sushi restaurant with plate-count games and prizes. Great for a casual, playful birthday dinner.",
    highlights: ["Conveyor-belt sushi.", "Games and prizes from the plate-count system.", "Great if your group likes a more casual, playful vibe."],
    tags: ["Conveyor Belt", "Playful", "Casual", "Sushi", "Fun Experience"],
    awards: ["Most playful"],
    links: {
      website: "https://kurasushi.com/",
      menu: "https://kurasushi.com/menu/",
      directions: mapsLink("Kura Revolving Sushi Bar San Jose")
    },
    images: localImages("kura", "Kura Revolving Sushi Bar")
  },
  {
    id: "buca",
    section: "dinner",
    name: "Buca di Beppo",
    emoji: "🍝",
    label: "Family-Style Italian",
    type: "Italian",
    budget: "$$",
    description: "A loud, goofy, family-style Italian restaurant with huge dishes meant for sharing. Good for groups of 6-12 people.",
    highlights: [
      "Huge dishes meant for sharing.",
      "Loud, goofy atmosphere.",
      "They make a big deal out of birthdays.",
      "Works especially well for groups of 6-12 people.",
      "Often mentioned by locals as a birthday celebration spot."
    ],
    tags: ["Italian", "Family Style", "Big Portions", "Group Friendly", "Birthday Friendly"],
    awards: ["Big portions"],
    links: {
      website: "https://www.dineatbuca.com/",
      menu: "https://www.dineatbuca.com/menu",
      directions: mapsLink("Buca di Beppo San Jose")
    },
    images: localImages("buca", "Buca di Beppo")
  },
  {
    id: "wild-rose",
    section: "dinner",
    name: "Wild Rose Eatery and Bar",
    emoji: "🍹",
    label: "Trendy Dinner + Drinks",
    type: "Dinner + Drinks",
    budget: "$$-$$$",
    description:
      "A trendy dinner and drinks option with cocktails, energetic atmosphere, and a late-night birthday vibe. Good if the group wants a more adult night out.",
    highlights: [
      "Cool cocktails, energetic atmosphere, and late-night vibe.",
      "Better if your group wants a more adult birthday night out.",
      "Afterwards, you are already in downtown Campbell to bar-hop or get dessert."
    ],
    tags: ["Cocktails", "Trendy", "Campbell", "Dinner + Drinks", "Night Out"],
    awards: ["Dinner + drinks"],
    links: {
      website: "https://www.wildroseeatery.com/",
      menu: "https://www.wildroseeatery.com/",
      directions: mapsLink("Wild Rose Eatery and Bar Campbell")
    },
    images: localImages("wild-rose", "Wild Rose Eatery and Bar")
  },
  {
    id: "kyoto-palace",
    section: "dinner",
    name: "Kyoto Palace",
    emoji: "🔪",
    label: "Hibachi / Teppanyaki",
    type: "Hibachi",
    budget: "$$-$$$",
    description: "A hibachi restaurant where the chef cooks in front of the table with jokes, fire, onion volcanoes, and birthday energy.",
    highlights: [
      "Chef cooks right in front of you.",
      "Onion volcanoes, flying shrimp, jokes, and birthday celebrations.",
      "Recommended as a great birthday spot because of the birthday show."
    ],
    tags: ["Hibachi", "Teppanyaki", "Interactive", "Birthday Show", "Group Friendly"],
    awards: ["Birthday show"],
    links: {
      website: "https://kyotopalace.com/",
      menu: "https://kyotopalace.com/",
      directions: mapsLink("Kyoto Palace Campbell")
    },
    images: localImages("kyoto-palace", "Kyoto Palace")
  },
  {
    id: "golfland",
    section: "activities",
    name: "Golfland USA",
    emoji: "⛳",
    label: "Mini Golf + Games",
    description: "A classic birthday activity with mini golf, arcade games, and a competitive group-friendly vibe.",
    highlights: [
      "Classic birthday choice.",
      "Multiple mini-golf courses.",
      "Arcade inside.",
      "Go-karts at some locations or events.",
      "About 15-20 minutes from downtown San Jose."
    ],
    bestIf: "You want something easy, affordable, and competitive.",
    tags: ["Mini Golf", "Arcade", "Competitive", "Budget Friendly", "Classic Birthday"],
    awards: ["Best playful activity"],
    links: { website: "https://www.golfland.com/", directions: mapsLink("Golfland USA San Jose") },
    images: localImages("golfland", "Golfland USA")
  },
  {
    id: "dave-busters",
    section: "activities",
    name: "Dave & Buster's",
    emoji: "🕹️",
    label: "Massive Arcade",
    description: "A large arcade with food, drinks, games, and a full bar for guests 21+. Great for friendly competition.",
    highlights: ["Hundreds of arcade games.", "Basketball, racing, and shooting games.", "Full bar for those 21+.", "Easy to spend 2-3 hours here."],
    bestIf: "Your group likes friendly competition.",
    tags: ["Arcade", "Games", "Drinks", "Competitive", "Big Group"],
    awards: ["Most games"],
    links: {
      website: "https://www.daveandbusters.com/",
      menu: "#",
      directions: mapsLink("Dave and Buster's San Jose")
    },
    images: localImages("dave-busters", "Dave & Buster's")
  },
  {
    id: "bowlero",
    section: "activities",
    name: "Bowlero San Jose",
    emoji: "🎳",
    label: "Upscale Bowling",
    description: "Bowling, arcade games, food, and drinks in a more polished bowling alley setting.",
    highlights: ["Bowling, arcade games, food, and drinks.", "Fun even if people are not serious bowlers.", "Good for larger groups."],
    bestIf: "You want an activity everyone can participate in.",
    tags: ["Bowling", "Arcade", "Group Friendly", "Easy Activity", "Drinks"],
    awards: ["Easiest group activity"],
    links: {
      website: "https://www.luckystrikeent.com/location/lucky-strike-san-jose",
      menu: "https://www.luckystrikeent.com/location/lucky-strike-san-jose",
      directions: mapsLink("Bowlero San Jose")
    },
    images: localImages("bowlero", "Bowlero San Jose")
  },
  {
    id: "miniboss",
    section: "activities",
    name: "Miniboss",
    emoji: "🎯",
    label: "Adult Arcade + Bar",
    description: "A retro arcade bar in downtown San Jose with pinball, classic arcade machines, cocktails, and nightlife energy.",
    highlights: ["Retro arcade downtown.", "Pinball and classic arcade machines.", "Great cocktails.", "Walking distance from many downtown restaurants."],
    bestIf: "You want a more nightlife-oriented birthday.",
    tags: ["Arcade Bar", "Cocktails", "Downtown", "Retro Games", "Nightlife"],
    awards: ["Best group energy"],
    links: { website: "https://www.sjminiboss.com/", menu: "https://www.sjminiboss.com/", directions: mapsLink("Miniboss San Jose") },
    images: localImages("miniboss", "Miniboss")
  },
  {
    id: "omescape",
    section: "activities",
    name: "Omescape San Jose",
    emoji: "🧩",
    label: "Escape Room",
    description: "A highly rated escape room option for groups that want a memorable activity and teamwork.",
    highlights: ["Some of the highest-rated escape rooms in the Bay Area.", "More memorable than arcade games if your group likes puzzles.", "Great for 4-8 people."],
    bestIf: "You want everyone working together.",
    tags: ["Escape Room", "Teamwork", "Puzzle", "4-8 People", "Memorable"],
    awards: ["Best teamwork"],
    links: { website: "https://omescape.us/", directions: mapsLink("Omescape San Jose") },
    images: localImages("omescape", "Omescape San Jose")
  },
  {
    id: "sweet-retreat",
    section: "desserts",
    name: "Sweet Retreat",
    emoji: "🍨",
    label: "Classic Ice Cream",
    description: "An old-school dessert spot with giant ice cream sundaes and a fun birthday-friendly feel.",
    highlights: ["Giant ice cream sundaes.", "Fun, old-school dessert vibe.", "Great if the birthday person has a sweet tooth."],
    tags: ["Ice Cream", "Sundaes", "Classic", "Sweet Tooth", "Birthday Dessert"],
    awards: ["Classic dessert"],
    links: { website: "#", menu: "#", directions: mapsLink("Sweet Retreat San Jose") },
    images: localImages("sweet-retreat", "Sweet Retreat")
  },
  {
    id: "somisomi",
    section: "desserts",
    name: "SomiSomi",
    emoji: "🐟",
    label: "Korean Soft Serve",
    description: "A fun dessert spot known for Korean fish-shaped waffle cones filled with soft serve.",
    highlights: ["Korean fish-shaped waffle cones filled with soft serve.", "Instagram-worthy without being expensive.", "Lots of flavor combinations."],
    tags: ["Soft Serve", "Taiyaki", "Instagram Worthy", "Affordable", "Fun Dessert"],
    awards: ["Most photo-worthy"],
    links: {
      website: "https://somisomi.com/",
      menu: "https://somisomi.com/",
      directions: mapsLink("SomiSomi San Jose")
    },
    images: localImages("somisomi", "SomiSomi")
  },
  {
    id: "hannas",
    section: "desserts",
    name: "Hanna's Creamery & Cafe",
    emoji: "🍦",
    label: "Homemade Ice Cream",
    description: "A homemade ice cream and cafe option near downtown Campbell, good for relaxing and walking around after.",
    highlights: ["Homemade ice cream.", "Nice walkable area around downtown Campbell.", "Easy to continue hanging out afterward."],
    tags: ["Ice Cream", "Cafe", "Campbell", "Walkable", "Relaxed"],
    awards: ["Most relaxed"],
    links: { website: "#", menu: "#", directions: mapsLink("Hanna's Creamery and Cafe Campbell") },
    images: localImages("hannas", "Hanna's Creamery & Cafe")
  },
  {
    id: "paper-plane",
    section: "bars",
    name: "Paper Plane",
    emoji: "🍸",
    label: "Popular Cocktail Bar",
    description: "A popular downtown cocktail bar with a lively but still conversational birthday atmosphere.",
    highlights: ["Probably the most popular cocktail bar downtown.", "Lively but still easy to talk.", "Great birthday atmosphere."],
    tags: ["Cocktails", "Downtown", "Lively", "Birthday Atmosphere", "Not Clubby"],
    awards: ["Best nightlife bar"],
    links: {
      website: "https://www.paperplanesj.com/",
      menu: "https://www.paperplanesj.com/",
      directions: mapsLink("Paper Plane San Jose")
    },
    images: localImages("paper-plane", "Paper Plane")
  },
  {
    id: "55-south",
    section: "bars",
    name: "55 South",
    emoji: "🥃",
    label: "Strong Cocktails",
    description: "An energetic downtown bar known for cocktails, good for continuing the night without going full nightclub.",
    highlights: ["Strong cocktails.", "Usually energetic without feeling like a nightclub.", "Walking distance from other downtown spots."],
    tags: ["Cocktails", "Downtown", "Energetic", "Walkable", "Not Clubby"],
    awards: ["Walkable bar hop"],
    links: { website: "#", menu: "#", directions: mapsLink("55 South San Jose") },
    images: localImages("55-south", "55 South")
  },
  {
    id: "cash-only",
    section: "bars",
    name: "Cash Only",
    emoji: "🕵️",
    label: "Speakeasy Vibe",
    description: "A hidden-feeling bar that feels more unique and special than a normal bar.",
    highlights: ["Hidden speakeasy vibe.", "Feels more special than a normal bar.", "Great for a birthday group that wants something unique."],
    tags: ["Speakeasy", "Unique", "Cocktails", "Birthday Night", "Hidden Gem"],
    awards: ["Most unique"],
    links: {
      website: "https://cashonlysj.com/",
      menu: "https://cashonlysj.com/",
      directions: mapsLink("Cash Only San Jose")
    },
    images: localImages("cash-only", "Cash Only")
  },
  {
    id: "dr-funk",
    section: "bars",
    name: "Dr. Funk",
    emoji: "🌺",
    label: "Tiki Bar",
    description: "A tiki bar with tropical drinks and a fun atmosphere that feels like a mini vacation.",
    highlights: ["Tiki bar.", "Fun drinks and tropical atmosphere.", "Feels like a mini vacation."],
    tags: ["Tiki", "Tropical", "Cocktails", "Fun Atmosphere", "Unique"],
    awards: ["Mini vacation"],
    links: { website: "https://drfunksj.com/", menu: "https://drfunksj.com/", directions: mapsLink("Dr. Funk San Jose") },
    images: localImages("dr-funk", "Dr. Funk")
  },
  {
    id: "guildhouse",
    section: "bars",
    name: "Guildhouse",
    emoji: "🎲",
    label: "Games + Drinks",
    description: "A bar with board games, video games, and drinks. More interactive than a normal bar.",
    highlights: ["Board games, video games, and drinks.", "Perfect if your group is even slightly nerdy.", "More interactive than a normal bar."],
    tags: ["Games", "Board Games", "Video Games", "Drinks", "Interactive"],
    awards: ["Most interactive bar"],
    links: {
      website: "https://www.guildhouse.gg/",
      menu: "https://www.guildhouse.gg/",
      directions: mapsLink("Guildhouse San Jose")
    },
    images: localImages("guildhouse", "Guildhouse")
  }
];

const routes = [
  {
    name: "Most Interactive Night",
    stops: { Dinner: "Gyu-Kaku Japanese BBQ", Activity: "K1 Speed or Dave & Buster's", After: "Paper Plane or 55 South" },
    vibe: "High-energy, competitive, interactive, great for a group of friends."
  },
  {
    name: "Classic Birthday Fun",
    stops: { Dinner: "Kyoto Palace", Activity: "Golfland USA", Dessert: "Sweet Retreat" },
    vibe: "Goofy, fun, easy, birthday-friendly, and good for laughing together."
  },
  {
    name: "Downtown Night Out",
    stops: { Dinner: "Sushi Confidential or Wild Rose Eatery and Bar", Activity: "Miniboss", After: "Paper Plane, Cash Only, or Dr. Funk" },
    vibe: "Best for a more adult birthday night with drinks and nightlife."
  },
  {
    name: "Relaxed Sweet Night",
    stops: { Dinner: "Buca di Beppo", Activity: "Bowlero San Jose", Dessert: "Hanna's Creamery & Cafe" },
    vibe: "Casual, group-friendly, less intense, good if everyone wants something easy."
  },
  {
    name: "Playful Foodie Route",
    stops: { Dinner: "Kura Revolving Sushi Bar", Activity: "Omescape San Jose", Dessert: "SomiSomi" },
    vibe: "Unique, playful, and memorable without being overly expensive."
  }
];

const sectionMap = {
  dinner: document.querySelector("#dinner-grid"),
  activities: document.querySelector("#activities-grid"),
  desserts: document.querySelector("#desserts-grid"),
  bars: document.querySelector("#bars-grid")
};

const state = {
  filter: "All",
  galleries: {},
  favorites: new Set(JSON.parse(localStorage.getItem("birthdayFavorites") || "[]"))
};

function render() {
  Object.values(sectionMap).forEach((grid) => {
    grid.innerHTML = "";
  });

  const visibleOptions = options.filter((option) => state.filter === "All" || option.tags.includes(state.filter));

  visibleOptions.forEach((option) => {
    sectionMap[option.section].appendChild(createCard(option));
    state.galleries[option.id] = 0;
  });

  Object.entries(sectionMap).forEach(([section, grid]) => {
    const sectionElement = document.querySelector(`#${section}`);
    sectionElement.classList.toggle("hidden", grid.children.length === 0);
  });

  document.querySelector("#option-count").textContent = options.length;
}

function createCard(option) {
  const card = document.createElement("article");
  card.className = "option-card";
  card.dataset.id = option.id;
  card.innerHTML = `
    <span class="category-badge">${option.label}</span>
    <button class="favorite-button ${state.favorites.has(option.id) ? "active" : ""}" type="button" data-favorite="${option.id}" aria-label="Mark ${option.name} as a favorite">★</button>
    ${createGallery(option)}
    <div class="card-body">
      <div class="card-title">
        <h3>${option.name}</h3>
        <span class="emoji" aria-hidden="true">${option.emoji}</span>
      </div>
      ${createMeta(option)}
      ${createScores(option)}
      ${createAwards(option)}
      <p class="description">${option.description}</p>
      <ul class="highlights">${option.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
      ${option.bestIf ? `<p class="best-if"><strong>Best if:</strong> ${option.bestIf}</p>` : ""}
      <div class="tag-list">${option.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      ${createLinks(option.links)}
    </div>
  `;
  return card;
}

function createGallery(option) {
  const dots = option.images
    .map((_, index) => `<button class="dot ${index === 0 ? "active" : ""}" type="button" data-gallery-dot="${option.id}" data-index="${index}" aria-label="Show image ${index + 1} for ${option.name}"></button>`)
    .join("");

  const controls =
    option.images.length > 1
      ? `
        <button class="gallery-button prev" type="button" data-gallery-prev="${option.id}" aria-label="Previous image for ${option.name}">‹</button>
        <button class="gallery-button next" type="button" data-gallery-next="${option.id}" aria-label="Next image for ${option.name}">›</button>
        <div class="dots">${dots}</div>
      `
      : "";

  return `
    <div class="gallery" data-gallery="${option.id}">
      <div class="gallery-track">
        ${option.images.map((image) => `<div class="gallery-slide"><img src="${image.src}" alt="${image.alt}" loading="lazy"></div>`).join("")}
      </div>
      ${controls}
    </div>
  `;
}

function createMeta(option) {
  const meta = [
    option.type,
    option.rating ? `★ ${option.rating}` : "",
    option.status,
    option.budget,
    option.phone
  ].filter(Boolean);

  return `<div class="meta-row">${meta.map((item) => `<span class="meta-pill">${item}</span>`).join("")}</div>`;
}

function createScores(option) {
  const scores = [
    option.birthdayScore ? `<span class="score-badge gold">Birthday ${option.birthdayScore}</span>` : "",
    option.funScore ? `<span class="score-badge">Fun ${option.funScore}</span>` : ""
  ].filter(Boolean);

  return scores.length ? `<div class="score-row">${scores.join("")}</div>` : "";
}

function createAwards(option) {
  return option.awards?.length
    ? `<div class="score-row">${option.awards.map((award) => `<span class="award">${award}</span>`).join("")}</div>`
    : "";
}

function createLinks(links) {
  const order = ["website", "menu", "directions", "reserve"];
  const labels = { website: "Website", menu: "Menu", directions: "Directions", reserve: "Reserve" };
  const buttons = order
    .filter((key) => Object.prototype.hasOwnProperty.call(links, key))
    .map((key) => {
      if (!links[key] || links[key] === "#") {
        return `<span class="link-button disabled">${labels[key]} · Add link later</span>`;
      }
      return `<a class="link-button" href="${links[key]}" target="_blank" rel="noopener noreferrer">${labels[key]}</a>`;
    })
    .join("");

  return `<div class="card-links">${buttons}</div>`;
}

function renderFilters() {
  const usefulTags = ["All", "Best Value", "Best Overall", "Group Friendly", "Interactive", "Budget Friendly", "Competitive", "Cocktails", "Fun Dessert", "Downtown", "Birthday Friendly"];
  const filters = document.querySelector("#filters");
  filters.innerHTML = usefulTags
    .map((tag) => `<button class="filter-chip ${tag === state.filter ? "active" : ""}" type="button" data-filter="${tag}">${tag}</button>`)
    .join("");
}

function renderRoutes() {
  const grid = document.querySelector("#routes-grid");
  grid.innerHTML = routes
    .map((route, index) => {
      const stops = Object.entries(route.stops)
        .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
        .join("");
      return `
        <article class="route-card">
          <h3>${route.name}</h3>
          <dl class="route-list">${stops}</dl>
          <p><strong>Vibe:</strong> ${route.vibe}</p>
          <button class="copy-route" type="button" data-route="${index}">Copy route</button>
        </article>
      `;
    })
    .join("");
}

function updateGallery(id, nextIndex) {
  const option = options.find((item) => item.id === id);
  if (!option) return;

  const total = option.images.length;
  const index = (nextIndex + total) % total;
  state.galleries[id] = index;

  const gallery = document.querySelector(`[data-gallery="${id}"]`);
  if (!gallery) return;

  gallery.querySelector(".gallery-track").style.transform = `translateX(-${index * 100}%)`;
  gallery.querySelectorAll(".dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

document.addEventListener("click", async (event) => {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    renderFilters();
    render();
    return;
  }

  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    const id = favoriteButton.dataset.favorite;
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    localStorage.setItem("birthdayFavorites", JSON.stringify([...state.favorites]));
    favoriteButton.classList.toggle("active");
    return;
  }

  const prevButton = event.target.closest("[data-gallery-prev]");
  if (prevButton) {
    const id = prevButton.dataset.galleryPrev;
    updateGallery(id, state.galleries[id] - 1);
    return;
  }

  const nextButton = event.target.closest("[data-gallery-next]");
  if (nextButton) {
    const id = nextButton.dataset.galleryNext;
    updateGallery(id, state.galleries[id] + 1);
    return;
  }

  const dotButton = event.target.closest("[data-gallery-dot]");
  if (dotButton) {
    updateGallery(dotButton.dataset.galleryDot, Number(dotButton.dataset.index));
    return;
  }

  const copyButton = event.target.closest("[data-route]");
  if (copyButton) {
    const route = routes[Number(copyButton.dataset.route)];
    const text = `${route.name}\n${Object.entries(route.stops)
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n")}\nVibe: ${route.vibe}`;

    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = "Copy route";
      }, 1400);
    } catch {
      copyButton.textContent = "Copy unavailable";
    }
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderFilters();
renderRoutes();
render();
