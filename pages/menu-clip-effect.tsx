import { createUseStyles } from "react-jss";
import React from "react";
const useClasses = createUseStyles({
  "@global *": {
    margin: 0,
    padding: 0,
  },
  root: {
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    "& > ul": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      "& > li": {
        listStyle: "none",
        "&:hover ~ $cursor": {
          transform: "scale(6)",
        },
        "& > a": {
          position: "relative",
          display: "inline-block",
          margin: "10px 0",
          fontSize: "4rem",
          textDecoration: "none",
          color: "#FFF",
        },
      },
    },
    "& $cursor": {
      display: "block",
      position: "fixed",
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#FFF",
      transform: "translate(-50%,-50%)",
      cursor: "none",
      pointerEvents: "none",
      mixBlendMode: "difference",
    },
  },
  cursor: {},
});
export const StickyElementsPage = () => {
  const classes = useClasses();
  const _cursor = React.useRef<HTMLSpanElement>();
  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      _cursor?.current?.style.setProperty("top", `${e.pageY}px`);
      _cursor?.current?.style.setProperty("left", `${e.pageX}px`);
    });
  }, [_cursor]);
  return (
    <div className={classes.root}>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <span className={classes.cursor} ref={_cursor}></span>
      </ul>
    </div>
  );
};
export default StickyElementsPage;
