import React, { HTMLAttributes } from "react";
import NavBar from "./NavBar";
import styles from "./Layout.module.scss";
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}
export const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main className={styles.main} {...rest}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
