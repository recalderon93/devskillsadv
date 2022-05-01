import React from 'react';
import { Footer, Header, AddPersonForm } from '../components';

export default function HomePage() {
    return (
        <div className="app">
            <Header title="Form Challenge" />
            <AddPersonForm />
            <Footer />
        </div>
    );
}
