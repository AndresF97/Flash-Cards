import React from "react"
import {Row, Col} from "react-bootstrap"

import "./style.css"

function footer(){
     return(
         <>
         <div className="footer">
             <Row>
                 <Col xs={6} md={4}>
                 <h4 style ={{marginTop:"20px"}}>    
                 Flashy-flas Cards
                 </h4>
                 </Col>
             </Row>
         </div>
         </>
     )
}

export default footer;