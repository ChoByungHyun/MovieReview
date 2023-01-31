import React, { Fragment } from "react";
import MovieCard from "./MovieCard";
import jsonData from "../item.json";
import { Input, Row, Col } from "antd";
const { Search } = Input;
const GirdTest = () => {
  return (
    <Fragment>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <Search placeholder="영화를 검색해 보세요!" style={{ width: 200 }} />
      </div>
      <div>
        <Row gutter={[36, 16]}>
          {jsonData.items.map((item) => {
            return (
              <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                <MovieCard item={item}></MovieCard>;
              </Col>
            );
          })}
        </Row>
      </div>
    </Fragment>
  );
};

export default GirdTest;
