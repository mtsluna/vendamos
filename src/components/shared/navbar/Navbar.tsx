import "./Navbar.scss";
import { MdDirectionsCar, MdMenu } from "react-icons/md";

export const Navbar = () => {
    return <div className={"navbar"}>
        <div className={"navbar__title"}>
            <div className={"navbar__title__text"}>
                Vendamos
            </div>
            <div className={"navbar__title__section"}>
                <MdDirectionsCar/>
                Autos
            </div>
        </div>
        <div className={"navbar__menu"}>
            <MdMenu className={"navbar__menu__icon"}/>
        </div>
    </div>
}