import React from "react";
import { createUseStyles } from "react-jss";
const useClasses = createUseStyles({
  root: {
    padding: "6px 10px",
    textAlign: "center",
    boxSizing: "border-box",
    height: 40,
    fontSize: 14,
    color: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
  },
});
export interface ItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}
export const Item = ({ children, ...rest }: ItemProps) => {
  const classes = useClasses();
  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
};
export default ItemProps;
