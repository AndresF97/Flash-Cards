import React from "react"
import {Container,Row,Col} from "react-bootstrap"
import "./style.css"


function howTo(){
    return(
    <>
        <Container className="text-center">
            <Row>
            <Col>
            <h2>Front</h2>
            <div className="flashCard">
                heleleodjsadjksaljkaj
                <hr style={{borderTop:"1px solid red"}}></hr>
                
            </div>
            </Col>
            <Col>
            <h2>Back</h2>
            <div className="flashCard">
                heleleodjsadjksaljkaj
                
            </div>
            </Col>
            </Row>
            <h2>Or you can use this design:</h2>
            <Row className="text-center">
                <Col>
                <h3>Front and Back</h3>           
                <div className="flashCard">
                heleleodjsadjksaljkaj
                <hr style={{borderTop:"1px solid red"}}></hr>
                <p>

                </p>
                </div>
                </Col>
            </Row>
            </Container>
         </>
    )
}

export default howTo