import styled from 'styled-components';

const Button = styled.button.attrs({ type: 'button' })`
  height: 30px;
  width: 100px;
  font-size: 20px;
  background-color: #e79652;
  color: #2b2318;
  border-radius: 2px;
  border: none;
  &:hover {
    background-color: #dbda9a;
  }
  &:active {
    background-color: #f1d736;
  }
`;

export default Button;
