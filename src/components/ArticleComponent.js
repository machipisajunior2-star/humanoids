/** @jsxImportSource @emotion/react */
import { ClassNames } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "proptypes";
import articleData from "../data/articles.json";


export default function ArticleComponent(props) {
  const themeColorState = useSelector(
    (state) => state.themeColor.colorPalette.text,
  );
  const { id } = props;

  const params = articleData[id].title.replace("?", "%3f");

  return (
    <ClassNames>
      {({ css }) => (
        <Link
          to={`/learn/${params}`}
          className={`article_teaser ${css({
            ":hover .article_text header h2::before": {
              content: `"\\2B24"`,
              color: "#27C3AE",
            },
          })}`}
          key={`article_teaser_${id}`}
        >
          <div className="article_text">
            <header>
              <h2
                className={css({
                  color: themeColorState.text,
                  "::before": {
                    paddingRight: "10px",
                    content: '"\\1F785"',
                    fontSize: "1em",
                  },
                })}
              >
                {articleData[id].title}
              </h2>
            </header>
            <p>{articleData[id].description}</p>
          </div>
          <div className="article_image_container">
            {articleData[id].image && (
              <img src={`${articleData[id].image}`} alt={`article-${id}`} />
            )}
          </div>
        </Link>
      )}
    </ClassNames>
  );
}

ArticleComponent.propTypes = {
  id: PropTypes.number.isRequired,
};