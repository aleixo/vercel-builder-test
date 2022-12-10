import {Component, ReactNode} from "react";
import styled from "styled-components";

const CenterContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Center = ({ children, className, attributes }:{ children?: ReactNode; className?: string; attributes: Record<string, string> }) => (
  <CenterContainer
    {...attributes}
    className={`${attributes?.className} ${className}`}
  >
    {children}
  </CenterContainer>
);

export default Center;
