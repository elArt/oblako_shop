import React from "react";
import styles from "./Header.module.css";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

class Header extends React.Component {
  // state = {
  //   current: "mail",
  // };

  // handleClick = (e) => {
  //   console.log("click ", e);
  //   this.setState({ current: e.key });
  // };

  render() {
    // const { current } = this.state;
    return (
      <header className={styles.header}>
        <Menu
          onClick={this.handleClick}
          // selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <NavLink to="/shisha" activeClassName={styles.activeLink}>
              Табак
            </NavLink>
          </Menu.Item>
          <Menu.Item key="app">
            <NavLink to="/hookah" activeClassName={styles.activeLink}>
              Кальяны
            </NavLink>
          </Menu.Item>
          <SubMenu title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </header>
    );
  }
}

export default Header;
