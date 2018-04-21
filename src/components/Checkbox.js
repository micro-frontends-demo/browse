import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'checkbox' })`
  margin-left: 5px;
`;

const Label = styled.label`
  font-size: 25px;
  margin-left: 10px;
`;

const Checkbox = ({ label, checked, onChange }) => (
  <Label>
    {label}
    <Input checked={checked} onChange={e => onChange(e.target.checked)} />
  </Label>
);

export default Checkbox;
