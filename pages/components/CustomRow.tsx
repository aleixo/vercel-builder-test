import React from "react";
import styled from "styled-components";

import {Row} from "@edirect/frontend-foundations";
import {RowPropsType} from "@edirect/frontend-foundations/dist/shared/types/row.type";

const StyledRow = styled(Row)`
  width: 100%;
`;

const BuilderRow = (props: RowPropsType & { attributes: Record<string, string> }) => (
  <StyledRow
    {...props.attributes}
    className={`${props.className} ${props.attributes?.className}`}
    fullWidth={props.fullWidth}
  >
    {props.children}
  </StyledRow>
);

export default BuilderRow;
