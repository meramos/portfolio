import React, { PureComponent } from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'

export default class Resume extends PureComponent {

    render(){
        return (

            <Container style={{marginBottom:'70px'}}>

                <Row>

                    <Col style={{color: 'white'}}>
                    {/* Work Experience */}
                        <h2>Work Experience</h2>
                        <h3>Data Scientist</h3> 
                        <a href="https://www.wovenware.com/"><b><i>Wovenware</i></b></a>
                        <ul>
                            <li>Designed and developed a chatbot for a client using Azure Bot Framework and NodeJS, to reduce phone calls to client</li>
                            <li>Adapted ReactJS web app by incorporating API that performs object detection, so to showcase AI services</li>
                            <li>Created object detection models using different architectures so to locate objects in satellite images</li>
                            <li>Analyzed datasets by creating visualizations and verifying inconsistencies in order to achieve best results</li>
                            <li>Composed reports on object detection models' data and scores in order to communicate results to client</li>
                        </ul>
                        <h3>Software Engineer & Data Scientist</h3>
                        <a href="https://www.agordia.com/"><b><i>Agordia</i></b></a>
                        <ul>
                            <li>Developed frontend functionality in React Native for native phone app</li>
                            <li>Programmed backend functionality using NodeJS and MongoDB for web and phone app</li>
                            <li>Designed database structure for SQL and noSQL in which to efficiently store app data</li>
                            <li>Processed open-source data sets using Python in order to extract relevant insights</li>
                            <li>Cleaned free-form data using regular expressions and text mining techniques so to create structured data</li>
                        </ul>
                    </Col>
                    
                    <Col style={{color: 'white'}}>

                        {/* Education */}
                        <h2>Education</h2>
                        <p>MS in Computer Science</p>
                        <p>- University of Kentucky</p>
                        <p>BS in Computer Science</p>
                        <p>- University of Puerto Rico, Rio Piedras Campus</p>

                        {/* Skills */}
                        <h2>Skills</h2>
                        <h4>
                            <Badge variant="primary" style={styles.badge}>HTML</Badge> 
                            <Badge variant="primary" style={styles.badge}>CSS</Badge> 
                            <Badge variant="primary" style={styles.badge}>Javascript</Badge>
                            <Badge variant="primary" style={styles.badge}>NodeJS</Badge> 
                            <Badge variant="primary" style={styles.badge}>MySQL</Badge>
                            <Badge variant="primary" style={styles.badge}>MongoDB</Badge> 
                            <Badge variant="primary" style={styles.badge}>ReactJS</Badge>
                            <Badge variant="primary" style={styles.badge}>Azure</Badge> 
                            <Badge variant="primary" style={styles.badge}>Python</Badge> 
                            <Badge variant="primary" style={styles.badge}>Backend</Badge> 
                            <Badge variant="primary" style={styles.badge}>Data Science</Badge>
                        </h4>

                        {/* Projects */}
                        <h2>Projects</h2>
                        <h4>Object Detection of Honeycomb Cells</h4>
                        <ul>
                            <li>Entry for IQ Hackathon</li>
                            <li>Created and object detection model which locates honeycomb cells and identifies their type (empty, with honey), 
                                in order to facilitate the jobs of bee researchers, using Python and Azure Custom Vision AI
                            </li>
                            <li><a href="https://github.com/alejandroarmas/PRhacks/tree/master/mlTool">repository</a></li>
                        </ul>
                        <h4>Skilledmatica</h4>
                        <ul>
                            <li>Entry for EDUCATION GOT HACKED! Hackathon</li>
                            <li>Developed using ReactJS an interactive game for students to practice solving algebraic equations</li>
                            <li><a href="https://github.com/meramos/Skilledmatica">repository</a></li>
                        </ul>

                    </Col>
                
                </Row>

            </Container>

        );
    }

}

const styles = {
    badge: {
      marginRight:'5px'
    }
  };