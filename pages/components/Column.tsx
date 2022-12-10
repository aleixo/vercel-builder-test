import React from 'react';
import styled from "styled-components";
import {Column} from "@edirect/frontend-foundations";
import {ColumnContainerPropsType} from "@edirect/frontend-foundations/dist/shared/types/column.type";

const CustomColumn = styled(Column)`flex: unset;`;

const BuilderColumn = (props: ColumnContainerPropsType & { attributes: Record<string, string> }) => (
    <CustomColumn
      {...props.attributes}
      size={props.size}
      className={props.attributes?.className}
    >
        {props.children}
    </CustomColumn>
);

export default BuilderColumn;
