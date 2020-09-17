import React from "react";
import { createUseStyles, jss } from "react-jss";
import { DatePicker } from "../src";
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
  "@global *": {
    margin: 0,
    padding: 0,
  },
  root: {
    position: "relative",
    background: "#000",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export const DatePickerPage = () => {
  const classes = useClasses();
  const [value, setValue] = React.useState(new Date());
  return (
    <div className={classes.root}>
      <DatePicker value={value} onChange={(value) => setValue(value)} />
    </div>
  );
};
export default DatePickerPage;
