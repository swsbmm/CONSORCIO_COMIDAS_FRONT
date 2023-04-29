import React from "react";
import { Link} from "react-router-dom";
import './NavigationMenu.css'

export function NavegationMenu(){

    return(
        <div>
            <ul className="NavBarMenu">
                
                <Link to={`/domiciles`}>Maria Jose Parrilla</Link>
                <Link to={`/domiciles`}>KFC</Link>
                <Link to={`/domiciles`}>Burger King</Link>
                <Link to={`/domiciles`}>Jeno's Pizza</Link>
                <Link to={`/domiciles`}>El corral</Link>
                <Link to={`/domiciles`}>Dominos Pizza</Link>
            </ul>
        </div>
    );
}