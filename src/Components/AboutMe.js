import React from 'react'
import { Card } from 'react-bootstrap'

function AboutMe() {
    return (
        <Card className='gary' id="aboutMe">
            <Card.Img variant="top" src="https://garysanchez012.github.io/bloop%20prof%20pic.jpg" rel="Gary" alt="Gary" />
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Hi, my name is Gary Sanchez. I was a math and science tutor for about 10 years before I decided to enroll online in UCONN's Coding Bootcamp after getting my associates in Engineering Science at NCC and my B.S. in Physics at SCSU. I'm hoping to develop my newly developed skills as a JS Engineer. Thank you and stay blessed.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Full Stack Software Engineer</small>
            </Card.Footer>
        </Card>
    )
}

export default AboutMe;
