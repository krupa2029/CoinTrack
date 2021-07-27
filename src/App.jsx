import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Route exact path="/" component={CoinSummaryPage} />
            </BrowserRouter>
        </div>
    )
};

export default App;