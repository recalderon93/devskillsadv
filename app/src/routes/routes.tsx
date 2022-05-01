import { Route, Routes } from 'react-router-dom';
import { HomePage, TablePage } from '../pages';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="data_table" element={<TablePage />} />
        </Routes>
    );
}
