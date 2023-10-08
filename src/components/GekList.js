import React from "react";
import jQuery from "jquery";
import "../../node_modules/lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2";

export const GekList = ({
  gecks,
  filters,
  disco,
  deDisco,
  colors,
  reservationMode,
  onChange,
  reservationCart,
}) => {
  let filterList = gecks;
  if (!filters[0]) {
    filterList = filterList.filter((geck) => geck.sex !== "samiec");
  }
  if (!filters[1]) {
    filterList = filterList.filter((geck) => geck.sex !== "samica");
  }
  const geckosList = filterList.map((geck) => (
    <div
      className={geck.reserved ? "itemContainer reserved" : "itemContainer "}
      key={geck.id}
    >
      <img
        src={`https://smilinggeckos.com/static/media/${geck.filename}`}
        alt={geck.name}
        key={geck.id}
        onMouseEnter={(e) => {
          disco(e, colors);
        }}
        onMouseLeave={deDisco}
      />
      <div className="tl">{geck.name}</div>
      <div className="br">{(geck.sex ? geck.sex : "") + " " + geck.price} </div>
      <a
        data-lightbox={"gekon " + geck.geckType}
        href={`https://smilinggeckos.com/static/media/${geck.filename}`}
        data-title={geck.name}
      >
        <svg
          style={{ color: "white" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="galleryIcon"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            fill="white"
          ></path>{" "}
          <path
            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            fill="white"
          ></path>{" "}
        </svg>
      </a>
      {reservationMode ? (
        <div className="reservationInput">
          <input
            type="checkbox"
            name={geck.id}
            onChange={onChange}
            checked={
              reservationCart.includes(geck.id.toString()) ? true : false
            }
          />
        </div>
      ) : null}
    </div>
  ));
  return <div className="gekList">{geckosList}</div>;
};
