import { SuspenseContainer } from "../config/index";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";



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
        {
          path: "/about",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              index:true,
              path: "/about",
              element: (
                <SuspenseContainer>
                  <About/>
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/portfolio",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              index:true,
              path: "/portfolio",
              element: (
                <SuspenseContainer>
                  <Portfolio/>
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
