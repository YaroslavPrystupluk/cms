import { Suspense, useEffect, useState, lazy } from "react";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";

import {
  Outlet,
  useLoaderData,
  Await,
  Route,
  Routes,
  useNavigate,
  useLocation,
  NavLink,
} from "react-router-dom";

const Tab = lazy(() => import("./Tab"));

const Layout = () => {
  const { tabs } = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const initialTab = tabs.find((t) => t.order === 0);

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    navigate(`/${tab.id}`);
  };

  useEffect(() => {
    const currentTabId = location.pathname.replace("/", "");

    if (currentTabId) {
      navigate(`/${currentTabId}`);
    } else if (initialTab) {
      navigate(`/${initialTab.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav>
        <h1>Content management system</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={tabs}>
            {tabs
              .sort((a, b) => a.order - b.order)
              .map((tab) => (
                <LoadingButton
                  key={tab.id}
                  style={{ margin: "10px", width: "150px" }}
                  size="small"
                  endIcon={<SendIcon />}
                  loading={loading && tab === activeTab}
                  onClick={() => handleTabClick(tab)}
                  loadingPosition="end"
                  variant="contained"
                >
                  <NavLink
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                    to={`/${tab.id}`}
                  >
                    {`${tab.title}`}
                  </NavLink>
                </LoadingButton>
              ))}
          </Await>
        </Suspense>
      </nav>
      <Routes>
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={`/${tab.id}/*`}
            element={<Tab tab={tab} />}
          />
        ))}
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
