export interface NavBarProps {}
import styles from "./NavBar.module.scss";
export const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          LOGO
        </a>
        <ul className={styles["menu-list"]}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
