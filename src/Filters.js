import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
`;

const PriceRangeFields = styled.span`
  margin: 0 20px;
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
