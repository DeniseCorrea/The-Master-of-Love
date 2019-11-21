import React from 'react';
import EachAnswer from './EachAnswer';

const EachQuestion = ( {question} ) => {
    return (
        <div>
            <h2>{question.question}</h2>
            {
                question.answers.map((answer) => 
                    <EachAnswer 
                        answer={answer}
                    />
                )
            }
        </div>
    ) 
}


export default EachQuestion;