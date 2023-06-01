import T1 from "../assest/img/i1.png";
import c3 from "../assest/img/c3.png";
import f1 from "../assest/img/f1.png";
import r1 from "../assest/img/r1.png";

export const headerData = [
  { id: "1673062197207", name: "Icecream", decs: "Chocolate & vanilla", price: "99", img: T1 },
  { id: "1673062328128", name: "Strawberries", decs: "Fresh Strawberries", price: "199", img: f1 },
  { id: "1673062261431", name: "Chicken kebab", decs: "Mixed Kebab Plate", price: "149", img: c3 },
  { id: "1673062408402", name: "Veg Pulav", decs: "Rice", price: "199", img: r1 },
];

export const categories = [
  {
    id: 1,
    name: "South-Indian",
    subcategory: [
      {
        name: "Dosa",
        items: [
          { id: "1", name: "Dosa", url: "Plain Dosa" },
          { id: "2", name: "Dosa", url: "Paneer Dosa" },
          { id: "3", name: "Dosa", url: "Masala Dosa" },
        ],
      },
      {
        name: "Idli",
        items: [
          { id: "1", name: "Idli", url: "Steam idli" },
          { id: "2", name: "Idli", url: "Fried idli" },
        ],
      },
      {
        name: "Curry",
        items: [
          { id: "1", name: "Curry", url: "Veg curry" },
          { id: "2", name: "Curry", url: "Non-Veg curry" },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "North-Indian",
    subcategory: [
      {
        name: "Chicken",
        items: [
          { id: "1", name: "Chicken", url: "chicken kebab" },
        ],
      },
      {
        name: "Paneer",
        items: [
          { id: "1", name: "Paneer", url: "Paneer kebab" },
          { id: "2", name: "Paneer", url: "Paneer Chilly" },
          { id: "3", name: "Paneer", url: "Paneer Tikka" },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Chinese",
    subcategory: [
      {
        name: "Momos",
        items: [
          { id: "1", name: "Momos", url: "Steam momos" },
          { id: "2", name: "Momos", url: "Fried momos" },
        ],
      },
      {
        name: "Manchurian",
        items: [
          { id: "1", name: "Manchurian", url: "Dry Manchurian" },
          { id: "2", name: "Manchurian", url: "Gravy Manchurian" },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Italian",
    subcategory: [
      {
        name: "Spaghetti",
        items: [
          { id: "1", name: "Spaghetti", url: "Spaghetti" },
        ],
      },
      {
      name: "Pasta",
        items: [
          { id: "1", name: "Pasta", url: "Red Pasta" },
          { id: "2", name: "Pasta", url: "White Pasta" },
        ],
      },
      {
      name: "Pizza",
        items: [
          { id: "1", name: "Pizza", url: "Paneer pizza" },
          { id: "2", name: "Pizza", url: "Cheese Paneer pizza" },
          { id: "3", name: "Pizza", url: "Cheese Vegetable pizza" },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Main Course",
    subcategory: [
      {
        name: "Rice",
        items: [
          { id: "1", name: "Rice", url: "Rice" },
        ],
      },
      {
        name: "Salad",
        items: [
          { id: "1", name: "Salad", url: "salad" },
        ],
      },
      {
      name: "Sabji",
        items: [
          { id: "1", name: "Sabji", url: "Dal" },
          { id: "2", name: "Sabji", url: "Paneer" },
        ],
      },
      {
      name: "Roti",
        items: [
          { id: "1", name: "Roti", url: "roti" },
        ],
      },
    ],
  },

  {
    id: 6,
    name: "Deserts",
    subcategory: [
      {
        name: "Ice-Creams",
        items: [
          { id: "1", name: "Ice-Creams", url: "IceCream" },
        ],
      },
      {
        name: "Drinks",
        items: [
          { id: "1", name: "Drinks", url: "ColdDrinks" },
          { id: "2", name: "Drinks", url: "Coffee" },
          { id: "3", name: "Drinks", url: "Mocktail" },
        ],
      },
    ],
  },
];
