import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>ADD A TOUCH OF YARN</h1>
            <p>Buy various crochet products </p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Link to ="/new"><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    NEW COLLECTION
                </Button></Link> 
            </div>
        </div>
    );
}

export default HeroSection
