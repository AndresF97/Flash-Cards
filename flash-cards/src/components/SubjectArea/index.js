import React from "react"
import "./style.css"
import { Container,Row,Col} from "react-bootstrap"


function subjects(){
    return(
        <>
        <Container>
            <div className="text-center">
            <h3 id="subjectText">Subjects To Study</h3>
            <Row>
                <Col>
                    <h4 className="subjects">Science</h4>
                    <div><i className="fas fa-atom fa-4x"></i></div>
                </Col>                
                <Col>
                    <h4 className="subjects">English</h4>
                    <div><i className="fas fa-book-open fa-4x"></i></div>
                </Col>                
                <Col>
                    <h4 className="subjects">Languages</h4>
                    <div><i className="fas fa-atlas fa-4x"></i></div>
                </Col>
                <Col>
                    <h4 className="subjects">Math</h4>
                    <div><i className="fas fa-divide fa-4x"></i></div>
                </Col>
            </Row>
            <Row>
            <Col>
            <div className="cardFront">
                <div className="text-center m-5">
                </div>
            </div>
            </Col>
            <Col>
            <div className="cardBack">

            </div>
            </Col>
            </Row>
            </div>
        </Container>
        </>
    )
}

export default subjects