import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import TextInput from './components/TextInput';

const FilterRow = styled.div`
  padding-left: 25px;
  font-size: 24px;
  margin-bottom: 10px;
`;

const NameFilter = styled(TextInput)`
  margin-right: 20px;
`;

const Filters = ({ name, priceRange, setNameFilter, setPriceRangeFilter }) => (
  <FilterRow>
    <NameFilter label="Name:" value={name} onChange={setNameFilter} />
    <Button onClick={() => setNameFilter('')}>Clear</Button>
  </FilterRow>
);

export default Filters;
