import { SuspenseContainer } from "../config/index";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";



const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              index:true,
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
