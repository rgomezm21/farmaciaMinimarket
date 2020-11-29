import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Breadcrumbs } from '../layouts/Breadcrumbs/Breadcrumbs';
import { Footer } from '../layouts/Footer/Footer';
import { Navbar } from '../layouts/Navbar/Navbar';
import { Sidebar }  from '../layouts/Sidebar/Sidebar';

export const MinimarketRouter = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Footer />
            <div className='main-wrapper'>
                <Breadcrumbs />
            </div>
        </div>
    )
}
