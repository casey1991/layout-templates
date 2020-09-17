import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import DatePickerWindow from "./Window";
import { isSameDay, getFirstDayInMonth, getLastDayInMonth } from "./utils";
const useClasses = createUseStyles({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderRadius: 6,
    overflow: "hidden",
  },
  window: {},
  content: {
    display: "grid",
    gridTemplateColumns: "repeat(7,48px)",
    padding: 8,
    "& > span": {
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
  },
  day: {
    position: "relative",
    color: "#333",
    cursor: "pointer",
    transition: "all 0.5s",
    borderRadius: "50%",
    "&$disabled": {
      color: "#AAA",
      cursor: "auto",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#AAA",
      },
    },
    "&:hover": {
      backgroundColor: "#CA5656",
      color: "#FFF",
      "&::before": {
        backgroundColor: "#FFF",
      },
    },
    "&$today": {
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        width: 6,
        height: 6,
        backgroundColor: "#CA5656",
        borderRadius: "50%",
        bottom: 4,
        left: "50%",
        transform: "translate(-50%,-50%)",
        transition: "all 0.5s",
      },
      "&$selected": {
        " &::before": {
          backgroundColor: "#FFF",
        },
      },
    },
    "&$selected": {
      backgroundColor: "#CA5656",
      color: "#FFF",
    },
  },
  disabled: {},
  today: {},
  selected: {},
});
export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}
export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const classes = useClasses();
  const [_value, setValue] = React.useState<Date>(value || new Date());
  const [month, setMonth] = React.useState(_value.getMonth());
  const [year, setYear] = React.useState(_value.getFullYear());

  const days = getLastDayInMonth(
    _value.getMonth() + 1,
    _value.getFullYear()
  ).getDate();
  const firstDay = getFirstDayInMonth(_value.getMonth(), _value.getFullYear());
  const firstOffset = firstDay.getDay();
  React.useEffect(() => {
    // change start every time when month | year changed
    const date = new Date(_value);
    date.setFullYear(year);
    date.setMonth(month);
    setValue(date);
  }, [month, year]);
  React.useEffect(() => {
    onChange?.(_value);
  }, [_value]);
  return (
    <div className={classes.root}>
      <div className={classes.window}>
        <DatePickerWindow
          value={_value}
          onMonthChange={(month) => setMonth(month)}
          onYearChange={(year) => setYear(year)}
        />
      </div>
      <div className={classes.content}>
        <span>SUN</span>
        <span>MON</span>
        <span>TUE</span>
        <span>TWE</span>
        <span>THU</span>
        <span>FRI</span>
        <span>SAT</span>
        {new Array(days + firstOffset).fill("").map((item, idx) => {
          const offset = idx - firstOffset;
          const startMill = firstDay.getTime() + 24 * 60 * 60 * 1000 * offset;
          const date = new Date(startMill);
          const disabled = firstDay.getMonth() !== date.getMonth();
          const today = isSameDay(new Date(), date);
          const selected = isSameDay(_value, date);
          return (
            <span
              className={clsx(classes.day, {
                [classes.disabled]: disabled,
                [classes.today]: today,
                [classes.selected]: selected,
              })}
              onClick={() => {
                if (disabled) return;
                setValue(date);
              }}
            >
              {date.getDate()}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default DatePicker;
