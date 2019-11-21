import React from 'react';

const EachAnswer = ( {answer, computeScore, question} ) => {
    
    return (
        <div>
            <div onClick={() => computeScore(answer, question)}>{answer}</div>
        </div>
    ) 
}


export default EachAnswer;