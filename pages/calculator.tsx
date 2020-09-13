import { createUseStyles, jss } from "react-jss";
import clsx from "clsx";
// Option: 1
jss
  .createStyleSheet({
    "@global html,body": {
      fontFamily: '"Poppins", sans-serif',
    },
    "@global *": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#091921",
  },
  calculator: {
    position: "relative",
    display: "grid",
    "& > $value": {
      gridColumn: "span 4",
      height: 100,
      width: "240px",
      textAlign: "right",
      backgroundColor: "#FFF",
      padding: 10,
      fontSize: 18,
    },
    "& > span": {
      cursor: "pointer",
      display: "grid",
      width: 60,
      height: 60,
      color: "#FFF",
      background: "#0c2835",
      placeItems: "center",
      border: "1px solid rgba(0,0,0,0.1)",
      "&$clear": {
        gridColumn: "span 2",
        width: 120,
        background: "#FF3077",
      },
      "&$plus": {
        gridRow: "span 2",
        height: 120,
      },
      "&$equal": {
        background: "#03b1ff",
      },
    },
    "& > span:active": {
      background: "#74ff3b",
      color: "#111",
    },
  },
  value: {},
  num: {},
  clear: {},
  plus: {},
  equal: {},
});
export const StickyElementsPage = () => {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <div className={classes.calculator}>
        <span className={classes.value} />
        <span className={clsx(classes.num, classes.clear)}>C</span>
        <span className={classes.num}>/</span>
        <span className={classes.num}>*</span>
        <span className={classes.num}>7</span>
        <span className={classes.num}>8</span>
        <span className={classes.num}>9</span>
        <span className={classes.num}>-</span>
        <span className={classes.num}>4</span>
        <span className={classes.num}>5</span>
        <span className={classes.num}>6</span>
        <span className={clsx(classes.num, classes.plus)}>+</span>
        <span className={classes.num}>3</span>
        <span className={classes.num}>2</span>
        <span className={classes.num}>1</span>
        <span className={classes.num}>0</span>
        <span className={classes.num}>00</span>
        <span className={classes.num}>.</span>
        <span className={clsx(classes.num, classes.equal)}>=</span>
      </div>
    </div>
  );
};
export default StickyElementsPage;
