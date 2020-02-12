import React from "react";
import { Item, ItemLeftCol, ItemRightCol, ItemDate, ItemAlbum, ItemTitle, ItemDesc, ButtonEdit, ButtonRemove, ItemLeftColFooter, ItemLink, ItemSocialBlock } from "./Compositions.styles";
import YouTube from 'react-youtube';
import Moment from 'react-moment';
// import PropTypes from 'prop-types'

class CompositionItem extends React.Component {

  render() {
    const { item, deletePost, editPost } = this.props;

    const opts = {
      height: '369',
      width: '600',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <Item>
        <ItemLeftCol>
          <ItemDate><Moment format="DD.MM.YYYY" date={item.date} /></ItemDate>
          <ItemAlbum>{item.author}</ItemAlbum>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDesc>{item.description}</ItemDesc>
          <ButtonEdit onClick={() => editPost(item.id)}>edit</ButtonEdit>
          <ButtonRemove onClick={() => deletePost(item.id)}>delete</ButtonRemove>
          <ItemLeftColFooter>
            <ItemLink href={item.itunes_url}>Visit the iTunes <i className="fa fa-angle-right"></i></ItemLink>
            <ItemSocialBlock>
              <span><i className="fa fa-volume-down"></i> {item.plays}</span>
              <span><i className="fa fa-heart"></i> {item.likes}</span>
              <span><i className="fa fa-share-square"></i> {item.shares}</span>
              <span><i className="fa fa-comment"></i> {item.comments}</span>
            </ItemSocialBlock>
          </ItemLeftColFooter>
        </ItemLeftCol>
        <ItemRightCol>
          <YouTube
            videoId={item.youtube_id}
            opts={opts}
          />
        </ItemRightCol>
      </Item>
    );
  }
}

export default CompositionItem;
