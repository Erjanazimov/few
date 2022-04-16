import React from 'react';
import bem from "easy-bem";
import {SearchOutlined} from "@ant-design/icons";
import logo from "../logo/Red_Black_Simple_Modern_Studio_Logo-removebg-preview.png";

const Header = () => {
    const b = bem("header");

    return (
        <div className={b()}>
            <div className={b("header_cinema")}>
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="search">
                    <SearchOutlined style={{color: "white", fontSize: "20px"}}/>
                </div>
            </div>
        </div>
    );
};

export default Header;