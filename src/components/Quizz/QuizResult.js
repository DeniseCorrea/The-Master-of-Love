import React from "react";
import { Link } from "react-router-dom";


const QuizResult = ({ currentScore, character }) => {
    const { name, homeworld } = character;

    const handleFinalResult = () => {
        if (currentScore >= 50) {
            return (
                <>
                    <h1>The Match Is With You!</h1><br></br>
                    <h2>Please Contact Your Match @</h2><br></br>
                    <i><h1>{name.replace(/[- ]/g, "_")}@{homeworld}.com</h1></i>
                    </>
            )
        } else if (currentScore < 50) {
            return (
                    <>
                    <h2>Practice Makes Perfect, My Young Padawan...</h2><br></br>
                    <h2>Try Again You Must.</h2>
               </>
            )
        }
    }

    return (
        <>
        <div className="content">
            <div className="textbox">
            <h2>Score: {currentScore}</h2><br></br>
            {handleFinalResult()}
            </div>
        </div>
        <div className="footer">
                <Link to="/">
                <button className ="button">
                Try Again
                </button>
                </Link>
        </div>
        </>
    )
}

export default QuizResult;