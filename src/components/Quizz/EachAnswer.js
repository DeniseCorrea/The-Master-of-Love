import React from 'react';

const EachAnswer = ({ answer, computeScore, question}) => {

    return (
        
            <div className="button"
                
                    onClick={(e) => computeScore(e.target, answer, question)}
                >
                    {answer}
            </div>

    )

}

export default EachAnswer;