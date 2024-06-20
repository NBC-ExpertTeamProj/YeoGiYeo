import { ProgressBarContainer, StepCircle } from '../../styles/SurveyPageStyles/surveyStyle';

function ProgressBar({ step }) {
  return (
    <div>
      <ProgressBarContainer>
        {[0, 1, 2].map((item) => (
          <StepCircle key={item} $active={step === item}>
            {item + 1}
          </StepCircle>
        ))}
      </ProgressBarContainer>
    </div>
  );
}

export default ProgressBar;
