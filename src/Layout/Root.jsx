import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto my-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
