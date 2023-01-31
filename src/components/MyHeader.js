import React from "react";

const MyHeader = ({ leftChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">영화검색</div>
    </header>
  );
};

export default MyHeader;
