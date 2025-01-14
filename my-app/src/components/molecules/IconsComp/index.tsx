import React from "react";
import Icon from "../../atoms/Icon";
import styled from "@emotion/styled";
import { iconsData } from "../../../utils/constants/index";
import { Box } from "@mui/material";
const IconCompStyle=styled(Box)`
display:flex;
justify-content:space-between;
width:144px;
`;
const IconComp: React.FC = () => {
  return (
    <IconCompStyle>
      {iconsData.map((icon, index) => (
        <Icon key={index} src={icon.src} alt={icon.alt}/>
      ))}
    </IconCompStyle>
  );
};
export default IconComp;
