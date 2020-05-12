import React from "react";
import ContentLoader from "react-content-loader";

function Placeholder(){
  return (<ContentLoader 
    speed={3}
    width={384}
    height={495.4}
    viewBox="0 0 384 495.4"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="0" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>)
}

export default Placeholder;