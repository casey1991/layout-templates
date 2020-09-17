import React from "react";
import { createUseStyles } from "react-jss";
import { Item } from "./Item";
import clsx from "clsx";
const useClasses = createUseStyles({
  root: {
    position: "absolute",
    left: 0,
    top: "100%",
    height: 0,
    backgroundColor: "#FFF",
    borderRadius: 2,
    zIndex: 100,
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "repeat(4,1fr)",
    boxShadow: "0px 0px 25px rgba(0,0,0,0.1)",
    overflowY: "auto",
    transition: "all 0.2s",
    "&$visible": {
      height: "160px",
    },
  },
  visible: {},
});
export interface DatePickerSelectorProps {
  options?: { label: string; value: any }[];
  visible?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  renderFooter?: () => React.ReactNode;
}
export const DatePickerSelector = ({
  visible = false,
  onChange,
  options = [],
  renderFooter,
}: DatePickerSelectorProps) => {
  const classes = useClasses();
  return (
    <div className={clsx(classes.root, { [classes.visible]: visible })}>
      {options.map((item, idx) => (
        <Item key={idx} onClick={() => onChange?.(item?.value)}>
          {item.label}
        </Item>
      ))}
      {renderFooter?.()}
    </div>
  );
};
export default DatePickerSelector;
