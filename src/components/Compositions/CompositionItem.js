import React from "react";
import { Item } from "./Compositions.styles";
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
        <div className="left-col">
          <span className="left-col__date"><Moment format="DD.MM.YYYY" date={item.date} /></span>
          <span className="left-col__album">{item.author}</span>
          <h3 className="left-col__title">{item.title}</h3>
          <p className="left-col__desc">{item.description}</p>
          <button className="left-col__edit" onClick={() => editPost(item.id)}>edit</button>
          <button className="left-col__delete" onClick={() => deletePost(item.id)}>delete</button>
          <div className="left-col__footer">
            <a href={item.itunes_url} className="footer__link">Visit the iTunes <i className="fa fa-angle-right"></i></a>
            <div className="footer__social">
              <span><i className="fa fa-volume-down"></i> {item.plays}</span>
              <span><i className="fa fa-heart"></i> {item.likes}</span>
              <span><i className="fa fa-share-square"></i> {item.shares}</span>
              <span><i className="fa fa-comment"></i> {item.comments}</span>
            </div>
          </div>
        </div>
        <div className="right-col">
          <YouTube
            videoId={item.youtube_id}
            opts={opts}
          />
        </div>
      </Item>
    );
  }
}

export default CompositionItem;
