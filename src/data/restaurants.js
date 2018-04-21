const burger = 'http://localhost:5001/images/1-burger.jpg';
const chickenRice = 'http://localhost:5001/images/2-chicken-rice.jpg';
const pizza = 'http://localhost:5001/images/3-pizza.jpg';
const satay = 'http://localhost:5001/images/4-satay.jpg';
const curry = 'http://localhost:5001/images/5-curry.jpg';
const sandwich = 'http://localhost:5001/images/6-sandwich.jpg';
const paella = 'http://localhost:5001/images/7-paella.jpg';
const friedChicken = 'http://localhost:5001/images/8-fried-chicken.jpg';
const sushi = 'http://localhost:5001/images/9-sushi.jpg';
const fishNChips = 'http://localhost:5001/images/10-fish-n-chips.jpg';

const restaurants = [
  {
    id: '1',
    name: "Becky's Burgers",
    priceRange: '$$',
    imageSrc: burger,
    imageDescription: 'A photo of a burger with fries',
    description: 'Juicy burgers, crunchy fries, and creamy shakes',
  },
  {
    id: '2',
    name: 'Chicken Nice',
    priceRange: '$',
    imageSrc: chickenRice,
    imageDescription: 'A photo of Hainanese chicken rice',
    description: "The world's best Hainanese Chicken Rice",
  },
  {
    id: '3',
    name: "Nonna's pizza and pasta",
    priceRange: '$$',
    imageSrc: pizza,
    imageDescription: 'A photo of a margherita pizza',
    description: 'Classic pizza and pasta just like Nonna used to make',
  },
  {
    id: '4',
    name: 'Super satay skewers',
    priceRange: '$',
    imageSrc: satay,
    imageDescription: 'A photo of some satay skewers with sauce',
    description: "Satay so good it'll save the world",
  },
  {
    id: '5',
    name: 'Curry delights',
    priceRange: '$$$',
    imageSrc: curry,
    imageDescription: 'A photo of Indian curries',
    description: 'The best Indian curries from the freshest ingredients',
  },
  {
    id: '6',
    name: 'Sliced',
    priceRange: '$',
    imageSrc: sandwich,
    imageDescription: 'A photo of a sandwich',
    description: 'Fresh sandwhiches at great prices',
  },
  {
    id: '7',
    name: 'Taste of Iberia',
    priceRange: '$$$$',
    imageSrc: paella,
    imageDescription: 'A photo of Spanish Paella',
    description: 'Paella, tapas, and imported Spanish wines',
  },
  {
    id: '8',
    name: 'Crunchy Crunch',
    priceRange: '$$',
    imageSrc: friedChicken,
    imageDescription: 'A photo of crispy fried chicken',
    description: "The city's best Southern-style fried chicken",
  },
  {
    id: '9',
    name: "Japan's finest",
    priceRange: '$$$',
    imageSrc: sushi,
    imageDescription: 'A photo of sushi and sashimi',
    description: 'Only the freshest fish and tastiest katsu',
  },
  {
    id: '10',
    name: "Chippo's",
    priceRange: '$',
    imageSrc: fishNChips,
    imageDescription: 'A photo of deep-fried fish with thick-cut hot chips',
    description: 'Authentic Aussie-style fish n chips',
  },
];

const getRestaurants = () => new Promise(resolve => setTimeout(() => resolve(restaurants), 1000));

export default getRestaurants;
