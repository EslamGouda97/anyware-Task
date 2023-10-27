import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Sidebar  from "../../Shared/SideBar";
function App() {

    return (
    <>
        <div className="flex flex-row min-h-screen overflow-hidden">
            <Sidebar />
            <div className="w-full">
                <NavBar />
                <Outlet />
            </div>
        </div>
    </>
    );
}

export default App;
