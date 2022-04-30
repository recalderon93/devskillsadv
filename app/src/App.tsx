import React from 'react';
import { Header } from './components';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header title={'Form Challenge'} />
            <Footer />
        </div>
    );
}

export default App;
