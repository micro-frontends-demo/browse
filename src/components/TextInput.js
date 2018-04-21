import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'text' })`
  height: 30px;
  font-size: 20px;
  margin-left: 5px;
`;

const Label = styled.label`
  font-size: 25px;
  margin-left: 10px;
`;

const TextInput = ({ label, value, onChange, ...props }) => (
  <Label {...props}>
    {label}
    <Input value={value} onChange={e => onChange(e.target.value)} />
  </Label>
);

export default TextInput;
