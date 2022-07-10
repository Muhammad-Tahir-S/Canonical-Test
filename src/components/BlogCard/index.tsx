import React from "react";
import { IBlogCard } from "../../types/blog";
import { formatDate } from "../../utils/date";
import { Image } from "react-image-and-background-image-fade";
import {
  containerStyle,
  contentStyle,
  footerStyle,
  headerStyle,
} from "./styles";

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
      <div style={containerStyle}>
        <header>
          <h5 style={headerStyle} className="muted-heading">
            {headerText}
          </h5>
        </header>

        <div className="p-card_content" style={contentStyle}>
          <a href={blogUrl} target={"_blank"} rel="noreferrer">
            <Image className="p-card__image" src={imgSrc} alt="blog" />
          </a>
          <h3
            className="p-heading--4 "
            style={{
              height: "95px",
            }}
          >
            <a href={blogUrl} target={"_blank"} rel="noreferrer">
              {title}
            </a>
          </h3>
          <em>
            By{" "}
            <a href={authorUrl} target={"_blank"} rel="noreferrer">
              {author}
            </a>{" "}
            on {formatDate(date).day} {formatDate(date).month}{" "}
            {formatDate(date).year}
          </em>
        </div>

        <footer>
          <p style={footerStyle}>{footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default BlogCard;
