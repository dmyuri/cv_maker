import '../styles/StepProgress.css';

interface Step {
  title: string;
  icon: React.ReactNode;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number;
}

export default function StepProgress({ steps, currentStep }: StepProgressProps) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="step">
            {index !== 0 && (
              <div className={`line ${isCompleted ? 'line-complete' : ''}`} />
            )}
            <div className={`circle ${isActive ? 'active' : isCompleted ? 'complete' : ''}`}>
              {index + 1}
            </div>
            <div className={`step-icon ${isActive ? 'active' : ''}`}>
              {step.icon}
            </div>
            <div className={`label ${isActive ? 'active' : ''}`}>
              {step.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
