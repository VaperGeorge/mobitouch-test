import React from "react";
import { SectionHeader } from "./../index";
import { Section, SectionList, SectionListItem, ListItemTitle, ListItemDesc } from "./Discography.styles";

let dicography = [
  {
    title: "Hell and Silence is an EP by Las Vegas rock group",
    date: "2010",
    album: "Hell and Silence",
    description:
      "Hell and Silence is an EP by Las Vegas rock group , released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham. To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase.While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest.",
    url: "https://open.spotify.com/track/7qwt4xUIqQWCu1DJf96g2k"
  },
  {
    title: "Night Visions is the debut studio album by American rock band",
    date: "2010",
    album: "Night Visions",
    description:
      "It was released on September 4, 2012 through Interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish ... of the album's tracks being previously released on multiple EPs. Musically, Night Visions exhibits influences of folk, hip hop and pop.[2]",
    url: "https://open.spotify.com/track/7qwt4xUIqQWCu1DJf96g2k"
  },
  {
    title:
      "The album was recorded during 2014 at the band's home studio in Las Vegas, Nevada",
    date: "2015",
    album: "Smoke + Mirrors",
    description:
      "Hell and Silence is an EP by Las Vegas rock group , released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham. To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase.While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010, New Noise Music Festival, Neon Reverb Festival, and Fork Fest.",
    url: "https://open.spotify.com/track/7qwt4xUIqQWCu1DJf96g2k"
  }
];

let title = "DISCOGRAPHY";
let desc = "September 4 world heard Night Visions, the first full album. He reached the 2 position in the chart Billboard 200. The single «It's Time» took 22 th place in the Billboard Hot 100, 4th in the Billboard Alternative and Billboard Rock, and now went platinum.";

class Discography extends React.Component {
  render() {
    return (
      <Section>
        <div className="container">
          <SectionHeader title={title} desc={desc} />

          <SectionList>
            {dicography.map((item, idx) => {
              return <SectionListItem key={idx}>
                <div className="left-col">
                  <span className="date">{item.date}</span>
                  <span className="album">{item.album}</span>
                </div>
                <div className="right-col">
                  <ListItemTitle>{item.title}</ListItemTitle>
                  <ListItemDesc>{item.description}</ListItemDesc>
                  <a href={item.url}>Play</a>
                </div>
              </SectionListItem>
            })}
          </SectionList>
        </div>
      </Section>
    );
  }
}

export default Discography;
