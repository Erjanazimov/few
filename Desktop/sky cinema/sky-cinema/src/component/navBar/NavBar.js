import React, { useState} from 'react';
import { Menu } from 'antd';
import bem from "easy-bem";
import {useHistory} from "react-router-dom";


const NavBar = () => {
    const b = bem("navBar")
    const [current, setCurrent] = useState("/");
    const {push} = useHistory();
    const handleClick = e => {
        setCurrent(e.key);
        if (e.key !== "/")
        push(e.key);
    };
    return (
        <div className={b()}>
            <div className={b("container_navbar")}>
            <Menu style={{backgroundColor: "#12041e", color: "#8c8493", fontSize: "16px", borderBottom: "white"}} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="/">
                    <a href="/">
                        Рекомендации
                    </a>

                </Menu.Item>
                <Menu.Item key="/new">
                    Новинки
                </Menu.Item>
                <Menu.Item key="/catalog">
                    Каталог
                </Menu.Item>
                <Menu.Item key="/picks">
                    Подборки
                </Menu.Item>
            </Menu>
            </div>
        </div>
    );
};

export default NavBar;