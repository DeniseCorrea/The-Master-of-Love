import React from 'react';
import { Link } from "react-router-dom";


const QuizResult = ({ currentScore, character }) => {
    const { name, homeworld } = character;

    const handleFinalResult = () => {
        if (currentScore >= 50) {
            return (
                <div>
                    <h2>The Match is with you!</h2>
                    <p>Please contact your force at:</p>
                    <p>{name.replace(/[- ]/g, "_")}@{homeworld}.com</p>
                    <Link to="/">
                        <button>
                            Or keep looking for another perfect force ❤️
                        </button>
                    </Link>
                </div>
            )
        } else if (currentScore < 50) {
            return (
                <div>
                    <p>Practice makes perfect, my young padawan...</p>
                    <Link to="/">
                        <button>
                            Keep looking for your perfect force ❤️
                        </button>
                    </Link>
                </div>
            )
        }
    }

    return (
        <div>
            <div>Score: {currentScore}</div>
            <div>{handleFinalResult()}</div>
        </div>

    )
}

export default QuizResult;