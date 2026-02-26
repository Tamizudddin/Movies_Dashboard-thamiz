// ========== MOVIE DATA ==========
const movies = [
  {
    id: 1, title: "Fight Club", year: 1999, genre: "Drama",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QI4S2t0POuQ.jpg",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more. A mind-bending exploration of consumerism, identity, and rebellion that has become a cultural phenomenon."
  },
  {
    id: 2, title: "Nanban", year: 2012, genre: "Comedy",
    rating: 7.5,
    poster: "https://image.tmdb.org/t/p/w500/wdbiMjXd4CRHcFsXMJkGL9bpYYF.jpg",
    description: "Two friends embark on a quest for a lost buddy. On this journey, they revisit their college days and recall the memories of their decadent friend who inspired them to think differently. A heartwarming Tamil comedy-drama."
  },
  {
    id: 3, title: "Inception", year: 2010, genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Christopher Nolan's masterpiece of layered reality and breathtaking visuals."
  },
  {
    id: 4, title: "The Dark Knight", year: 2008, genre: "Action",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BTUgMe1nVCeI.jpg",
    description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. Heath Ledger's iconic performance defines cinema."
  },
  {
    id: 5, title: "Interstellar", year: 2014, genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. An epic journey through time and space that explores love, sacrifice, and the bounds of human exploration."
  },
  {
    id: 6, title: "Parasite", year: 2019, genre: "Drama",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. Bong Joon-ho's darkly comic thriller surprised the world."
  },
  {
    id: 7, title: "Mad Max Fury Road", year: 2015, genre: "Action",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a drifter named Max. A relentless, visually stunning action masterpiece."
  },
  {
    id: 8, title: "The Grand Budapest Hotel", year: 2014, genre: "Comedy",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/eWDyYq6WayTUrSBSMNIBVqoOjMG.jpg",
    description: "A writer encounters the owner of an aging high-class hotel, who tells of his early years serving as a lobby boy and the legacy of his friendship with the legendary concierge Gustave H."
  },
  {
    id: 9, title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    description: "Officer K, a new blade runner, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. Roger Deakins' breathtaking cinematography defines a new era of visual storytelling."
  },
  {
    id: 10, title: "John Wick", year: 2014, genre: "Action",
    rating: 7.4,
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him. Keanu Reeves delivers an electrifying performance in this stylish action thriller."
  },
  {
    id: 11, title: "Superbad", year: 2007, genre: "Comedy",
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry. A hilarious and heartfelt coming-of-age comedy classic."
  },
  {
    id: 12, title: "Dune", year: 2021, genre: "Sci-Fi",
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
  },
  {
    id: 13, title: "The Shawshank Redemption", year: 1994, genre: "Drama",
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/9cjIGRBCo0JB8MtXAIjGJoeDxKD.jpg",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and eventual redemption through basic compassion. Widely regarded as one of the greatest films ever made."
  },
  {
    id: 14, title: "Gladiator", year: 2000, genre: "Action",
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgCFim.jpg",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. Russell Crowe's tour-de-force performance anchors this epic."
  },
  {
    id: 15, title: "The Hangover", year: 2009, genre: "Comedy",
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxkEEMQNsTURMVPO.jpg",
    description: "Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. A raucous, laugh-out-loud comedy that redefined the genre."
  },
  {
    id: 16, title: "Oppenheimer", year: 2023, genre: "Drama",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. Nolan's magnum opus weaves science, politics, and morality into a sweeping epic."
  }
];

// ========== STATE ==========
let currentGenre = "All";
let searchQuery = "";
let watchlist = new Set();
let currentModalMovie = null;
let isVoiceActive = false;
let recognition = null;

// ========== DOM ELEMENTS ==========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const movieGrid = $("#movie-grid");
const searchInput = $("#search-input");
const modalOverlay = $("#modal-overlay");
const toastContainer = $("#toast-container");
const voiceBtn = $("#voice-btn");
const themeBtn = $("#theme-btn");
const voiceIndicator = $("#voice-indicator");
const voiceText = $("#voice-text");

// ========== RENDER MOVIES ==========
function renderMovies(animate = true) {
  const filtered = movies.filter((m) => {
    const matchGenre = currentGenre === "All" || m.genre === currentGenre;
    const matchSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  movieGrid.innerHTML = "";

  if (filtered.length === 0) {
    movieGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="empty-state-icon">🎬</div>
        <div class="empty-state-text">No movies found. Try a different search or genre.</div>
      </div>`;
    return;
  }

  filtered.forEach((movie, i) => {
    const card = document.createElement("div");
    card.className = `movie-card${animate ? " filtering-in" : ""}`;
    card.style.animationDelay = `${i * 0.06}s`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${movie.title}, rated ${movie.rating}. Press Enter to view details.`);
    card.dataset.movieId = movie.id;

    const inWatchlist = watchlist.has(movie.id);

    card.innerHTML = `
      <div class="card-poster-wrap">
        <img class="card-poster" src="${movie.poster}" alt="${movie.title} poster" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22450%22><rect fill=%22%231a1a2e%22 width=%22300%22 height=%22450%22/><text fill=%22%236a6a82%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 font-size=%2218%22>🎬</text></svg>'">
        <div class="card-overlay">
          <div class="card-play-icon">▶</div>
        </div>
        <div class="card-rating-badge">⭐ ${movie.rating}</div>
        <div class="watchlist-badge ${inWatchlist ? "show" : ""}" aria-label="${inWatchlist ? "In watchlist" : ""}">✓</div>
      </div>
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">
          <span>${movie.year}</span>
          <span class="card-genre-tag">${movie.genre}</span>
        </div>
      </div>`;

    card.addEventListener("click", () => openModal(movie));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(movie);
      }
    });

    movieGrid.appendChild(card);
  });
}

// ========== SEARCH ==========
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderMovies();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchQuery = searchInput.value;
    renderMovies();
    showToast(`Searching for "${searchQuery}"`, "info");
  }
});

// ========== GENRE FILTER ==========
function setActiveGenre(genre) {
  currentGenre = genre;
  $$(".genre-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.genre === genre);
  });
  renderMovies();
}

$$(".genre-btn").forEach((btn) => {
  btn.addEventListener("click", () => setActiveGenre(btn.dataset.genre));
});

// ========== MODAL ==========
function openModal(movie) {
  currentModalMovie = movie;
  const inWatchlist = watchlist.has(movie.id);

  $("#modal-poster-bg").src = movie.poster;
  $("#modal-poster-bg").alt = movie.title + " backdrop";
  $("#modal-title").textContent = movie.title;
  $("#modal-year").textContent = movie.year;
  $("#modal-rating-val").textContent = movie.rating;
  $("#modal-genre").textContent = movie.genre;
  $("#modal-description").textContent = movie.description;

  const wBtn = $("#watchlist-btn");
  updateWatchlistBtn(wBtn, inWatchlist);

  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus the close button for keyboard users
  setTimeout(() => $("#modal-close-btn").focus(), 100);
}

function closeModal() {
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentModalMovie = null;
}

function updateWatchlistBtn(btn, inWatchlist) {
  if (inWatchlist) {
    btn.innerHTML = "✓ In Watchlist";
    btn.classList.add("in-watchlist");
    btn.setAttribute("aria-label", "Remove from watchlist");
  } else {
    btn.innerHTML = "＋ Add to Watchlist";
    btn.classList.remove("in-watchlist");
    btn.setAttribute("aria-label", "Add to watchlist");
  }
}

// Close button
$("#modal-close-btn").addEventListener("click", closeModal);

// Overlay click
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
    closeModal();
  }
});

// ========== WATCHLIST ==========
$("#watchlist-btn").addEventListener("click", toggleWatchlist);

function toggleWatchlist() {
  if (!currentModalMovie) return;
  const id = currentModalMovie.id;
  const inWatchlist = watchlist.has(id);

  if (inWatchlist) {
    watchlist.delete(id);
    showToast(`"${currentModalMovie.title}" removed from Watchlist`, "info");
  } else {
    watchlist.add(id);
    showToast(`"${currentModalMovie.title}" added to Watchlist!`, "success");
  }

  updateWatchlistBtn($("#watchlist-btn"), !inWatchlist);
  renderMovies(false);
}

// ========== THEME TOGGLE ==========
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("movie-explorer-theme", theme);
  themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  themeBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// Load saved theme
const savedTheme = localStorage.getItem("movie-explorer-theme") || "dark";
setTheme(savedTheme);

// ========== TOAST ==========
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "polite");

  const icons = { success: "✅", error: "❌", info: "ℹ️" };
  toast.innerHTML = `<span>${icons[type] || ""}</span><span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ========== VOICE RECOGNITION ==========
function initVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    voiceBtn.title = "Voice not supported in this browser";
    voiceBtn.style.opacity = "0.4";
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    isVoiceActive = true;
    voiceBtn.classList.add("active", "voice-pulse");
    voiceIndicator.classList.add("show");
    voiceText.textContent = "Listening...";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    voiceText.textContent = `"${transcript}"`;
    setTimeout(() => processVoiceCommand(transcript), 600);
  };

  recognition.onerror = (event) => {
    console.error("Speech error:", event.error);
    if (event.error !== "aborted") {
      showToast("Voice recognition error. Please try again.", "error");
    }
    stopVoice();
  };

  recognition.onend = () => {
    stopVoice();
  };
}

function startVoice() {
  if (!recognition) {
    showToast("Voice recognition not supported in this browser.", "error");
    return;
  }
  try {
    recognition.start();
  } catch (e) {
    console.error(e);
  }
}

function stopVoice() {
  isVoiceActive = false;
  voiceBtn.classList.remove("active", "voice-pulse");
  setTimeout(() => voiceIndicator.classList.remove("show"), 1200);
}

function processVoiceCommand(cmd) {
  // Search command
  if (cmd.startsWith("search ")) {
    const query = cmd.replace("search ", "").trim();
    searchInput.value = query;
    searchQuery = query;
    currentGenre = "All";
    setActiveGenre("All");
    renderMovies();
    showToast(`Searching for "${query}"`, "info");
    return;
  }

  // Genre filter
  const genreMatch = cmd.match(/^show\s+(action|comedy|sci-fi|drama|all)\s*(movies)?$/);
  if (genreMatch) {
    let genre = genreMatch[1];
    if (genre === "all") genre = "All";
    else if (genre === "sci-fi") genre = "Sci-Fi";
    else genre = genre.charAt(0).toUpperCase() + genre.slice(1);
    searchInput.value = "";
    searchQuery = "";
    setActiveGenre(genre);
    showToast(`Showing ${genre} movies`, "info");
    return;
  }

  // Open movie
  if (cmd.startsWith("open ")) {
    const name = cmd.replace("open ", "").trim();
    const movie = movies.find((m) => m.title.toLowerCase().includes(name));
    if (movie) {
      openModal(movie);
      showToast(`Opened "${movie.title}"`, "info");
    } else {
      showToast(`Movie "${name}" not found`, "error");
    }
    return;
  }

  // Watchlist commands
  if (cmd === "add to watchlist") {
    if (currentModalMovie) {
      if (!watchlist.has(currentModalMovie.id)) {
        watchlist.add(currentModalMovie.id);
        updateWatchlistBtn($("#watchlist-btn"), true);
        renderMovies(false);
        showToast(`"${currentModalMovie.title}" added to Watchlist!`, "success");
      } else {
        showToast("Already in Watchlist", "info");
      }
    } else {
      showToast("Open a movie first to add to watchlist", "error");
    }
    return;
  }

  if (cmd === "remove from watchlist") {
    if (currentModalMovie) {
      if (watchlist.has(currentModalMovie.id)) {
        watchlist.delete(currentModalMovie.id);
        updateWatchlistBtn($("#watchlist-btn"), false);
        renderMovies(false);
        showToast(`"${currentModalMovie.title}" removed from Watchlist`, "info");
      } else {
        showToast("Not in Watchlist", "info");
      }
    } else {
      showToast("Open a movie first", "error");
    }
    return;
  }

  // Close modal
  if (cmd === "close details" || cmd === "close") {
    if (modalOverlay.classList.contains("open")) {
      closeModal();
      showToast("Details closed", "info");
    }
    return;
  }

  // Theme
  if (cmd === "enable dark mode" || cmd === "dark mode") {
    setTheme("dark");
    showToast("Dark mode enabled", "info");
    return;
  }

  if (cmd === "enable light mode" || cmd === "light mode") {
    setTheme("light");
    showToast("Light mode enabled", "info");
    return;
  }

  // Unknown command
  showToast(`Unknown command: "${cmd}"`, "error");
}

voiceBtn.addEventListener("click", () => {
  if (isVoiceActive) {
    recognition && recognition.abort();
    stopVoice();
  } else {
    startVoice();
  }
});

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener("keydown", (e) => {
  // Ctrl+K or / to focus search
  if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement !== searchInput)) {
    e.preventDefault();
    searchInput.focus();
  }

  // V to toggle voice
  if (e.key === "v" && document.activeElement !== searchInput && !modalOverlay.classList.contains("open")) {
    e.preventDefault();
    voiceBtn.click();
  }
});

// ========== INIT ==========
renderMovies();
initVoice();
