import dynamic from "next/dynamic";
import styled from 'styled-components';

import {FlowCardProps} from "@bit/bolttech.components.common.flow-card/components/common/flow-card/flow-card.type";
const FlowCard = dynamic(() => import('@bit/bolttech.components.common.flow-card'));

const FlowCardWrap = styled.div`
  /* To do: Remove from component library */
  & > section {
    max-width: 100%;
    flex: unset;
    width: 100%;
  }
`;

const FlowCardCustom = (props: FlowCardProps & { attributes: Record<string, string> }) => {
  return (
    <FlowCardWrap>
      <FlowCard {...props} />
    </FlowCardWrap>
  );
}


export default FlowCardCustom;
