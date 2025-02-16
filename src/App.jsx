import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { refresh } from "./redux/auth/operations";
import { Page } from "./components/Page.jsx";
import PrivateRoute from "./components/Check.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import Loader from "./components/Loader.jsx";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages//NotFoundPage.jsx")
);

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <Page>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Page>
  );
}

export default App;