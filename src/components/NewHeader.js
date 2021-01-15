import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button'
import './NewHeader.css';

function NewHeader() {
    return (
        <div className='newHead-container'>
            <h1>Check out the new items</h1>
        </div>
    );
}

export default NewHeader
