import React from 'react';

const EachAnswer = ( {answer, computeScore, question} ) => {
    return (
        <div>
            <button onClick={() => computeScore(answer, question)}>{answer}</button>
        </div>

    ) 
}

export default EachAnswer;