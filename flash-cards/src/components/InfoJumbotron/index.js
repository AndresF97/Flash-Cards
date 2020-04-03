import React from "react"
import { Jumbotron } from "react-bootstrap"
import "./style.css"


function infoJumbo(){
    return(
        <>
        <Jumbotron className="mainBody">
            <div className="text-center">
                <h1>Flashy Flashcards 📇</h1>
                <h2>Our Goal</h2><br></br>
                <h3>
                We in FFC aim to to help students learn and memorize vocabulary words with either memory games or just normal
                memorizing flashcards.  You can create your own cards and use a text to speech to help you memorize and 
                pronunciate what you would like to learn and we can keep track of your progress through a dashboard.
                </h3>
            </div>
        </Jumbotron>
        </>
    )
}

export default infoJumbo