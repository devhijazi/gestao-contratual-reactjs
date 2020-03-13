import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SpinnerComponent = ({ children, ...props }) => (
  <Container>
    {children}
    <SpinnerContainer {...props} />
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top: 3px solid #6547b8;
  border-left: 3px solid #6547b8;
  animation: spinner 1s linear infinite;
  ${props =>
    props.size &&
    css`
      width: ${props.size};
      height: ${props.size};
    `}
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

SpinnerComponent.propTypes = {
  children: PropTypes.element,
};

SpinnerComponent.defaultProps = {
  children: null,
};

export default SpinnerComponent;