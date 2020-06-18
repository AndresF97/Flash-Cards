import React from "react"
import {Container,Row,Col,Media} from "react-bootstrap"
import "./style.css"


function howTo(){
    return(
    <>
        <Container className="text-center">
            <Row>
            <Col>
            <h2>Front</h2>
            <div className="flashCard">
                <p className="specialTitle">
                Word/Subject
                </p>
            </div>
            </Col>
            <Col>
            <h2>Back</h2>
            <div className="flashCard">
                Word/More Info
                <hr style={{borderTop:"1px solid red"}}></hr>
                <Media>
                <img
                    width={64}
                    height={64}
                    className="align-self-start ml-3"
                    src="data:image/webp;base64,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"
                    alt="Your Image"
                    />
                <Media.Body>
                        <h5>Definition</h5>
                        <p style = {{fontSize:"15px"}}>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                </Media.Body>
                </Media>
            </div>
            </Col>
            </Row>
            <h2>Or you can use this design:</h2>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <h3>Front and Back</h3>           
                <div className="flashCard">
                Word/More Info
                <hr style={{borderTop:"1px solid red"}}></hr>
                <Media>
                <img
                    width={64}
                    height={64}
                    className="align-self-start ml-3"
                    src="data:image/webp;base64,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"
                    alt="Your Image"
                    />
                <Media.Body>
                        <h5>Definition</h5>
                        <p style = {{fontSize:"15px"}}>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                </Media.Body>
                </Media>
                </div>
                </Col>
            </Row>
            </Container>
         </>
    )
}

export default howTo