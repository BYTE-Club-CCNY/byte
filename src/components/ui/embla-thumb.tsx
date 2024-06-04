import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  label: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, label, onClick } = props;

  return (
      <div
          className={"embla-thumbs__slide".concat(
              selected ? " embla-thumbs__slide--selected" : ""
          )}
      >
        <button
            onClick={onClick}
            type="button"
            className="embla-thumbs__slide__number"
        >
          {label}
        </button>
      </div>
  );
};
// added {label} to be able to pass the item name
