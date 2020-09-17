import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
const useClasses = ({ size }: { size: number }) =>
  createUseStyles({
    root: {
      display: "inline-block",
      width: size,
      height: size,
      fill: "currentColor",
    },
  });
export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}
const SVG_BOX = 24;
const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (
    {
      viewBox = `0 0 ${SVG_BOX} ${SVG_BOX}`,
      className,
      children,
      color,
      size = 24,
      ...rest
    },
    ref
  ) => {
    const classes = useClasses({ size })();
    return (
      <svg
        ref={ref}
        viewBox={viewBox}
        className={clsx(classes.root, className)}
        style={{ color: color }} // style.color high level than class name
        {...rest}
      >
        {children}
      </svg>
    );
  }
);
export const createSvgIcon = (path: React.ReactNode) => {
  const Component = (
    { children, ...rest }: SvgIconProps,
    ref: React.Ref<SVGSVGElement>
  ) => (
    <SvgIcon {...rest} ref={ref}>
      {path}
    </SvgIcon>
  );
  return React.memo(React.forwardRef<SVGSVGElement, SvgIconProps>(Component));
};
