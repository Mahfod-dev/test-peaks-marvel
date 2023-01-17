import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import ErrorPage from "../pages/ErrorPage";
import { Navbar, Spinner } from "../components/ui";
import Footer from "../components/ui/Footer";

const HeroesPage = loadable(
  () => import(/* webpackPrefetch: true */ "../pages/HeroesPage"),
  {
    resolveComponent: (component) => component.HeroesPage,
  }
);
const HeroDetailPage = loadable(() => import("../pages/HeroDetailPage"), {
  fallback: <Spinner />,
});
const FavoritePage = loadable(() => import("../pages/FavoritePage"), {
  fallback: <Spinner />,
});

HeroesPage.preload();

/**
 * Component for showing HeroesRouter.
 *
 * HeroesRouter is a component that provides the routes for the application.
 * @module HeroesRouter
 * @component
 * @example
 * return (
 * <HeroesRouter />
 * )
 * @returns {JSX.Element} - A JSX element that displays a HeroesRouter.
 *
 * Lazy loading is a technique that defers loading of non-critical resources at page load time.
 * @function loadable
 * @param {function} () => import('../pages/HeroesPage') - The function that returns the component.
 * @param {object} {resolveComponent: (component) => component.HeroesPage} - The object that returns the component.
 * @returns {JSX.Element} - A JSX element that displays a HeroesPage.
 *
 * @function loadable
 * @param {function} () => import('../pages/HeroDetailPage') - The function that returns the component.
 * @param {object} {resolveComponent: (component) => component.HeroDetailPage} - The object that returns the component.
 * @returns {JSX.Element} - A JSX element that displays a HeroDetailPage.
 *
 */

const HeroesRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ width: "100vh" }}>
        <Routes>
          <Route path="/" element={<HeroesPage />} />
          <Route path="/hero/:heroId" element={<HeroDetailPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default HeroesRouter;
