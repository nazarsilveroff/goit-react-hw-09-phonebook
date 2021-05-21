import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoates";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoates from "../../routes/PublicRoates";
import LoaderMain from "../loaders/LoaderMain/LoaderMain";

const Main = ({ auth }) => {
  return (
    <main>
      <Suspense fallback={<LoaderMain />}>
        <Switch>
          {mainRoutes.map((item) =>
            item.private ? (
              <PrivateRoute {...item} key={item.path} auth={auth} />
            ) : (
              <PublicRoates {...item} key={item.path} auth={auth} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};
const mapState = (state) => ({
  auth: state.auth.tokens.idToken,
});
export default connect(mapState)(Main);
