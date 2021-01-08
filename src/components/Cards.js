import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these collections!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="./images/img-9.jpg"
                            text="Add crochet items to your home decor"
                            label='Home decor'
                            path='/new'
                        />
                        <CardItem 
                            src="amigurumi.jpg"
                            text="Shop amigurumi"
                            label='Amigurumi'
                            path='/new'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Upgrade your closet with crocheted clothings"
                            label='Clothes'
                            path='/new'
                        />
                        <CardItem 
                            src="images/img-2.jpg"
                            text=""
                            label='Gifts'
                            path='/new'
                        />
                        <CardItem 
                            
                            text="Buy knitting and yarn supplies"
                            label='Supplies'
                            path='/new'
                            src="./images/supplies.jpg"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
