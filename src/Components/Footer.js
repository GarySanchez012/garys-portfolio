import React from 'react'
import { Card } from 'react-bootstrap'

function Footer() {
    return (
        <Card className="footer">
        <Card.Header>Designed &amp; Built By: </Card.Header>
        <Card.Body>
          <Card.Title>Gary Sanchez, 2021 ®</Card.Title>
          <Card.Text>
            Graduate of the Uconn School of Engineering - Software Engineering Bootcamp Intesive Program
            <br/>
            <a href="https://github.com/GarySanchez012" target="_blank">Github</a>
            {/* nonbreaking space */}
            &nbsp;
            <a href="https://www.linkedin.com/in/gary-sanchez-473959bb/" target="_blank">LinkedIn</a>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Footer
