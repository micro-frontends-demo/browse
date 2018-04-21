import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import RestaurantCard from './RestaurantCard';
import getRestaurants from './data/restaurants';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const defaultFilters = {
  nameFilter: '',
  priceRangeFilter: {
    $: false,
    $$: false,
    $$$: false,
    $$$$: false,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true,
      ...defaultFilters,
    };
  }

  componentDidMount() {
    getRestaurants().then(restaurants => {
      this.setState({ restaurants, loading: false });
    });
  }

  setNameFilter = value => this.setState({ nameFilter: value });
  setPriceRangeFilter = range => checked => {
    this.setState(({ priceRangeFilter }) => ({
      priceRangeFilter: {
        ...priceRangeFilter,
        [range]: checked,
      },
    }));
  };
  resetAllFilters = () => this.setState(defaultFilters);

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const anyPriceSelected = Object.values(this.state.priceRangeFilter).some(f => f);
    const restaurantsInPriceRange = anyPriceSelected
      ? this.state.restaurants.filter(r => this.state.priceRangeFilter[r.priceRange])
      : this.state.restaurants;

    const filteredRestaurants = restaurantsInPriceRange.filter(
      r =>
        r.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()) ||
        r.description.toLowerCase().includes(this.state.nameFilter.toLowerCase()),
    );

    return (
      <MainColumn>
        <Filters
          name={this.state.nameFilter}
          priceRange={this.state.priceRangeFilter}
          setNameFilter={this.setNameFilter}
          setPriceRangeFilter={this.setPriceRangeFilter}
          resetAll={this.resetAllFilters}
        />
        <CardContainer>
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </CardContainer>
      </MainColumn>
    );
  }
}

export default App;
