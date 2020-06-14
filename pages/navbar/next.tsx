import React from "react";
export const SketchBavbar = () => {
  return (
    <div>
      <div className="banner"></div>
      <header></header>
      <main>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <style jsx global>
        {`
          *,
          *::before,
          *::after {
            padding: 0;
            margin: 0;
          }
          .banner {
            height: 50px;
            background-color: #111;
          }
          header {
            position: sticky;
            top: 0;
            height: 80px;
            border-bottom: 1px solid #eaeaea;
          }
          main section {
            height: 100vh;
          }
        `}
      </style>
    </div>
  );
};
export default SketchBavbar;
