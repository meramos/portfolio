import React, { PureComponent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import AdSense from 'react-adsense-ad';

import { SocialIcon } from 'react-social-icons';

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './index.css'

import Resume from './containers/Resume';
import Websites from './containers/Websites';
import Animations from './containers/Animations';

class App extends PureComponent{

  // Click Event.
  btnClick(website) {
    window.open(website);
  }

  render(){

    const card_height = '300px';
    const card_width = '300px';

    return (
      <div className="App">

          <div style={{color:'white', textAlign: 'center', marginTop: '20px'}}>
            <h1>
              Maria E. Ramos Morales - Portfolio
            </h1>
            <p style={{margin:'0 auto', width:'50%'}}>
              Software Engineer. BS and MS degrees in Computer Science. Experience with web developing and data science. Has interests in writing tutorials, web developing, and creating animations.
            </p>
            <div style={styles.iconsSpace}>
              <SocialIcon url="https://medium.com/@mariaeramosmorales" style={styles.icon}/>
              <SocialIcon url="https://www.linkedin.com/in/maria-ramos-morales-00194843/" style={styles.icon}/>
              <SocialIcon url="https://github.com/meramos" style={styles.lastIcon}/>
            </div>
          </div>

          <Tabs defaultActiveKey="resume" id="uncontrolled-tab-example" style={styles.tabStyle} >

            <Tab eventKey="resume" title="My Resume" style={{height: '100%', background: 'rgb(0, 25, 49)'}}>

              <Resume />

            </Tab>

            <Tab eventKey="websites" title="Websites" style={{height: '100%', background: 'rgb(0, 25, 49)'}}>

                <Websites 
                  card_height = {card_height} 
                  card_width = {card_width}
                />

            </Tab>

            <Tab eventKey="animations" title="Animations">
              
              <Animations 
                card_height = {card_height} 
                card_width = {card_width}
              />

            </Tab>

            {/* <Tab eventKey="writing" title="Writing">
              LILILI
            </Tab> */}

          </Tabs>
      </div>
    );
    }
}

const styles = {
  icon: {
    height:'40px',
    width:'40px', 
    marginRight:'10px'
  },
  lastIcon: {
    height:'40px',
    width:'40px'
  },
  iconsSpace: {
    backgroundColor:'white', 
    width:'20%', 
    margin:'0 auto', 
    marginTop:'10px', 
    marginBottom: '20px'
  },
  tabStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    // padding: '20px',
  }
};


export default App;
