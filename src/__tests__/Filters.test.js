import React from 'react';
import { mount } from 'enzyme';
import Filters from '../Filters';

describe('Filters', () => {
  it('renders the filter state', () => {
    const priceRange = {
      $: true,
      $$: false,
      $$$: true,
      $$$$: false,
    };
    const filters = mount(
      <Filters
        name="My fav"
        priceRange={priceRange}
        setPriceRangeFilter={() => {}}
      />,
    );
    expect(filters.find({ type: 'text' })).toHaveProp('value', 'My fav');
    const checkboxes = filters.find({ type: 'checkbox' });
    expect(checkboxes.at(0)).toBeChecked();
    expect(checkboxes.at(1)).not.toBeChecked();
    expect(checkboxes.at(2)).toBeChecked();
    expect(checkboxes.at(3)).not.toBeChecked();
  });

  it('can change the filters', () => {
    const setNameFilter = jest.fn();
    const priceRangeSpy = jest.fn();
    const setPriceRangeFilter = range => value => priceRangeSpy(range, value);
    const filters = mount(
      <Filters
        name="My fav"
        priceRange={{}}
        setNameFilter={setNameFilter}
        setPriceRangeFilter={setPriceRangeFilter}
      />,
    );
    filters
      .find({ type: 'text' })
      .simulate('change', { target: { value: 'blargle' } });
    const checkboxes = filters.find({ type: 'checkbox' });
    checkboxes.at(0).simulate('change', { target: { checked: false } });
    checkboxes.at(1).simulate('change', { target: { checked: true } });
    checkboxes.at(2).simulate('change', { target: { checked: false } });
    checkboxes.at(3).simulate('change', { target: { checked: true } });

    expect(setNameFilter).toHaveBeenCalledWith('blargle');
    expect(priceRangeSpy).toHaveBeenCalledWith('$', false);
    expect(priceRangeSpy).toHaveBeenCalledWith('$$', true);
    expect(priceRangeSpy).toHaveBeenCalledWith('$$$', false);
    expect(priceRangeSpy).toHaveBeenCalledWith('$$$$', true);
  });
});
