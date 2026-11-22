import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(() =>
    emblaApi ? emblaApi.selectedScrollSnap() : 0,
  );
  const [scrollSnaps, setScrollSnaps] = useState(() =>
    emblaApi ? emblaApi.scrollSnapList() : [],
  );

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi) => {
    if (emblaApi !== undefined) setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    if (emblaApi !== undefined) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reinit", onInit).on("reinit", onSelect).on("select", onSelect);

    return () => {
      emblaApi
        .off("reinit", onInit)
        .off("reinit", onSelect)
        .off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export const DotButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

DotButton.propTypes = {
  children: PropTypes.node,
};
