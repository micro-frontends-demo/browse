import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import RestaurantList from './RestaurantList';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
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
      error: false,
      ...defaultFilters,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/restaurants.json`)
      .then(result => result.json())
      .then(restaurants => {
        this.setState({
          restaurants: restaurants.map(restaurant => ({
            ...restaurant,
            imageSrc: `${host}${restaurant.imageSrc}`,
          })),
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
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
    const {
      restaurants,
      priceRangeFilter,
      nameFilter,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the restaurant list is unavailable right now
        </MainColumn>
      );
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
