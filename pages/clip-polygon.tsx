import { createUseStyles, jss } from "react-jss";
// Option: 1
jss
  .createStyleSheet({
    "@global html, body": {
      fontFamily: '"Poppins", sans-serif',
      margin: 0,
      padding: 0,
    },
  })
  .attach();
jss
  .createStyleSheet({
    "@font-face": {
      fontFamily: "Poppins",
      src: `url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap)`,
    },
  })
  .attach();
const useClasses = createUseStyles({
  root: {
    "& section": {
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(45deg, #eb2feb, #c5b0c7)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    "& section::before": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: 200,
      background: "#FFF",
      display: "block",
      clipPath: "polygon(100% 0,100% 100%,0 100%)",
    },
  },
  content: {
    position: "relative",
    maxWidth: 800,
    color: "#FFF",
    "& > h4": {
      fontSize: "2.0em",
    },
    "& > p": {
      fontSize: "1.2em",
    },
  },
});
export const StickyElementsPage = () => {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <section>
        <div className={classes.content}>
          <h4>Javascript</h4>
          <p>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions. While it
            is most well-known as the scripting language for Web pages, many
            non-browser environments also use it, such as Node.js, Apache
            CouchDB and Adobe Acrobat.
          </p>
        </div>
      </section>
    </div>
  );
};
export default StickyElementsPage;
