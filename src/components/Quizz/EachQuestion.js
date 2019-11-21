import React from 'react';
import EachAnswer from './EachAnswer';


const EachQuestion = ({ question, currentStep, index, computeScore, currentScore, handleNextStep, getClassName }) => {

    return (
        <div className={currentStep === index ? "displayed" : "notDisplayed"} >
            <h2>{question.question}</h2>
            {
                question.answers.map((answer, index) =>
                    <EachAnswer
                        key={index}
                        answer={answer}
                        computeScore={computeScore}
                        question={question}
                        getClassName={getClassName}
                    />
                )
            }
            <div>{currentStep + 1}/10</div>
            <div>Your score:{currentScore}</div>

        </div>
    )
}


export default EachQuestion;