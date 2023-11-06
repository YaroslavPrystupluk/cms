import { lazy, Suspense } from "react";
import { Await } from "react-router-dom";

const Tab = ({ tab }) => {
  const MyTabs = lazy(() => import(`../${tab.path}`));

  return (
    <>
      <h1>{tab.title}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={tab}>
          <MyTabs />
        </Await>
      </Suspense>
    </>
  );
};

export default Tab;
