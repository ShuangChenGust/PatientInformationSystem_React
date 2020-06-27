import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/style.css'
import { Container, Row, Col, Slide, Slider, Caption } from 'react-materialize';
import M from "materialize-css";

//css
import "./css/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

//images
const first = './assets/patient4.jpg';
const zero ='./assets/patient1.jpg';
const second = './assets/patient2.jpg';
const third = './assets/patient3.jpg';

// const fourth ='./logo192.png';
const fourth ='/assets/background.jpeg';

class Home extends Component{
    componentDidMount(){
        M.AutoInit();
    }

    render(){

        // var styleImage={
        //     width: "700px",
        //     height: "400px"
        // }

        return(
            
            // <div id="wrap" className="">
            //     <br/>
            //     <br/>
            //     <div className="container align-items-center">
                    
            //         <h1>Patient Record Database</h1>
            //         <p>This App uses REST API to Create, Read, Update, Search and Delete User data<br /> UI based on React.</p>
                    
            //         <img className="img-thumbnail" src="./assets/patient1.jpg" alt="filing" style={styleImage}></img> 

            //     </div> 
            // </div>

            <div className="mainWrapper" >
                <Slider className="slider">
                    <Slide image={<img src={zero} alt="Workout"/>}>
                    <Caption>
                        <h3>
                        Welcome to Patient Information System!
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Your portal to search patients profiles.
                        </h5>
                    </Caption>
                    </Slide>
                    <Slide image={<img src={first} alt="Nutrition"/>}>
                    <Caption placement="left">
                        <h3>
                        Gemini Health is focusing on reducing drug costs and pharmacy hassles
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Save Time and Money!
                        </h5>
                    </Caption>
                    </Slide>
                    <Slide image={<img src={second} alt="Water"/>}>
                    <Caption placement="right">
                        <h3 >
                        This APP supports Create, Read, Update, Search and Delete User data
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        East to handle.
                        </h5>
                    </Caption>
                    </Slide>
                    <Slide image={<img src={third} alt="Sleep"/>}>
                    <Caption>
                        <h3>
                        Safe, Efficiency, trustworthy.
                        </h3>
                        <h5 className="light grey-text text-lighten-3">
                        Choose us Gemini Health.
                        </h5>
                    </Caption>
                    </Slide>
                </Slider>

                <Container>
                    <Row className="info">
                        <Col className="s12">
                        <h5>
                            Your healthy is our goals.
                        </h5>
                        <p>
                            Come see how we can use your data to help you achieve your goals!
                        </p>
                        <p className="center-align">Patient Information System team _Shawn</p>
                        </Col>
                    </Row>
                    <Row className="health"> 
                        <Col className="s12">
                        <img src={fourth} alt="Health"/>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Home;