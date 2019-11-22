import React, { useState } from "react";
import questions from './questions';
import EachQuestion from './EachQuestion';
import QuizResult from './QuizResult';


const Quiz = ({ character }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);


    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
    };


    const computeScore = (target, userAnswer, question) => {
        console.log(target)
        if (userAnswer === question.correct) {
            target.style.Color = "green";
            setTimeout(() => {
                target.style.backgroundColor = "white";
                setCurrentScore(currentScore + 10)
                handleNextStep();
            }, 750);
        } else {
            target.style.Color = "red";
            setTimeout(() => {
                target.style.backgroundColor = "white";
                handleNextStep();
            }, currentStep === 9 ? 3000 : 750);
        }
    };



    if (currentStep < questions.length) {
        return (
            <>
                {
                    questions.map((question, index) =>
                        <EachQuestion
                            key={index}
                            question={question}
                            handleNextStep={handleNextStep}
                            currentStep={currentStep}
                            index={index}
                            computeScore={computeScore}
                            currentScore={currentScore}
                        />
                    )
                }
                </>
        )

    } else {
        return (
            <>
                <QuizResult
                    currentScore={currentScore}
                    character={character}
                />

            </>
        )
    }

};


export default Quiz;