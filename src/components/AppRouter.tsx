import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, publicRoutes, privateRoutes } from "../router";
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter: React.FC = () => {
  const auth = useTypedSelector(state => state.auth.isAuth);
  return (
    auth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.element />} />
        )}
        <Route
          path="*"
          element={<Navigate to={RouteNames.EVENT} replace />}
        />
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.element />} />
        )}
        <Route
          path="*"
          element={<Navigate to={RouteNames.LOGIN} replace />}
        />
      </Routes>
  );
}

export default AppRouter;
