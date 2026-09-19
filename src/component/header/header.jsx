import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faMagnifyingGlass,
    faCartShopping
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import "./header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setScrolled(window.scrollY>50);
        };
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>

        <div className="nav-area">
            <div className="fixbar">
                <p>
                    FREE US SHIPING FOR ORDER OVER $50
                </p>
            </div>

             <nav className={scrolled ? "nav-scrolled" : ""}>
                <div className="logo-text">
                    <a href="#">Shop </a>
                    <a href="#">Learn</a>
                    <a href="#">Reviews</a>
                </div>

                <div className="logo-text1">
                    <a href="#">
                        <span>two leaves</span> <br />
                        <span>and a bud</span>
                    </a>
                </div>

                <div className="nav-right">
                    <a href="#">MY ACCOUNT</a>
                    <a href="#">CAFE & WHOLESALE</a>
                    <a href="#">PARTNERS</a>
                    <a href="#">TEA</a>
                    <a href="#">JOURNAL</a>

                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="header-icon"
                    />

                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="search-icon"
                    />
                </div>
            </nav>
            </div>
        </>
    );
}

export default Header;