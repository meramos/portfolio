import React, { PureComponent } from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import CardFlip from '../components/CardFlip';

// import skilledmatica_preview from '../assets/skilledmatica_preview.png'
import skilledmatica_preview from '../assets/video/skilledmatica_preview.mp4'
import parallax_preview from '../assets/video/parallax_preview.mp4'

export default class Websites extends PureComponent {

  btnClick(website) {
    window.open(website);
  }

  constructor(props) {
    super(props);

    this.state = {};
  }
 
  render() {

    const { card_height, card_width } = this.props;

    return (
      <Container>

        <Row>
          <Col>

            <CardFlip
              front = {
                // <img src={skilledmatica_preview} alt="Skilledmatica" style={{width: card_width, height: card_height}}/>
                <video width={card_width} height={card_height} autoPlay="autoplay" loop muted controls>
                  <source src={skilledmatica_preview} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              } 
              back = {
                <div style={{marginTop: '50px'}}>
                  <h1>Skilledmatica</h1>
                  <p>Entry for EDUCATION GOT HACKED! hackathon. Developed using ReactJS. 
                    An interactive game for students to practice solving algebraic equations.</p>
                  <Button onClick={this.btnClick.bind(this,'http://skilledmatica.appspot.com/')}>View Site</Button>
                </div>
              }
            />

          </Col>
          
          <Col>
            <CardFlip 
              front = {
                <video width={card_width} height={card_height} autoPlay="autoplay" loop muted controls>
                  <source src={parallax_preview} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              } 
              back = {
                <div style={{marginTop: '50px'}}>
                  <h1>Parallax</h1>
                  <p>Two page website, one introductory page and one content page. Content page has parallax scroll and cutout text.
                    Developed with ReactJS.
                  </p>
                  <Button onClick={this.btnClick.bind(this,'http://reactapp2-264403.appspot.com/')}>View Site</Button>
                </div>
              }
            />
          </Col>

          <Col>
            <CardFlip 
              front = {
                <div>FRONT PLACE HOLDER</div>
              } 
              back = {
                <div>BACK PLACE HOLDER</div>
              }
            />
          </Col>
        </Row>

      </Container>
    );
  }
}
