import React, {Component} from "react"
import Navbar from "../components/Navbar"
import Jumbo from "../components/InfoJumbotron"
import SubjectArea from "../components/SubjectArea"
import Card from "../components/howTo"
import Footer from "../components/footer"


function landing(){
    return (
        <div>
        <Navbar />
        <Jumbo />
        <SubjectArea/>
        <Card />
        <Footer />
      </div>
    )
}
export default landing;