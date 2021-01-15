import React from 'react';
import { Link } from 'react-router-dom';

function NewItem(props) {
    return (
        <>
            <li className="new__item">
                <Link className = "new__item__link">
                    <figure className="new__item__pic-wrap" data-category={props.label} id={props.id}></figure>
                    <div className="new__item__info">
                        <h5 className="new__item__name">{props.name}</h5>
                        <h5 className="new__item__price">{props.price}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default NewItem
