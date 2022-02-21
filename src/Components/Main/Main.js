import React, { Suspense } from "react";
import { Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoates";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoates from "../../routes/PublicRoates";
import { useNav } from "../../utils/hooks/useNav";
import LoaderMain from "../loaders/LoaderMain/LoaderMain";

const Main = () => {
  const { authToken } = useNav();
  return (
    <main>
      <Suspense fallback={<LoaderMain />}>
        <Switch>
          {mainRoutes.map((item) =>
            item.private ? (
              <PrivateRoute {...item} key={item.path} auth={authToken} />
            ) : (
              <PublicRoates {...item} key={item.path} auth={authToken} />
            )
          )}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
