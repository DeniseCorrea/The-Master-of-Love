import React from 'react';

const EachAnswer = ({ answer, computeScore, question}) => {

    return (
        <div>
            <div
                // className={getClassName(answer, question)}
                onClick={(e) => computeScore(e.target, answer, question)}
            >
                {answer}
            </div>
        </div>
    )
}


export default EachAnswer;