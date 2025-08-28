import React from "react";
import PropTypes from "prop-types";
import withRouter from "./Common/withRouter";
import Footer from "./Footer";
import Header from "./Header";

const NonAuthLayout = (props) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(NonAuthLayout);
