import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function StoreLayout() {
    return <div>
        <Navbar />
        <main className="max-w-6xl m-auto my-4">
            <Outlet />
        </main>
    </div>
}
