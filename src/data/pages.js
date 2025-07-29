// src/data/pages.js

// lock/unlock sytax:     unlocksOnVisit: ['9p', '7p'], locksOnVisit: ['12c', '9a']

// A dictionary of all possible inventory items in the game.
// Each item now has a name for display and a path to its image.
export const items = {
  closet_key2: { 
    name: "Shattered Dragon Figurine",
    image: "/assets/items/key3.jpg" 
  },
  closet_key: {
    name: "Small Iron Key",
    image: "/assets/items/key.jpg"
  },
    closet_key3: {
    name: "Smallss Iron Key",
    image: "/assets/items/key3.jpg"
  },
  // Add other item IDs and their data here
};

export const pages = [
  { type: 'link', filename: 'notes', title: 'Notes', counted: false},
  { type: 'link', filename: 'rules', title: 'Rules', counted: false},
  { type: 'link', filename: 'intro', title: 'Introduction', counted: false},
  { type: 'category', title: 'People' },
  { type: 'link', filename: 'fredwells', title: 'Fred Wells' },
  { type: 'link', filename: 'angiewells', title: 'Angie Wells' },
  { type: 'link', filename: 'daledawson', title: 'Dale Dawson' },
  { type: 'link', filename: 'allenflanders', title: 'Allen Flanders' },
  { type: 'link', filename: 'marlabarton', title: 'Marla Barton' },
  { type: 'link', filename: 'missflora', title: 'Miss Flora - Housekeeper' },
  { type: 'link', filename: 'mrslawrence', title: 'Mrs. Lawrence - Cook' },
  { type: 'link', filename: 'thomasgrady', title: 'Thomas Grady - Butler' },
  { type: 'category', title: 'First Floor' },
  { type: 'link', filename: 'mainentry', title: 'Main Entry' },
  { type: 'link', filename: 'billiardroom', title: 'Billiard Room'},
  { type: 'link', filename: 'kitchen', title: 'Kitchen', counted: false },
  { type: 'link', filename: 'gardensuite', title: 'Garden Suite' },
  { type: 'link', filename: 'thegarden', title: 'The Garden' },
  { type: 'link', filename: '12c', title: '12 - C', initialLocked: true },
  { type: 'link', filename: '9a', title: '9 - A', initialLocked: true },
  { type: 'link', filename: '3p', title: '3 - P', counted: false, initialLocked: true },
  { type: 'link', filename: '4p', title: '4 - P', initialLocked: true },
  { type: 'category', title: 'Second Floor' },
  { type: 'link', filename: 'birdroom', title: 'Bird Room', unlocksOnVisit: ['9p'], addsItems: ['closet_key', 'closet_key', 'closet_key2', 'closet_key3'] }, 
  { type: 'link', filename: 'warroom', title: 'War Room' },
  { type: 'link', filename: 'ivorysuite', title: 'Ivory Suite' },
  { type: 'link', filename: '9p', title: '9 - P', initialLocked: true,  },
  { type: 'link', filename: '7p', title: '7 - P', initialLocked: true },
  { type: 'link', filename: '4a', title: '4 - A', initialLocked: true },
  { type: 'link', filename: '10b', title: '10 - B', initialLocked: true },
  { type: 'link', filename: '11a', title: '11 - A', initialLocked: true },
  { type: 'category', title: 'Items' },
  { type: 'link', filename: 'pre1', title: 'PrE - 1', counted: false, initialLocked: true, requiresItem: 'closet_key' },
  { type: 'link', filename: 'exam', title: 'Exam', special: true, counted: false, initialLocked: true },
  { type: 'link', filename: 'whodunit', title: 'Whodunit', special1: true, counted: false, initialLocked: true },
];