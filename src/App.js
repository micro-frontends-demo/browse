import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import RestaurantList from './RestaurantList';
import getRestaurants from './data/restaurants';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
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

const defaultHistory = createBrowserHistory();

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
    const { restaurants, priceRangeFilter, nameFilter, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <Filters
            name={nameFilter}
            priceRange={priceRangeFilter}
            setNameFilter={this.setNameFilter}
            setPriceRangeFilter={this.setPriceRangeFilter}
            resetAll={this.resetAllFilters}
          />
          <RestaurantList
            restaurants={restaurants}
            priceRangeFilter={priceRangeFilter}
            nameFilter={nameFilter}
          />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
