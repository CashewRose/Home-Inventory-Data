// Define the database as an object
const HomeInventoryDatabase = {
// Define the arrays (a.k.a. tables) in the database to store each type of items
    furniture: [],
    crafts: [],
    electronics: []
}

// The ink well is a craft data item
const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}
const diamondPainting = {
    name: "Diamond Painting",
    location: "Desk",
    description: "I enjoy this craft because it helps me focus and center myself."
}
const drills = {
    name: "Drills",
    location: "Storage container",
    description: "This is an essential part to completing the diamond paintings, these contains all the colors for the project. Some people call these tiles or diamonds."
}
const pickMeUpPen = {
    name: "Pick-Me-Up-Pen",
    location: "Desk",
    description: "This is the necessary tool for lifting and placing drills for the painting."
}
const gelPens = {
    name: "Gel Pens",
    location: "Storage container",
    description: "I use these when I decide to color inside coloring books."
}
const coloringBooks = {
    name: "Coloring Books",
    location: "Storage bin",
    description: "I have a few different books. My favorites are my Hello Kitty one and my cursebook coloring book."
}
const sortingTray = {
    name: "Green Sorting Tray",
    location: "Desk",
    description: "I use this to align my drills and have them facing up so they are easy to grab."
}
const ruler = {
    name: "Ruler",
    location: "Desk",
    description: "I use this for measurement and to align and strighten my square drills on the canvas."
} 
const exacto = {
    name: "Exacto-knife",
    location: "Desk",
    description: "I use this to make a clear and clean precision cut."
} 
const needle = {
    name: "Needle",
    location: "Shelf",
    description: "I use this along with some thread to fix broken buttons and holes in clothes. As well as other small sewing projects."
}
// The writing desk is a furniture data item
const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}
const bed = {
    name: "Purple Bed",
    location: "Bedroom",
    description: "This was my first big bed purchase. And let me tell you, it was EXPENSIVE."
}
const dresser = {
    name: "Wooden Dresser",
    location: "Bedroom",
    description: "I store most of my less expensive clothes folded in its drawers. Its not quite big enough for my clothes collection."
}
const center = {
    name: "Entertainment Center",
    location: "Living Room",
    description: "I love how dark the wood is and its capacity to store things in its nice glass doors."
}
const desk = {
    name: "Rolling Adjustable Desk",
    location: "Craft Area",
    description: "I recently bought this from someone off of facebook. I cleaned it up pretty well and use it for my computer and diamond paintings."
}
const chair = {
    name: "Desk chair",
    location: "Craft Area",
    description: "I was lucky enough to be able to find a decent desk chair for free. Yay for parent donations!"
}
const stand = {
    name: "Bed Stand",
    location: "Bedroom",
    description: "I took what was already in the home but I plan to eventually buy a nice stand to support my bed."
}
const recliner = {
    name: "Double Leather Recliner",
    location: "Living Room",
    description: "I bought this while licing with my ex. He tried to steal it from me at an unfair price. I still have it and love it."
}
const tower = {
    name: "Cat Tower",
    location: "Entryway",
    description: "I was extremely happy that he uses this all the time. Even happier that he liked it more than the box it came in. LOL!"
}
const box = {
    name: "Litter-box",
    location: "Entryway",
    description: "I bought the self cleaning litter box. Its easy because I just have to turn it on its side to seperate the clean from the unclean."
}
// Electronics items 
const play2 = {
    name: "Playstation 2",
    location: "Gaming Center",
    description: "This was my first system, this is what truly turned me into a gamer."
}
const play3 = {
    name: "Playstation 3",
    location: "Gaming Center",
    description: "The first playstation controller that was wireless!"
}
const play4 = {
    name: "Playstation 4",
    location: "Gaming Center",
    description: "The first system with a touch control controller. (I never use it though...)"
}
const wii = {
    name: "Nintendo Wii",
    location: "Gaming Center",
    description: "I really onlt bought this system as a replacement gamecube since my original broke."
}
const tv = {
    name: "Element TV",
    location: "Gaming Center",
    description: "I bought this beauty on black friday. Such a nice big tv with more HDMI ports."
}
const xbox = {
    name: "Xbox 360",
    location: "Gaming Center",
    description: "I have very few games I actually play on this... Its a waste of a system, playstation will forever be better!"
}
const ds = {
    name: "3DS XL",
    location: "Bedroom",
    description: "I dont use this one very much any more. I need to upgrade to a new one since its been glitchy with the memory card lately."
}
const mac = {
    name: "MacBook Pro",
    location: "Desk",
    description: "This is my very first Mac. To say it's been an adjustment is an understatement..."
}
const gameboy = {
    name: "Gameboy SP",
    location: "Bedroom",
    description: "The first gameboy system that had an automatic light up screen and that flipped. Pretty cool."
}
const iphone = {
    name: "Iphone 6s+",
    location: "Purse",
    description: "I use my phone more than my computer. I really need an upgrade though since it only has 16gb of memory it doesnt carry me very far anymore."
}

// Pushing all the new objects into their respective arrays

HomeInventoryDatabase.crafts.push(vintageInkwell, diamondPainting, drills, pickMeUpPen, gelPens, coloringBooks, sortingTray, ruler, exacto, needle);
HomeInventoryDatabase.furniture.push(writingDesk, bed, dresser, center, desk, chair, stand, recliner, tower, box);
HomeInventoryDatabase.electronics.push(play2, play3, play4, wii, tv, xbox, ds, mac, gameboy, iphone);

// Turn information into a JSON string to save it
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

// Turn your JSON into an object to read it 
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
saveDatabase(HomeInventoryDatabase, "Home Inventory")