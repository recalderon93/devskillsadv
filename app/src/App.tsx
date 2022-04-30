import React from 'react';
import { Header } from './components';
import './App.css';
import Footer from './components/Footer/Footer';
import Button from './components/button/Button';

function App() {
    return (
        <div className="App">
            <Header title={'Form Challenge'} />
            <Button title="Click Me" width={150} height={44} onClick={() => {}} />
            <Footer />
        </div>
    );
}

export default App;
