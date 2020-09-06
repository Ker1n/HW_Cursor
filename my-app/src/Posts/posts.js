import React, { Component } from "react";
import "./post.css";
import Rey from "../img/rey.jpg";
import sw from "../img/skywalker.jpg";
import active from "../img/active.png";
import massage from "../img/message.png";
import like from "../img/like.png";
import retweet from "../img/retweet.png";
import share from "../img/share.png";

let author = {
  name: "Anakin skywalker",
  nameAvatar: sw,
  nickname: "@dart_vader",
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  contentImg : Rey,
  date: "26 февр.",
};

export default class Posts extends Component {
  render() {
    return (
      <div className="post__box">
          <div className="post__box__header">
            <div className="post__box__header__avatar">
              <img src={author.nameAvatar} alt="user avatar" />
            </div>
            <div className="post__box__header__userName">
              <h6>{author.name}<span>
                <img src={active} alt="user avatar" />
              </span>
              </h6>
              
            </div>
            <div className="post__box__header__status">
              {author.nickname}
              <span> • </span>
              {author.date}
            </div>
            <div className="post__box__header__postText">
            {author.content}
            </div>
        </div>

        <div className="post__box__main_container">
          <img src={author.contentImg} alt="user post" />
        </div>

        <div className="footer">
          <span>
            <img src={massage} alt="massage" /> 534
          </span>
          <span>
            <img src={like} alt="like" /> 899
          </span>
          <span>
            <img src={retweet} alt="retweet" /> 233
          </span>
          <span>
            <img src={share} alt="share" />
          </span>
        </div>

      </div>
    );
  }
}
