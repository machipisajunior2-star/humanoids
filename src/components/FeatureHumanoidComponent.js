/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
import { css } from "@emotion/react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiArrowRight } from "react-icons/hi";
import Slide from "react-reveal/Slide";
import data from "../data/data.json";
import { colorPicker } from "../utils";

export default function FeautureHumanoid(props) {
  let navigate = useNavigate();
  const themeColorState = useSelector((state) => state.themeColor.colorPalette);
  const [isActive, setIsActive] = useState(false);
  const { id } = props;

  const openFeaturedHumanoid = () => navigate(`/product/${data[id].slag}`);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <section
      className={
        isActive
          ? "featured-content feature-content-active"
          : "featured-content feature-content-inactive"
      }
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      key={`featured-content${id}`}
      css={css({
        ":active": {
          outline: `2px solid ${colorPicker(data[id].useType.toLowerCase())}`,
        },
        backgroundImage: `url(${data[id].image[0]})`,
      })}
      onClick={(e) => {
        if (!e.target.closest(".category-button")) openFeaturedHumanoid();
      }}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          openFeaturedHumanoid();
        }
      }}
    >
      <div className="home_featured_humanoid_container">
        <div className="home_featured_humanoid">
          <span
            className="home_featured"
            style={{ background: id === 6 ? "#FA5F9F" : "#4096C8" }}
          >
            FEATURED HUMANOID
          </span>
          <div className="featured_humanoid">
            <h1 className="humanoid_name">
              {data[id].name}
              <span
                key={`humanoid-span-slider${id}`}
                style={{ display: `${isActive ? "flex" : "none"}` }}
              >
                <Slide left>
                  <HiArrowRight />
                </Slide>
              </span>
            </h1>
            <p
              className="home_subheading"
              style={{ color: id === 6 ? themeColorState.text : "black" }}
            >
              {data[id].tagline}
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            navigate(`/category/${data[id].useType.toLowerCase()}`)
          }
          className="category-button"
          key={`category-button${id}`}
          css={css({
            border:
              id === 6
                ? `1px solid ${themeColorState.text}`
                : "1px solid black",
            ":hover": {
              background: colorPicker(data[id].useType.toLowerCase()),
              border: "transparent",
            },
          })}
        >
          <span
            className="category-button-name"
            style={{ color: id === 6 ? themeColorState.text : "black" }}
          >
            {data[id].useType}
          </span>
        </button>
      </div>
    </section>
  );
}

FeautureHumanoid.propTypes = {
  id: PropTypes.number.isRequired,
};
