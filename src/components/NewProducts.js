import React from 'react';
import { Link } from 'react-router-dom';
import NewItem from './NewItem';
import './NewProducts.css';

function newProducts() {
    return (
        <div className='new'>
            <div className="new__container">
                <NewItem 
                    name="Christmas Stocking"
                    label='Seasonal'
                    price='$9.99'
                    id="n1"
                />
                <NewItem 
                    name="Christmas Stocking"
                    label='Seasonal'
                    price='$9.99'
                    id="n2"
                />
                <NewItem 
                    name="Snowflake"
                    label='Seasonal'
                    price='$5.99'
                    id="n3"
                />
                <NewItem 
                    name="Snowman - Red"
                    label='Amigurumi'
                    price='$15.99'
                    id="n4"
                />
                <NewItem 
                    name="Snowman - Green"
                    label='Amigurumi'
                    price='$15.99'
                    id="n5"
                />
                <NewItem 
                    name="Whale"
                    label='Amigurumi'
                    price='$12.99'
                    id="n6"
                />      
                  
            </div>
        </div>
    )
}

export default newProducts