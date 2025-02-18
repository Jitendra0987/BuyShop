import { Link, Outlet } from "react-router-dom";
import "../../css/AdminDashboard.css"

const Admin = () => {
    return (
        <div className="maildiv" style={{ paddingTop:"10px", paddingBottom:"10px" }}>
            {/* Sidebar */}
            <div className="sidebar">
                <ul>
                    <li><Link to="productinsert">Product Insert</Link></li>
                    <li><Link to="productupdate">Product Update</Link></li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="menu open">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
