import React from 'react'
import styled from 'styled-components'
import MainBanner from '../components/home/banners/MainBanner'
import SlideBanner from '../components/home/banners/SlideBanner'
import SubBanners from '../components/home/banners/SubBanners'
import TextBanner from '../components/home/banners/TextBanner'
import TwoBanner from '../components/home/banners/TwoBanner'
import BenefitsSlider from '../components/home/BenefitsSlider'
import BestSeller from '../components/home/BestSeller'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import LatesProduct from '../components/home/LatesProduct'
import NewArrival from '../components/home/NewArrival'
import ShopSlides from '../components/home/ShopSlides'
import TopCategories from '../components/home/TopCategories'


const Home = () => {
  return (
    <Con>
      <MainBanner />
      <Categories />
      <SubBanners />
      <BenefitsSlider />
      <TextBanner />
      <LatesProduct />
      <SubBanners />
      <TopCategories />
      <SubBanners />
      <FeaturedProducts />
      <SlideBanner />
      <BestSeller />
      <TwoBanner />
      <ShopSlides />
      <NewArrival />
      <TwoBanner />
    </Con>
  );
}
const Con = styled.div`
height: 100%;
width: 100vw;
padding: 0;
`
export default Home