import React, { useEffect, Suspense, lazy } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    LinearProgress
} from '@material-ui/core';

import Header from './components/Header';

import PrivateRoute from './utils/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
    useEffect(() => {
    });
    return (
        <Router>
            <Route to='/' component={Header} />
            <Suspense fallback={<LinearProgress />}>
                <PrivateRoute path='/' exact > {HomePage} </PrivateRoute>
                <Route path='/login' component={LoginPage} exact />
            </Suspense>
        </Router>
    );
};

export default App;
