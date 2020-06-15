import NavBar from "./NavBar";

export interface LayoutProps {}
export const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <section style={{ height: "100vh" }}></section>
        <section style={{ height: "100vh" }}></section>
        <section style={{ height: "100vh" }}></section>
      </main>
    </div>
  );
};

export default Layout;
