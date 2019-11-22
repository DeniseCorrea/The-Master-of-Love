import React from 'react';
import EachAnswer from './EachAnswer';


const EachQuestion = ({ question, currentStep, index, computeScore, currentScore, handleNextStep, getClassName }) => {

    return (
        <>
        <div className={currentStep === index ? "displayed" : "notDisplayed"} >
            <div className="textbox">
                <h2>{currentStep + 1}/10</h2><br></br>
                <h1>{question.question}</h1><br></br>
                
                
                <h2>Your Score: {currentScore}</h2><br></br>
            </div>
        
                <div className="footer">
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
                </div>
        </div> 
        </>
    );
}


export default EachQuestion;