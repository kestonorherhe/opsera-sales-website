import React from "react";
import { publicRoutes } from "./routes";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import NonAuthLayout from "./components/NonAuthLayout";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            key={idx}
            // exact={true}
          />
        ))}
      </Routes>
    </React.Fragment>
  );
}

App.propTypes = {
  layout: PropTypes.any,
};

export default App;
