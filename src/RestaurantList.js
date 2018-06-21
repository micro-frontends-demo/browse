import React from 'react';
import styled from 'styled-components';
import RestaurantCard from './RestaurantCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RestaurantList = ({ restaurants, priceRangeFilter, nameFilter }) => {
  const anyPriceSelected = Object.values(priceRangeFilter).some(f => f);

  const restaurantsInPriceRange = anyPriceSelected
    ? restaurants.filter(r => priceRangeFilter[r.priceRange])
    : restaurants;

  const filteredRestaurants = restaurantsInPriceRange.filter(
    r =>
      r.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      r.description.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  return (
    <CardContainer>
      {filteredRestaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </CardContainer>
  );
};

export default RestaurantList;
