import React, { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import getConfig from "next/config";
import { ToastContainer } from "react-toastify";
import { Authprovider } from "../context/authcontext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";
import "./index.scss";

import Layout from "./admin/components/content/Layout";
import AuthGuard from "./admin/components/authGuard";

const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyFunctionComponent({ children }) {
  const [loader, setLoader] = useState(true);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500);

    // Tap to Top Scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);
      else setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <>
  
        <Head>
          <title>Unice</title>
        </Head>
        {loader && (
          <div className="loader-wrapper">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <>{children}</>
        <div
          className="tap-top"
          style={goingUp ? { display: "block" } : { display: "none" }}
          onClick={tapToTop}
        >
          <div>
            <i className="fa fa-angle-double-up"></i>
          </div>
        </div>

    </>
  );
}

export default function MyApp({ Component, pageProps }) {
    const [isOpen, setIsOpen] = useState(false);
        const updateWidth = () => {
          const width = window.innerWidth;
          const widthLimit = 576;
          const mobile = width <= widthLimit;
          const wasMobile = previousWidth <= widthLimit;

          if (mobile !== wasMobile) {
            setIsOpen(!mobile);
          }

          previousWidth = width;
        };

        useEffect(() => {
          document.body.style.overflowY="scroll"
          updateWidth();
          window.addEventListener("resize", updateWidth);

          return () => {
            window.removeEventListener("resize", updateWidth);
          };
        }, []);

        const toggle = () => {
          setIsOpen(!isOpen);
        };

        let previousWidth = -1;
  return (
    <div>
      <MyFunctionComponent>
        <Authprovider>
          {Component.adminLayout ? (
            <div className="App wrapper">
              {Component.requiredAuth ? (
                <AuthGuard>
                  <Layout toggle={toggle} isOpen={isOpen}>
                    <Component {...pageProps} toggle={toggle} isOpen={isOpen} />
                  </Layout>
                </AuthGuard>
              ) : (
                <Layout toggle={toggle} isOpen={isOpen}>
                  <Component {...pageProps} toggle={toggle} isOpen={isOpen} />
                </Layout>
              )}
            </div>
          ) : (
            <Component {...pageProps} />
          )}
        </Authprovider>
      </MyFunctionComponent>
      <ToastContainer />
    </div>
  );
}
