import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
export default () => <Loading>Loading...</Loading>;
