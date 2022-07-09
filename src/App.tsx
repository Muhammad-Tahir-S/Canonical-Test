import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";

const App = (): JSX.Element => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const url =
    "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log("data", data);

  return loading ? (
    <h2 className="u-align--center" style={{ width: "100%", marginTop: "20%" }}>
      Loading...
    </h2>
  ) : (
    <div className="row" style={{ marginTop: "10%" }}>
      {data?.map((blog: any) => {
        return (
          <BlogCard
            key={blog.id}
            headerText="CLOUD AND SERVER"
            title={blog.title.rendered}
            author={blog._embedded.author[0].name}
            blogUrl={blog.link}
            footerText="Article"
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
