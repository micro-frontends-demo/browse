import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
  display: flex;

  ${mediumScreen} {
    flex-direction: column;
  }
`;

const PriceRangeFields = styled.span`
  margin: 0 20px;
  display: flex;

  ${mediumScreen} {
    margin: 10px;
  }

  ${smallScreen} {
    flex-direction: column;
  }
`;

const Filters = ({
  name,
  priceRange,
  setNameFilter,
  setPriceRangeFilter,
  resetAll,
}) => (
  <FilterRow>
    <TextInput label="Search:" value={name} onChange={setNameFilter} />
    <PriceRangeFields>
      Price range:
      <Checkbox
        label="$"
        checked={priceRange.$}
        onChange={setPriceRangeFilter('$')}
      />
      <Checkbox
        label="$$"
        checked={priceRange.$$}
        onChange={setPriceRangeFilter('$$')}
      />
      <Checkbox
        label="$$$"
        checked={priceRange.$$$}
        onChange={setPriceRangeFilter('$$$')}
      />
      <Checkbox
        label="$$$$"
        checked={priceRange.$$$$}
        onChange={setPriceRangeFilter('$$$$')}
      />
    </PriceRangeFields>
    <Button onClick={resetAll}>Clear</Button>
  </FilterRow>
);

export default Filters;
