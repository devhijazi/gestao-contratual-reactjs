import React from 'react';
import styled from 'styled-components';

import Spinner from './Spinner';

const LoadingComponent = () => (
  <LoadingContainer>
    <Spinner />
  </LoadingContainer>
);

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default LoadingComponent;