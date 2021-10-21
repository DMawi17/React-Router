import { NavLink } from "react-router-dom";
import "../Home.scss";

const Menu = () => {
    return (
        <div id="Menu">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="twinkie">Twinkie</NavLink>
                <NavLink to="dorinda">Dorinda</NavLink>
                <NavLink to="karen">Karen</NavLink>
                <NavLink to="jacky">Jacky</NavLink>
                <NavLink to="mattie">Mattie</NavLink>
            </nav>
        </div>
    );
};

export default Menu;
