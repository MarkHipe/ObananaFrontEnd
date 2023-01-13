import React from 'react'
import styled from 'styled-components'

const FeaturedBanner = () => {
  return (
    <Con>
      <img
        src="https://obanana.com/wp-content/uploads/2022/07/featuredproduct-1444x2048.png"
        alt=""
      />
    </Con>
  );
}
const Con = styled.div`
  overflow: hidden;
  margin: auto 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  & img {
    height: 600px;
    margin: auto 0;
    object-fit: cover;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94);
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 200px;
    }
    &:hover {
      transform: scale(1.08);
      transition: all 0.3s cubic-bezier(0.95, 0.59, 0.07, 0.94);
    }
  }
`;

export default FeaturedBanner