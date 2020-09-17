import React from "react";
import { createUseStyles } from "react-jss";
import DatePickerSelector from "./Selector";
import { CornerIcon } from "./corner";
import clsx from "clsx";
const useClasses = createUseStyles({
  root: {
    backgroundColor: "#CA5656",
    padding: 20,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  current: {
    color: "#FFF",
    fontSize: 46,
    "& p": {
      fontSize: 14,
      marginLeft: 6,
      display: "inline-block",
    },
  },
  selector: {
    "& span": {
      position: "relative",
      color: "#FFF",
      fontSize: 18,
      marginRight: 10,
      display: "inline-flex",
      cursor: "pointer",
    },
  },
  icon_normal: {
    transition: "all 0.5s",
  },
  icon_collapsed: {
    transform: "rotate(180deg) translate(0%,-15%)",
  },
  selector_footer: {
    gridColumn: "1/5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 20px",
    justifyContent: "space-between",
    color: "#999",
    "& svg:nth-child(1)": {
      transform: "rotate(-90deg)",
    },
    "& svg:nth-child(2)": {
      transform: "rotate(90deg)",
    },
  },
});
export interface DatePickerWindowProps {
  value: Date;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
}
export const DatePickerWindow = ({
  value,
  onYearChange,
  onMonthChange,
}: DatePickerWindowProps) => {
  const classes = useClasses();
  const [yearSelectorVisible, setYearSelectorVisible] = React.useState(false);
  const [monthSelectorVisible, setMonthSelectorVisible] = React.useState(false);
  const years = new Array(12)
    .fill("")
    .map((item, idx) => value.getFullYear() + idx);
  return (
    <div className={classes.root}>
      <h4 className={classes.current}>
        {value.getDate()}
        <p>
          {value.getFullYear()}-{value.getMonth() + 1}
        </p>
      </h4>
      <div className={classes.selector}>
        <span
          onClick={() => {
            setYearSelectorVisible(!yearSelectorVisible);
          }}
        >
          {value.getFullYear()}
          <CornerIcon
            className={clsx(classes.icon_normal, {
              [classes.icon_collapsed]: yearSelectorVisible,
            })}
          />
          <DatePickerSelector
            visible={yearSelectorVisible}
            options={years.map((item) => ({ label: item + "", value: item }))}
            value={value.getFullYear()}
            onChange={(value) => onYearChange?.(value)}
            renderFooter={() => (
              <div
                className={classes.selector_footer}
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                }}
              >
                <CornerIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    onYearChange?.(value.getFullYear() - 12);
                  }}
                />
                <CornerIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    onYearChange?.(value.getFullYear() + 12);
                  }}
                />
              </div>
            )}
          />
        </span>
        <span
          onClick={() => {
            setMonthSelectorVisible(!monthSelectorVisible);
          }}
        >
          {value.getMonth() + 1}
          <CornerIcon
            className={clsx(classes.icon_normal, {
              [classes.icon_collapsed]: monthSelectorVisible,
            })}
          />
          <DatePickerSelector
            visible={monthSelectorVisible}
            options={[
              { label: "01", value: 0 },
              { label: "02", value: 1 },
              { label: "03", value: 2 },
              { label: "04", value: 3 },
              { label: "05", value: 4 },
              { label: "06", value: 5 },
              { label: "07", value: 6 },
              { label: "08", value: 7 },
              { label: "09", value: 8 },
              { label: "10", value: 9 },
              { label: "11", value: 10 },
              { label: "12", value: 11 },
            ]}
            value={value.getMonth()}
            onChange={(value) => {
              onMonthChange?.(value);
            }}
          />
        </span>
      </div>
    </div>
  );
};
export default DatePickerWindow;
