import React from "react";
import { Link } from "react-router-dom";


const QuizResult = ({ currentScore, character }) => {
    const { name, homeworld } = character;

    const handleFinalResult = () => {
        if (currentScore >= 50) {
            return (
                <div>
                    <div className="give-padding">
                        <h1>The Match Is With You!</h1>
                    </div>

                    <div className="give-padding">
                        <h2>Please Contact Your Match at:</h2>
                    </div>

                    <div className="give-padding">
                        <h1>{name.replace(/[- ]/g, "_")}@{homeworld}.com</h1>
                    </div>
                </div>

            )
        } else if (currentScore < 50) {
            return (
                <div>
                    <div className="give-padding">
                        <h2>Practice Makes Perfect, My Young Padawan...</h2>
                    </div>

                    <div className="give-padding">
                        <h2>Try Again You Must.</h2>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="third2">
                        <h1>
                            The Master
                        </h1>
                    </div>

                    <div className="third">
                        <Link to="/preferences">
                            <img src="logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="third2">
                        <h1>
                            Of Love
                        </h1>
                    </div>
                </div>

                <div className="content">
                    <div className="textbox">
                        <div className="give-padding">
                            <h2>Score: {currentScore}</h2><br></br>
                        </div>

                        <div className="give-padding">
                            {handleFinalResult()}
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <Link to="/">
                        <button className="button">
                            Try Again ❤️
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default QuizResult;