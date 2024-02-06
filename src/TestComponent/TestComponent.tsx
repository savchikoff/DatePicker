import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: white;
	border: 1px solid black;
	padding: 16px;
	width: 360px;
	text-align: center;
	background-color: black;
	color: white;
`;

const StyledHeading = styled.h1`
font - size: 32px;
`;

const StyledDescription = styled.h2``;

function TestComponent() {
  return (
    <StyledDiv data-testid="test-component">
      <StyledHeading className="heading">Im the test component</StyledHeading>
      <StyledDescription>Made with love by Harvey</StyledDescription>
    </StyledDiv>
  )
}

export default TestComponent;
