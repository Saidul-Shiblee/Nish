import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../containers/common/header';
import BannerSection from "./layouts/sections/music/banner";
import GallerySection from "./layouts/sections/music/gallery";
import VideoSection from "./layouts/sections/music/video";
import BlogSection from "./layouts/sections/music/blog";
import SubscribeSection from "./layouts/sections/music/subscribe";
import FooterSection from "./layouts/sections/music/footer";
import CopyrightSection from "./layouts/sections/music/copyright";
import ArtistSection from "./layouts/sections/music/aboutme";
const Home = () => {
  
  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })

  return (
    <>
      <Head>
        <title>Music Layout </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="mdx-docs" />
      </Head>
      <Head></Head>
      <Header className="music loding-header" />

      <BannerSection />
      <ArtistSection />
      <GallerySection />
      <VideoSection />
      <BlogSection />
      <SubscribeSection />
      <FooterSection />
      <CopyrightSection />

    </>
  );
}

export default Home;
