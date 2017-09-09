import React from "react";
import universal from "react-universal-component";

const UniversalComponent = universal(props => import(`./${props.page}`));

const MyComponent = ({ page }) => <UniversalComponent page={page} />;

export default MyComponent;
