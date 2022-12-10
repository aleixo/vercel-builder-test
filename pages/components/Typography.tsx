import {Typography} from "@edirect/frontend-foundations";
import {TypographyPropsType} from "@edirect/frontend-foundations/dist/shared/types/typography.type";

const BuilderTypography = (props: TypographyPropsType & { attributes: Record<string, string>; }) => (
  <Typography
    {...props.attributes}
    className={`${props.className} ${props.attributes?.className}`}
    element={props.element}
    type={props.type}
    align={props.align}

  >
    {props.children}
  </Typography>
);

export default BuilderTypography;
