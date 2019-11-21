import React, { useState, useEffect } from "react";
import questions from './questions';
import EachQuestion from './EachQuestion';
import QuizResult from './QuizResult';


const Quiz = ({ character }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        // if (currentStep === questions.length - 1) {
        //     history.push('/');
        //     return;
        //   }
        setCurrentStep(currentStep + 1)
    };


    const [currentScore, setCurrentScore] = useState(0);

    const computeScore = (userAnswer, question) => {
        if (userAnswer === question.correct) {
            setCurrentScore(currentScore + 10)
        }
    };


    useEffect(() => {
        for (let i = 0; i < questions.length; i++) {
            const randomIdx = Math.floor(Math.random() * questions.length) % 10;
            [questions[i], questions[randomIdx]] = [questions[randomIdx], questions[i]];
        }
    }, [])


    return (
        <div>
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

            <QuizResult
                currentScore={currentScore}
                character={character}
            />
        </div>

    );

};

export default Quiz;