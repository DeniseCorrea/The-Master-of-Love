import React from 'react';
import EachAnswer from './EachAnswer';

const EachQuestion = ({ question, currentStep, handleNextStep, index, computeScore }) => {
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
                    />
                )
            }
            <div>{currentStep + 1}/10</div>
            <button onClick={handleNextStep}>NEXT</button>
        </div>
    )
}


export default EachQuestion;