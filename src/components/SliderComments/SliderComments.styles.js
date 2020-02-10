import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;

  .swiper-button-prev {
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 75px 0 75px 85px;
    border-color: transparent transparent transparent #ffffff;
    line-height: 0px;
    i {
      left: -60px;
      position: absolute;
    }
  }
  .swiper-button-next {
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 75px 85px 75px 0;
    border-color: transparent #ffffff transparent transparent;
    line-height: 0px;
    _border-color: #000000 #007bff #000000 #000000;
    i {
      right: -60px;
      position: absolute;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      content: none;
    }
    i {
      font-size: 23px;
      color: black;
    }
  }
`;
export const SlideContent = styled.div`
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 50px;
  }
  .slide-title {
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    margin-bottom: 45px;
  }
  .slide-desc {
    font-size: 11px;
    color: lightgray;
    max-width: 520px;
    margin: 0 auto;
    margin-bottom: 70px;
  }
  .slide-info {
    font-size: 11px;
    color: lightgray;
  }
`;
