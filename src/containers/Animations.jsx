import React, { PureComponent } from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import Card from '../components/Card';

import foxNgrapes from '../assets/animations/foxNgrapes.mp4'
import hello from '../assets/animations/hello.mp4'
import winking_chibi from '../assets/animations/winking_chibi.mp4'
import girl from '../assets/animations/girl.mp4'

export default class Websites extends PureComponent {

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
                <Card 
                    content = {
                        <video width={card_width} height={card_height} autoPlay="autoplay" loop muted controls>
                            <source src={winking_chibi} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    } 
                />
                </Col>
                <Col>
                <Card 
                    content = {
                    <div>
                        <video width={card_width} height={card_height} autoPlay="autoplay" loop muted controls>
                        <source src={hello} type="video/mp4"/>
                        Your browser does not support the video tag.
                        </video>
                    </div>
                    } 
                />
                </Col>
                <Col>
                <Card 
                    content = {
                    <div>
                        <video width={card_width} height={card_height} autoPlay="autoplay" loop muted controls>
                        <source src={foxNgrapes} type="video/mp4"/>
                        Your browser does not support the video tag.
                        </video>
                    </div>
                    } 
                />
                </Col>
            </Row>
            <Row style={{marginTop:'50px'}}>
                <Col>
                <Card 
                    content = {
                    <div>
                        <video width={card_width} height={card_height} autoPlay="autoplay" loop muted controls>
                        <source src={girl} type="video/mp4"/>
                        Your browser does not support the video tag.
                        </video>
                    </div>
                    } 
                />
                </Col>
            </Row>
        </Container>
    );
    }
}