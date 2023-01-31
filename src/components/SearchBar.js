import React from "react";
import { useRecoilState } from "recoil";

import { Button } from "antd";
import MyButton from "./MyButton";
import item from "../item.json";
import { searchKeyword, selectedTabId } from "./MovieList";
import { DatePicker } from "antd";
import { Input, Row, Col } from "antd";
import MovieCard from "./MovieCard";
import jsonData from "../item.json";
const { Search } = Input;

const SearchBar = () => {
  //ADD :: End

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      {/* onClick 추가 */}
      {/* <MyButton text={"검색"} onClick></MyButton> */}
      <Search
        placeholder="영화 입력"
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
      <div>
        <Row>
          {jsonData.items.map((item) => {
            return (
              <Col xs={24} sm={12}>
                <MovieCard item={item}></MovieCard>;
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SearchBar;
