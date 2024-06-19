import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin: 20px auto;
`;

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#3498db' : '#e0e0df')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

function ProgressBar({ step }) {
  return (
    <div>
      <ProgressBarContainer>
        {[0, 1, 2].map((item) => (
          <StepCircle key={item} active={step === item}>
            {item + 1}
          </StepCircle>
        ))}
      </ProgressBarContainer>
    </div>
  );
}

export default ProgressBar;
