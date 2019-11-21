import React from 'react';
import EachAnswer from './EachAnswer';

const EachQuestion = ({ question, currentStep, handleNextStep, index, currentScore }) => {
    return (
        <div className={currentStep === index ? "displayed" : "notDisplayed"} >
            <h2>{question.question}</h2>
            {
                question.answers.map((answer) =>
                    <EachAnswer
                        answer={answer}
                    />
                )
            }
            <div>{currentStep + 1}/10</div>
            <div>Your score:{currentScore}</div>
            <button onClick={handleNextStep}>NEXT</button>
        </div>
    )
}


export default EachQuestion;