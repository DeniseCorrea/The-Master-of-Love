import React, { useState } from "react";
import QuizQuestions from './QuizQuestions';
// import QuizResult from './QuizResult';


function Quiz({ character }) {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        // if (currentStep === questions.length - 1) {
        //     history.push('/');
        //     return;
        //   }
        setCurrentStep(currentStep + 1)
    };
    console.log(character);
    return (
        <div>
            <QuizQuestions 
                handleNextStep={handleNextStep}
                currentStep={currentStep}
            />
            {/* <QuizResult /> */}
        </div>

    );

}

export default Quiz;