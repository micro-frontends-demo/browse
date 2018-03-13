import imageSrc from './350x200.png';
// Image comes from: http://via.placeholder.com/350x200

const restaurants = [
  {
    id: '1',
    name: "Becky's Burgers",
    priceRange: '$$',
    imageSrc,
    imageDescription: 'A photo of a burger with fries',
    description: 'Juicy burgers, crunchy fries, and creamy shakes!',
  },
];

const x = restaurants[0];
const tmpRestaurants = [x, x, x, x, x, x, x, x, x, x];

const getRestaurants = () =>
  new Promise(resolve => setTimeout(() => resolve(tmpRestaurants), 1000));

export default getRestaurants;
