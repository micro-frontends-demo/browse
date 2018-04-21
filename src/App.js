import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import RestaurantCard from './RestaurantCard';
import getRestaurants from './data/restaurants';

const CardContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [], loading: true };
  }

  componentDidMount() {
    getRestaurants().then(restaurants => {
      this.setState({ restaurants, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <CardContainer>
        {this.state.restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </CardContainer>
    );
  }
}

export default App;
