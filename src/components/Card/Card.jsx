import React from "react";
import "./Card.css";
import { hoverTitle } from "../../utils/constants";

function Card(props) {
  const { card, onClick } = props;

  return (
    <div
      className={
        card.isLack
          ? "card-container card-container_disabled"
          : "card-container"
      }
      onClick={() => {
        if (card.isLack) return;
        onClick(card.id, !card.isActive);
      }}
    >
      <div className={card.isActive ? "card card_active" : "card"}>
        <div className="card__border"></div>
        <div className="card__info">
          <h1 className="card__title">{card.title}</h1>
          <h1 className="card__title_hover">{hoverTitle}</h1>
          <h2 className="card__subtitle">
            {card.brend}
            <span className="card__subtitle_small">{card.taste}</span>
          </h2>
          <p className="card__description">{card.description}</p>
        </div>
        <div className="card__circle">
          <p className="card__weight">{card.weightNumber}</p>
          <span className="card__weight card__weight_small">
            {card.weightMeasure}
          </span>
        </div>
      </div>
      {card.isActive ? (
        <p className="card__text">{card.slogan}</p>
      ) : (
        <p className="card__text">
          Чего сидишь? Порадуй котэ,{" "}
          <a href="#" className="card__link">
            купи.
          </a>
        </p>
      )}
      <p className="card__text_lack">{card.lackSlogan}</p>
    </div>
  );
}

export default Card;
