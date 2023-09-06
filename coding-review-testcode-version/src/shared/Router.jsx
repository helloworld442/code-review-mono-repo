import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Write = lazy(() => import("../pages/Write"));
const Detail = lazy(() => import("../pages/Detail"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/detail/:postId" element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
