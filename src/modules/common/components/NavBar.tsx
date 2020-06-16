import React from "react";
import styles from "./NavBar.module.scss";
export interface NavBarProps {}
const menus = [
  { _key: "home", value: "Home" },
  { _key: "posts", value: "Posts" },
  { _key: "articles", value: "Articles" },
];
export const NavBar = () => {
  const [currentPageIndex] = React.useState<number>(0);
  const [activeIndex, setActiveIndex] = React.useState<number>(
    currentPageIndex
  );
  React.useEffect(() => {
    const activeElement: HTMLElement = document.querySelector(
      `.${styles["menu-list"]} li.active`
    );
    const indicatorElement: HTMLElement = document.querySelector(
      `.${styles.indicator}`
    );
    if (activeElement && indicatorElement) {
      indicatorElement.style.left = activeElement.offsetLeft + "px";
      indicatorElement.style.width = activeElement.offsetWidth + "px";
    }
  }, [activeIndex]);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          LOGO
        </a>
        <ul className={styles["menu-list"]}>
          <div className={styles.indicator}></div>
          {menus.map((menu, index) => (
            <li
              key={menu._key}
              className={`${index === activeIndex ? "active" : ""}`}
              onMouseEnter={() => {
                setActiveIndex(index);
              }}
              onMouseLeave={() => {
                setActiveIndex(currentPageIndex);
              }}
            >
              <a href="#">{menu.value}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
