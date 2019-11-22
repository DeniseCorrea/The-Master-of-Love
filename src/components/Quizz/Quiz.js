import React, { useState } from "react";
import questions from './questions';
import EachQuestion from './EachQuestion';
import QuizResult from './QuizResult';
import { Link, } from "react-router-dom";


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
            <div className="container">
    <div className="header">
    <div className="third2"><h1>
    The Master
    </h1></div>

    <div className="third"><Link to="/preferences">
      <img src="logo.png" alt="logo"></img></Link>
    </div>

    <div className="third2"> <h1>
    Of Love
    </h1></div>
  </div>
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
                </div>
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