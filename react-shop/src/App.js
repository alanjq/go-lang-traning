import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoreLayout from './components/StoreLayout';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from "./pages/Home";

export function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<StoreLayout />}>
                <Route index element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
        {/* // Carrito con token de cliente */}
    </BrowserRouter>
}
