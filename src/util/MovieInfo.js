import React from "react";
import moment from "moment/moment";

const MovieInfo = (props) => {
  const title = props.row.title;
  const director = props.row.director;
  const image = props.row.image;
  const pubDate = moment(props.row.pubDate).format("YYYY.");
  return (
    <div>
      <div className="title">{title}</div>
      <div className="pubDate">{pubDate}</div>
      <span className="director">{director}</span>
      <img src={image}></img>
    </div>
  );
};

export default MovieInfo;
