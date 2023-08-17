import earth from "./img/Decor/frames-green.webp";
import silver from "./img/Decor/frames-silver.webp";
import boho from "./img/Decor/frames-wood.webp";
import chrome from "./img/Decor//frames.webp";
import lamp1 from "./img/Decor/lamp1.jpg";
import lamp2 from "./img/Decor/lamp2.webp";
import lamp3 from "./img/Decor/lamp3.webp";
import lamp4 from "./img/Decor/lamp4.jpg";
import lamp5 from "./img/Decor/lamp5.jpeg";
import blue from "./img/Decor/paint-blue.jpg";
import lightGrey from "./img/Decor/paint-white.webp";

import waterCan from "./img/Garden/cans.jpg";
import swing from "./img/Garden/catepillar.png";
import lily from "./img/Garden/lilys.jpg";
import ophelia from "./img/Garden/ophelia-garden-set.png";
import rose from "./img/Garden/pink-rose.jpg";
import owl from "./img/Garden/owl-seating.jpg";
import plantpot from "./img/Garden/plantpot-set.jpg";
import poppy from "./img/Garden/poppy2.webp";
import shovelSet from "./img/Garden/shovel-set.jpg";
import shovel from "./img/Garden/shovel.jpg";
import tulip from "./img/Garden/tulipswebp.webp";

import abba from "./img/Home/abba-chair.jpg";
import cynthia from "./img/Home/bed-side.avif";
import bucket from "./img/Home/bucket-bathtub.jpg";
import jessica from "./img/Home/coffee-table.webp";
import samantha from "./img/Home/dining-table.jpg";
import vert from "./img/Home/duvet.webp";
import flamingo from "./img/Home/faucet.webp";
import feather from "./img/Home/feather-mattress.jpg";
import grey from "./img/Home/grey-towels.webp";
import marylin from "./img/Home/marylin-chand.jpg";
import pearl from "./img/Home/pearl-chand.jpg";
import rufus from "./img/Home/rufus-rug.jpg";
import sofia from "./img/Home/sofia-sofa.jpg";
import swan from "./img/Home/swan-towels.jpg";
import treehouse from "./img/Home/treehouse-table.jpg";

import baking from "./img/Kitchen/baking-set.jpg";
import plates from "./img/Kitchen/dining-set.webp";
import duster from "./img/Kitchen/duster.jpg";
import dyson from "./img/Kitchen/hoover.jpg";
import mixer from "./img/Kitchen/mixer.jpg";
import pots from "./img/Kitchen/pots.jpg";
import roomba from "./img/Kitchen/roomba.jpeg";
import jugs from "./img/Kitchen/set.jpg";
import utensils from "./img/Kitchen/utensils.jpg";
import tray from "./img/Kitchen/tray.webp";

export const INVENTORY = [
  {
    id: 1,
    title: "Earth Frame Set",
    img: earth,
    price: 20,
    category: "decor",
    filter: "FRAMES",
  },
  {
    id: 2,
    title: "Silver Frames Set",
    img: silver,
    price: 35,
    category: "decor",
    filter: "FRAMES",
  },
  {
    id: 3,
    title: "Boho Frames Set",
    img: boho,
    price: 30,
    category: "decor",
    filter: "FRAMES",
  },
  {
    id: 4,
    title: "Chrome Frames Set",
    img: chrome,
    price: 20,
    category: "decor",
    filter: "FRAMES",
  },
  {
    id: 5,
    title: "Lantern Lamp",
    img: lamp1,
    price: 50,
    category: "decor",
    filter: "LIGHTING",
  },
  {
    id: 6,
    title: "Goblet Lamp",
    img: lamp2,
    price: 20,
    category: "decor",
    filter: "LIGHTING",
  },
  {
    id: 7,
    title: "Victoria Lamp",
    img: lamp3,
    price: 60,
    category: "decor",
    filter: "LIGHTING",
  },
  {
    id: 8,
    title: "Telescopic Lamp",
    img: lamp4,
    price: 30,
    category: "decor",
    filter: "LIGHTING",
  },
  {
    id: 9,
    title: "Desk Lamp",
    img: lamp5,
    price: 20,
    category: "decor",
    filter: "LIGHTING",
  },
  {
    id: 10,
    title: "Mint",
    img: blue,
    price: 20,
    category: "decor",
    filter: "PAINT",
  },
  {
    id: 11,
    title: "Dusk",
    img: lightGrey,
    price: 20,
    category: "decor",
    filter: "PAINT",
  },
  {
    id: 12,
    title: "Catepillar Swing Set",
    img: swing,
    price: 40,
    category: "garden",
    filter: "FURNITURE",
  },
  {
    id: 13,
    title: "Ophelia Garden Set",
    img: ophelia,
    price: 210,
    category: "garden",
    filter: "FURNITURE",
  },
  {
    id: 14,
    title: "Owl Chair",
    img: owl,
    price: 40,
    category: "garden",
    filter: "FURNITURE",
  },
  {
    id: 15,
    title: "Plant Pot Set",
    img: plantpot,
    price: 15,
    category: "garden",
    filter: "TOOLS",
  },
  {
    id: 16,
    title: "Watering Can",
    img: waterCan,
    price: 15,
    category: "garden",
    filter: "TOOLS",
  },
  {
    id: 17,
    title: "Shovel Set",
    img: shovelSet,
    price: 20,
    category: "garden",
    filter: "TOOLS",
  },
  {
    id: 18,
    title: "Planting Shovel",
    img: shovel,
    price: 9,
    category: "garden",
    filter: "TOOLS",
  },
  {
    id: 19,
    title: "Pink Rose Seeds",
    img: rose,
    price: 3,
    category: "garden",
    filter: "PLANTS",
  },
  {
    id: 20,
    title: "Lily Seeds",
    img: lily,
    price: 3,
    category: "garden",
    filter: "PLANTS",
  },
  {
    id: 21,
    title: "Poppy Seeds",
    img: poppy,
    price: 3,
    category: "garden",
    filter: "PLANTS",
  },
  {
    id: 22,
    title: "Tulip Seeds",
    img: tulip,
    price: 3,
    category: "garden",
    filter: "PLANTS",
  },
  {
    id: 23,
    title: "Pink Rose Seeds",
    img: rose,
    price: 3,
    category: "garden",
    filter: "PLANTS",
  },
  {
    id: 24,
    title: "Abba Chair",
    img: abba,
    price: 30,
    category: "home",
    filter: "LIVING ROOM",
  },
  {
    id: 25,
    title: "Sofia Sofa",
    img: sofia,
    price: 350,
    category: "home",
    filter: "LIVING ROOM",
  },
  {
    id: 26,
    title: "Jessica Coffee Table",
    img: jessica,
    price: 70,
    category: "home",
    filter: "LIVING ROOM",
  },
  {
    id: 27,
    title: "Treehouse Coffee Table",
    img: treehouse,
    price: 80,
    category: "home",
    filter: "LIVING ROOM",
  },
  {
    id: 28,
    title: "Rufus Rug",
    img: rufus,
    price: 40,
    category: "home",
    filter: "LIVING ROOM",
  },
  {
    id: 29,
    title: "Samantha Dining Table",
    img: samantha,
    price: 300,
    category: "home",
    filter: "DINING ROOM",
  },
  {
    id: 30,
    title: "Pearl Chandelier",
    img: pearl,
    price: 250,
    category: "home",
    filter: "DINING ROOM",
  },
  {
    id: 31,
    title: "Marylin Chandelier",
    img: marylin,
    price: 150,
    category: "home",
    filter: "DINING ROOM",
  },
  {
    id: 32,
    title: "Cynthia Bed-Side Table",
    img: cynthia,
    price: 50,
    category: "home",
    filter: "BEDROOM",
  },
  {
    id: 33,
    title: "Vert Duvet Set",
    img: vert,
    price: 50,
    category: "home",
    filter: "BEDROOM",
  },
  {
    id: 34,
    title: "Feather Mattress",
    img: feather,
    price: 200,
    category: "home",
    filter: "BEDROOM",
  },
  {
    id: 35,
    title: "Bucket Bathtub",
    img: bucket,
    price: 250,
    category: "home",
    filter: "bathroom",
  },
  {
    id: 36,
    title: "Flamingo Faucet",
    img: flamingo,
    price: 150,
    category: "home",
    filter: "bathroom",
  },
  {
    id: 37,
    title: "Earth Towel Set",
    img: grey,
    price: 40,
    category: "home",
    filter: "bathroom",
  },
  {
    id: 38,
    title: "Swan Towel set",
    img: swan,
    price: 40,
    category: "home",
    filter: "bathroom",
  },
  {
    id: 39,
    title: "Emerald Dining Set",
    img: plates,
    price: 30,
    category: "kitchen",
    filter: "COOKING",
  },
  {
    id: 40,
    title: "Pots Set",
    img: pots,
    price: 35,
    category: "kitchen",
    filter: "COOKING",
  },
  {
    id: 41,
    title: "Cooking Utensil Set",
    img: utensils,
    price: 20,
    category: "kitchen",
    filter: "COOKING",
  },
  {
    id: 42,
    title: "Baking Set",
    img: baking,
    price: 150,
    category: "kitchen",
    filter: "BAKING",
  },
  {
    id: 43,
    title: "Cupcake Tray",
    img: tray,
    price: 20,
    category: "kitchen",
    filter: "BAKING",
  },
  {
    id: 44,
    title: "Electric Mixer",
    img: mixer,
    price: 270,
    category: "kitchen",
    filter: "BAKING",
  },
  {
    id: 45,
    title: "Measuring Jug Set",
    img: jugs,
    price: 15,
    category: "kitchen",
    filter: "BAKING",
  },
  {
    id: 46,
    title: "Duster",
    img: duster,
    price: 15,
    category: "kitchen",
    filter: "CLEANING",
  },
  {
    id: 47,
    title: "Roomba",
    img: roomba,
    price: 215,
    category: "kitchen",
    filter: "CLEANING",
  },
  {
    id: 48,
    title: "Dyson Hoover",
    img: dyson,
    price: 600,
    category: "kitchen",
    filter: "CLEANING",
  },
];
