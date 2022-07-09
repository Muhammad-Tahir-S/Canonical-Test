import React from "react";
import { formatDate } from "../../utils/date";

interface IBlogCard {
  headerText: string;
  imgSrc: string;
  title: string;
  author: string;
  date: string;
  footerText: string;
  blogUrl: string;
  authorUrl: string;
}

const BlogCard = ({
  headerText,
  imgSrc,
  title,
  author,
  date,
  footerText,
  blogUrl,
  authorUrl,
}: IBlogCard): JSX.Element => {
  return (
    <div className="col-4">
      <div
        className="p-card"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 5px",
          borderTop: "3px solid purple",
          borderRadius: "0.25em",
        }}
      >
        <header>
          <h5
            style={{ borderBottom: "1px dotted #d9d9d9" }}
            className="muted-heading u-sv1"
          >
            {headerText}
          </h5>
        </header>
        <div className="p-card__content">
          <a href={blogUrl} target={"_blank"} rel="noreferrer">
            <img className="p-card__image" src={imgSrc} alt="blog" />
          </a>
          <div className="p-card__inner">
            <p
              className="p-heading--4 "
              style={{
                minHeight: "95px",
              }}
            >
              <a href={blogUrl} target={"_blank"} rel="noreferrer">
                {title}
              </a>
            </p>
            <em>
              By{" "}
              <a href={authorUrl} target={"_blank"} rel="noreferrer">
                {author}
              </a>{" "}
              on {formatDate(date).day} {formatDate(date).month}{" "}
              {formatDate(date).year}
            </em>
          </div>
        </div>
        <footer>
          <p style={{ borderTop: "1px dotted #d9d9d9", paddingTop: "1em" }}>
            {footerText}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlogCard;
