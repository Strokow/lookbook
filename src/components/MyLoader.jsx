import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={0}
    width={220}
    height={270}
    viewBox="0 0 220 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="32" rx="10" ry="10" width="220" height="155" /> 
    <rect x="0" y="199" rx="5" ry="5" width="220" height="15" />
    <rect x="0" y="222" rx="5" ry="5" width="220" height="15" /> 
    <rect x="0" y="241" rx="5" ry="5" width="220" height="25" /> 
  </ContentLoader>
)

export default MyLoader
