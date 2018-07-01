import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

it('shows an error if the restaurant data fails to load', async () => {
  fetch.mockRejectOnce(new Error('Nope!'));
  const app = mount(<App />);

  await new Promise(setTimeout);
  app.update();

  expect(app).toIncludeText('unavailable');
});

it('renders and filters the restaurants', async () => {
  const common = { imageSrc: '/', imageDescription: '', description: '' };
  fetch.once(
    JSON.stringify([
      { id: '1', name: 'Fish and Chips', priceRange: '$', ...common },
      { id: '2', name: 'Chicken Rice', priceRange: '$', ...common },
      { id: '3', name: 'Fried Chicken', priceRange: '$$', ...common },
    ]),
  );
  const app = mount(<App />);

  // Initially the data is loading
  expect(app).toIncludeText('Loading');

  await new Promise(setTimeout);
  app.update();

  // Once it loads, we can see all 3 restaurants
  expect(app.find('RestaurantCard')).toHaveLength(3);

  // There are 2 chicken restaurants
  app
    .find('input[type="text"]')
    .simulate('change', { target: { value: 'chicken' } });
  expect(app.find('RestaurantCard')).toHaveLength(2);

  // And only one of those is in the lowest price point
  app
    .find('input[type="checkbox"]')
    .at(0)
    .simulate('change', { target: { checked: true } });
  expect(app.find('RestaurantCard')).toHaveLength(1);
});
