import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const NorwayFlag = (props: any) => (
  <SvgIcon
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: "new 0 0 512 512" }}
    {...props}
  >
    <path
      style={{ fill: "#FF4B55" }}
      d="M473.655,423.724H38.345C17.167,423.724,0,406.557,0,385.379V126.621
	c0-21.177,17.167-38.345,38.345-38.345h435.31c21.177,0,38.345,17.167,38.345,38.345V385.38
	C512,406.557,494.833,423.724,473.655,423.724z"
    />
    <polygon
      style={{ fill: "#F5F5F5" }}
      points="512,211.862 229.517,211.862 229.517,88.276 141.241,88.276 141.241,211.862 0,211.862 
	0,300.138 141.241,300.138 141.241,423.724 229.517,423.724 229.517,300.138 512,300.138 "
    />
    <polygon
      style={{ fill: "#41479B" }}
      points="512,229.517 211.862,229.517 211.862,88.276 158.897,88.276 158.897,229.517 0,229.517 
	0,282.483 158.897,282.483 158.897,423.724 211.862,423.724 211.862,282.483 512,282.483 "
    />
  </SvgIcon>
);

export default NorwayFlag;