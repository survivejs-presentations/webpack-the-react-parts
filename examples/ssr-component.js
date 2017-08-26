import React from "react";
import universal from "react-universal-component";
import { connect } from "react-redux";

const UniversalComponent = universal(props => import(`./${props.page}`));

const MyComponent = ({ page }) =>
  <div>
    <UniversalComponent page={page} />
  </div>;

export default connect(({ page }) => ({ page }))(MyComponent);
