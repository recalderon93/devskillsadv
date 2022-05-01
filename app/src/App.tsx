import { BrowserRouter } from 'react-router-dom';
import './App.css';
import StoreContextProvider from './store/StoreContext';
import AppRoutes from './routes/routes';

function App() {
    return (
        <StoreContextProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </StoreContextProvider>
    );
}

export default App;
