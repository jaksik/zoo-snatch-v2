import React from "react";
import { Col, Row, Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


function Contact() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <h1 className="text-center">ZooSnatch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <h3 className="initials text-center">ZooSnatch is a passion project inspired by Netflix's BanderSnatch. We love helping you choose your own adventure!</h3>
                        <h3 className="initials text-center">More paths and characters coming soon. Use the form below to reach out to us with questions or comments!</h3>
                    </Col>
                </Row>
                <Row>
                <Col md="6">
                    <form method="post" id="email_form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="subject" class="form-control" id="name" placeholder="Jane Doe" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="text" name="reply_to" class="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div class="form-group">
                            <label for="text_area">Message</label>
                            <textarea name="text" placeholder="I love ZooSnatch!" class="form-control" id="textarea"></textarea>
                        </div>
                        <button type="submit" class="btn btn-danger" id="submit_form" value="Submit">Submit</button>
                    </form>
                    </Col>
                
                    <Col md="6">
                    <label for="creators">CREATORS</label>
                    <a href="https://github.com/asippel129" target="_blank">
                        <p class="creator form-control text-center btn btn-danger">Anna Sippel – Leader Board – www.annasippel.com</p>
                    </a>
                    <a href="https://github.com/Ccolon105" target="_blank">
                        <p class="creator form-control text-center btn btn-danger">Caleb Colon – User Auth – www.calebcolon.com</p>
                    </a>
                    <a href="https://github.com/jaksik" target="_blank">
                        <p class="creator form-control text-center btn btn-danger">Connor Jaksik – Java Script – www.connorjaksik.com</p>
                    </a>
                    <a href="https://github.com/mggude" target="_blank">
                        <p class="creator form-control text-center btn btn-danger">Grace Gude – Style – www.gracegude.com</p>
                    </a>
                    <a href="https://github.com/kDurg" target="_blank">
                        <p class="creator form-control text-center btn btn-danger">Kyle Durigan – Story Creator – www.kyledurigan.com</p>
                    </a>
                    </Col>
                </Row>
                <Row>
                <Col md="12">
                <a href="/game"> <button>Play Game</button></a>

                   
                    <button>Log Out</button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contact;