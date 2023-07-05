import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  abtMe: [{ letter: "A", id: 1 },
  { letter: "B", id: 2 }, { letter: "O", id: 3 }, { letter: "U", id: 4 }, { letter: "T", id: 5 }, { letter: " ", id: 6 }, { letter: "M", id: 7 }, { letter: "E", id: 8 }],

  port: [{ letter: "P", id: 18 },
  { letter: "O", id: 19 }, { letter: "R", id: 20 }, { letter: "T", id: 21 }, { letter: "F", id: 22 }, { letter: "O", id: 23 }, { letter: "L", id: 24 }, { letter: "I", id: 25 }, { letter: "O", id: 26 }],

  skills: [{ letter: "M", id: 9 }, { letter: "Y", id: 10 }, { letter: " ", id: 11 }, { letter: "S", id: 12 }, { letter: "K", id: 13 }, { letter: "I", id: 14 }, { letter: "L", id: 15 }, { letter: "L", id: 16 }, { letter: "S", id: 17 }],

  contact: [{ letter: "C", id: 27 },
  { letter: "O", id: 28 }, { letter: "N", id: 29 }, { letter: "T", id: 30 }, { letter: "A", id: 31 }, { letter: "C", id: 32 }, { letter: "T", id: 33 }, { letter: " ", id: 34 }, { letter: "M", id: 35 }, { letter: "E", id: 36 }],
  colors: ["#7165b5", "#3079d3", "#9d0a0a", "#249d39", "#cbb92e", "#ff6c00", "#ff00ae", "#6cf9fe"],
  colors2: ["#7165b5", "#3079d3", "#9d0a0a", "#249d39", "#cbb92e", "#ff6c00", "#ff00ae", "#6cf9fe"],

  heroText: [{ letter: "H", id: 37 }, { letter: "e", id: 38 }, { letter: "l", id: 39 }, { letter: "l", id: 40 }, { letter: "o", id: 41 }, { letter: ",", id: 42 }, { letter: " ", id: 43 }, { letter: "I", id: 44 }, { letter: " ", id: 45 }, { letter: "a", id: 46 }, { letter: "m", id: 47 }, { letter: " ", id: 48 }, { letter: "W", id: 49 }, { letter: "i", id: 50 }, { letter: "l", id: 51 }, { letter: "l", id: 52 }, { letter: "i", id: 53 }, { letter: "a", id: 54 }, { letter: "m", id: 55 }, { letter: " ", id: 56 }, { letter: "E", id: 57 }, { letter: "d", id: 58 }, { letter: "w", id: 59 }, { letter: "a", id: 60 }, { letter: "r", id: 61 }, { letter: "d", id: 62 }, { letter: "s", id: 63 }, { letter: ",", id: 64 }, { letter: " ", id: 65 }, { letter: "a", id: 66 }, { letter: " ", id: 67 }, { letter: "f", id: 68 }, { letter: "u", id: 69 }, { letter: "l", id: 70 }, { letter: "l", id: 71 }, { letter: "s", id: 72 }, { letter: "t", id: 73 }, { letter: "a", id: 74 }, { letter: "c", id: 75 }, { letter: "k", id: 76 }, { letter: " ", id: 77 }, { letter: "s", id: 78 }, { letter: "o", id: 79 }, { letter: "f", id: 80 }, { letter: "t", id: 81 }, { letter: "w", id: 82 }, { letter: "a", id: 83 }, { letter: "r", id: 84 }, { letter: "e", id: 85 }, { letter: " ", id: 86 }, { letter: "d", id: 87 }, { letter: "e", id: 88 }, { letter: "v", id: 89 }, { letter: "e", id: 90 }, { letter: "l", id: 91 }, { letter: "o", id: 92 }, { letter: "p", id: 93 }, { letter: "e", id: 94 }, { letter: "r", id: 95 }, { letter: "!", id: 96 }]


})
