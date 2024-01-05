import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoreLayout from './components/StoreLayout';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from "./pages/HomePage";
import ProductDetailPage from './pages/ProductDetailPage';

export function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<StoreLayout />}>
                <Route index element={<HomePage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="product/:url" element={<ProductDetailPage />} />
            </Route>
        </Routes>
        {/* // Carrito con token de cliente */}
    </BrowserRouter>
}
