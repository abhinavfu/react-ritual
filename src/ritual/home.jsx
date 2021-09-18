import React, { Component } from 'react';
import './home.css';
import Header from './header';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import ImpLinks from './links';
import Footer from './footer';

class Homepage extends Component {
    constructor(){
        super()
    }
    render() { 
      
        return ( 
            <div>
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <ImpLinks />
                <Footer />
            </div>
         );
    }
}
 
export default Homepage;