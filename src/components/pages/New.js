import React from 'react';
import '../../App.css';
import NewProducts from '../NewProducts';
import NewHeader from '../NewHeader';
import Footer from '../Footer';

export default function NewAdd() {
    return (
        <>
            <NewHeader />
            <NewProducts />
            <Footer />
        </>
    );
    //return <h1 className='new-add'>NEWLY ADDED</h1>;
}