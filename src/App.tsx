import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import { IBlog } from "./types/blog";

const App = (): JSX.Element => {
  const [data, setData] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const HEADER_TEXT = "CLOUD AND SERVER";
  const FOOTER_TEXT = "Article";

  const url =
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        setError(error.response?.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <div className="spinner">
      <i className="p-icon--spinner u-animation--spin"></i>
    </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="row" style={{ marginTop: "10%" }}>
      {data?.map((blog: IBlog) => {
        return (
          <BlogCard
            key={blog.id}
            headerText={HEADER_TEXT}
            title={blog.title.rendered}
            author={blog._embedded.author[0].name}
            blogUrl={blog.link}
            footerText={FOOTER_TEXT}
            imgSrc={blog.featured_media}
            authorUrl={blog._embedded.author[0].link}
            date={blog.date}
          />
        );
      })}
    </div>
  );
};

export default App;
