import React from "react";
import { SectionHeader } from "./../index";
import { Section, ConcertItem } from "./ConcertTours.styles";

let title = "Concert tours";
let desc = "Before the release of Night Visions, Imagine Dragons made appearances on American radio and television to promote their extended play, Continued Silence and debut single It's Time. The band performed It's Time on the July 16, 2012 airing of NBC late-night talk show The Tonight Show with Jay Leno";

class ConcertTours extends React.Component {
  render() {
    return (
      <Section>
        <div className="container">
          
          <SectionHeader title={title} desc={desc} />

          <div className="concerts">
            <ConcertItem>
              <div className="item-top">
                <span className="item-top_date">03.08.2015</span>
                <div className="item-top_album">Smoke + Mirrors Tour</div>
              </div>
              <div className="item-content">
                <h3 className="item-content_title">2015–present</h3>
                <p className="item-content_desc">
                  At Lollapalooza in Sao Paulo, Brazil, the last date on the Into the Night Tour, the band announced a rest, and complemented saying, "This is our last show for a while, and had no better place to end this tour".[51] The conclusion of the Into the Night Tour signaled the end of the Night Visions album cycle. Lead singer Dan Reynolds joked about the end of the Night Visions cycle, saying that "We're always writing on the road, [so] that second album will come, unless we die.
                  next year. Hopefully we don't die and there will be a second album. I don't know when it will be, but it may come"
                </p>

                <a className="buy-btn" href="/">Buy online <i className="fa fa-angle-right"></i></a>
              </div>
            </ConcertItem>
          </div>
        </div>
      </Section>
    );
  }
}
export default ConcertTours;
