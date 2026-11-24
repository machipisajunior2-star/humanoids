/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [dotCount, setDotCount] = useState(0);

  const { selectedIndex } = useDotButton(emblaApi);

  const updateDotCount = useCallback(() => {
    if (!emblaApi) return;
    setDotCount(emblaApi.scrollSnapList().length);
    emblaApi.scrollTo(0, true | false, "forward" | "backward");
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("slidesChanged", updateDotCount);

    updateDotCount();

    return () => {
      emblaApi.off("slidesChanged", updateDotCount);
    };
  }, [emblaApi, updateDotCount]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, i) => (
            <div className="embla__slide" key={`${image}_${i}`}>
              <div className="embla__slide__number">
                <img
                  className="embla_humanoid_image"
                  src={image}
                  alt={`humanoid ${i}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {Array.from({ length: dotCount }).map((_, index) => (
            <DotButton
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
              css={css({
                "&:after": {
                  borderColor: props.color,
                  backgroundColor: props.color,
                },
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

EmblaScroller.propTypes = {
  slides: PropTypes.array.isRequired,
  options: PropTypes.object,
};