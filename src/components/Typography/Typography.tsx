import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
const useClasses = createUseStyles<ITheme>((theme) => ({
  root: {
    ...theme.styles.typography.common,
    margin: 0,
    padding: 0,
    "&$bold": {
      fontWeight: 500,
    },
    // category
    "&$category_h1": {},
    "&$category_h2": {},
    "&$category_h3": {},
    "&$category_h4": {},
    "&$category_h5": {},
    "&$category_h6": {},
    "&$category_subtitle": {},
    "&$category_caption": {},
    "&$category_label": {},
    // status
    "&$status_primary": {
      color: theme.colors.primary,
    },
    "&$status_secondary": {
      color: theme.colors.secondary,
    },
    "&$status_warning": {
      color: theme.colors.warning,
    },
    "&$status_danger": {
      color: theme.colors.danger,
    },
    "&$status_info": {
      color: theme.colors.info,
    },
    "&$status_success": {
      color: theme.colors.success,
    },
    "&$status_hint": {
      color: theme.colors.text_hint,
    },
    "&$status_reverse": {
      color: theme.colors.text_reverse,
    },
    //gutter
    "&$gutter_top": {
      marginTop: theme.dimensions.spacing,
    },
    "&$gutter_bottom": {
      marginBottom: theme.dimensions.spacing,
    },
  },
  bold: {},
  category_h1: {},
  category_h2: {},
  category_h3: {},
  category_h4: {},
  category_h5: {},
  category_h6: {},
  category_subtitle: {},
  category_body: {},
  category_caption: {},
  category_label: {},
  status_primary: {},
  status_secondary: {},
  status_warning: {},
  status_danger: {},
  status_info: {},
  status_success: {},
  status_hint: {},
  status_reverse: {},
  gutter_top: {},
  gutter_bottom: {},
}));
export type TypographyCategory =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body"
  | "caption"
  | "label";

export interface TypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLHeadingElement> {
  category?: TypographyCategory;
  status?:
    | "default"
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "info"
    | "success"
    | "hint"
    | "reverse";
  bold?: boolean;
  style?: CSSProperties;
  gutterTop?: boolean;
  gutterBottom?: boolean;
}
const defaultTagMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle: "h6",
  body: "p",
  caption: "span",
  label: "span",
};
export const Typography = ({
  category = "body",
  status = "default",
  bold = false,
  gutterTop = false,
  gutterBottom = false,
  children,
  onClick,
  className,
  ...rest
}: TypographyProps) => {
  const classes = useClasses();
  const Component: any = defaultTagMapping[category];
  return (
    <Component
      onClick={onClick}
      className={clsx(
        classes.root,
        {
          [classes[`category_${category}`]]: category,
          [classes[`status_${status}`]]: status,
          [classes.bold]: bold,
          [classes.gutter_top]: gutterTop,
          [classes.gutter_bottom]: gutterBottom,
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
