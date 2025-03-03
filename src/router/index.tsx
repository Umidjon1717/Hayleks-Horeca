import { SuspenseContainer } from "../config/index";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import ProductList from "../pages/product/Product";
import ProductDetail from "../pages/detail/ProductDetail";
import Contact from "../pages/contact/Contact";
import Sponsor from "../pages/sponsor/Sponsor";

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
              index: true,
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
              index: true,
              path: "/about",
              element: (
                <SuspenseContainer>
                  <About />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/sponsors",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              index: true,
              path: "/sponsors",
              element: (
                <SuspenseContainer>
                  <Sponsor/>
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/contact",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              index: true,
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contact/>
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
              index: true,
              path: "/portfolio",
              element: (
                <SuspenseContainer>
                  <Portfolio />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/product",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              index: true,
              path: "/product",
              element: (
                <SuspenseContainer>
                  <ProductList />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/products/:id",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/products/:id",
              element: (
                <SuspenseContainer>
                  <ProductDetail />
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
