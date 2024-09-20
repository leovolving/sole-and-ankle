import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

const Flag = ({ variant }) => {
  switch (variant) {
    case "on-sale":
      return <SaleFlag>Sale</SaleFlag>;
    case "new-release":
      return <NewReleaseFlag>Just released!</NewReleaseFlag>;
    default:
      return null;
  }
};

const BaseFlag = styled.span`
  position: absolute;
  color: ${COLORS.white};
  right: -4px;
  top: 8px;
  border-radius: 2px;
  padding: 4px;
  font-weight: ${WEIGHTS.medium};
`;

const SaleFlag = styled(BaseFlag)`
  background: ${COLORS.primary};
`;

const NewReleaseFlag = styled(BaseFlag)`
  background: ${COLORS.secondary};
`;

export default Flag;
