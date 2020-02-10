import React from "react";
import { Section, SlideContent } from "./SliderComments.styles";
import Swiper from 'react-id-swiper';

class SliderComments extends React.Component {

  render() {
    const params = {
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30,
      renderPrevButton: () => <div className="swiper-button-prev"><i className="fa fa-chevron-left"></i></div>,
      renderNextButton: () => <div className="swiper-button-next"><i className="fa fa-chevron-right"></i></div>,
    }

    return (
      <Section>
        <Swiper {...params}>
          <div>
            <img src="./images/ocean.png" alt="" />
            <SlideContent>
              <img src="./images/melody.png" alt="" />
              <span className="slide-title">
                In 2008, lead singer Dan Reynolds met<br />
                drummer Andrew Tolman at Brigham Young University where they were both students
              </span>
              <span className="slide-desc">
                Tolman recruited longtime high school friend Daniel Wayne "Wing" Sermon, who had graduated from Berklee College of Music. Tolman later recruited his wife, Brittany Tolman, to sing backup and play keys.
              </span>
              <span className="slide-info">
                - Early years (2008–10)
              </span>
            </SlideContent>
          </div>
          <div>
            <img src="./images/ocean.png" alt="" />
            <SlideContent>
              <img src="./images/melody.png" alt="" />
              <span className="slide-title">
                In 2008, lead singer Dan Reynolds met<br />
                drummer Andrew Tolman at Brigham Young University where they were both students
              </span>
              <span className="slide-desc">
                Tolman recruited longtime high school friend Daniel Wayne "Wing" Sermon, who had graduated from Berklee College of Music. Tolman later recruited his wife, Brittany Tolman, to sing backup and play keys.
              </span>
              <span className="slide-info">
                - Early years (2008–10)
              </span>
            </SlideContent>
          </div>
          <div>
            <img src="./images/ocean.png" alt="" />
            <SlideContent>
              <img src="./images/melody.png" alt="" />
              <span className="slide-title">
                In 2008, lead singer Dan Reynolds met<br />
                drummer Andrew Tolman at Brigham Young University where they were both students
              </span>
              <span className="slide-desc">
                Tolman recruited longtime high school friend Daniel Wayne "Wing" Sermon, who had graduated from Berklee College of Music. Tolman later recruited his wife, Brittany Tolman, to sing backup and play keys.
              </span>
              <span className="slide-info">
                - Early years (2008–10)
              </span>
            </SlideContent>
          </div>
        </Swiper>
      </Section>
    )
  }
}
export default SliderComments;
