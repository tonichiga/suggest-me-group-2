import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";


const Router = () => {
  return (
    <Routes>
      <Route path="/movie" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Router;