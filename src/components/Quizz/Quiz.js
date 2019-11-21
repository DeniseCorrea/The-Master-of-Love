import React, { useState } from "react";
import QuizQuestions from './QuizQuestions';
// import QuizResult from './QuizResult';


const Quiz = ({character}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        // if (currentStep === questions.length - 1) {
        //     history.push('/');
        //     return;
        //   }
        setCurrentStep(currentStep + 1)
    };

    return (
        <div>
            <QuizQuestions
                handleNextStep={handleNextStep}
                currentStep={currentStep}
            />
            <QuizResult
                currentScore = {currentScore}
                character={character}
            />

        </div>

    );

}

export default Quiz;