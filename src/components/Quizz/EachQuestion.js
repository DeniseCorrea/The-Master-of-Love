import React from 'react';
import EachAnswer from './EachAnswer';


const EachQuestion = ({ question, currentStep, index, computeScore, currentScore }) => {

    return (

        <div className={currentStep === index ? "displayed" : "notDisplayed"} >
            <div className="textbox">
                <div className="give-padding">
                    <h2>{currentStep + 1}/10</h2>
                </div>
                <div className="give-padding">
                    <h1>{question.question}</h1>
                </div>
                <div className="give-padding">
                    <h2>Your Score: {currentScore}</h2>
                </div>
            </div>

            <div className="footer">
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
            </div>
        </div>

    );
}


export default EachQuestion;