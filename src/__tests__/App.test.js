import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

it('renders and filters the restaurants', async () => {
  const app = mount(<App />);

  await new Promise(resolve => setTimeout(resolve, 1000));
  app.update();

  // Initially we can see all 10 restaurants
  expect(app.find('RestaurantCard')).toHaveLength(10);

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
