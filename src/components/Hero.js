import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const banners = [
  {
    id: 1,
    image: heroBcg,
    title: 'Primeiro Banner',
    description: 'Descrição do primeiro banner'
  },
  {
    id: 2,
    image: heroBcg2,
    title: 'Segundo Banner',
    description: 'Descrição do segundo banner'
  },
  // Add more banners as needed
];

const Hero = () => {
  return (
    <Splide style={{ marginTop: '50px'}}options={{ type: 'loop', autoplay: true, interval: 3000, perPage: 1 }}>
    {banners.map(banner => (
      <SplideSlide key={banner.id}>
        <BannerWrapper>
          <img src={banner.image} alt={banner.title} />
          <BannerContent>
            <h2>{banner.title}</h2>
            <p>{banner.description}</p>
            <Link to={`/banner/${banner.id}`}>Saiba Mais</Link>
          </BannerContent>
        </BannerWrapper>
      </SplideSlide>
    ))}
  </Splide>
  )
}
const BannerWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #fff;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
  }
`;



export default Hero
