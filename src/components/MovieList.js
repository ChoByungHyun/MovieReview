import React, { useState, useEffect } from "react";

const MovieList = () => {
  const [articles, setArticles] = useState(null);

  const apiGet = async (type, param) => {
    const apiUrl = "/v1/search/" + type + "?query=" + param;
    const resp = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Naver-Client-Id": "ccNCXaCW7RJaaHA_KGcl",
        "X-Naver-Client-Secret": "u24KIalDNc",
      },
    });
    resp.json().then((data) => {
      setArticles(data.items);
    });
  };

  useEffect(() => {
    apiGet("news", "코스피");
  }, []);
  return (
    <div className="listArea">
      <ul className="listView"></ul>
    </div>
  );
};

export default MovieList;
