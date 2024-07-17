// CustomCard.js
import React from 'react';

const CustomCard = ({
  widtHeight,
  imgUrl,
  isBorder,
  url,
  title,
  titleClass,
  subtitleClass,
  titleSize,
  subtitle,
  component,
  align,
  borderColor,
  other,
  spaceY,
  classCard,
}) => {
  return (
    <div className={`card ${widtHeight} ${isBorder ? borderColor : ''} ${classCard} ${spaceY} ${other}`}>
      <img src={imgUrl} alt={title} />
      <h2 className={`${titleClass} ${titleSize}`}>{title}</h2>
      <p className={subtitleClass}>{subtitle}</p>
      <div className={align}>{component}</div>
    </div>
  );
};

export default CustomCard;
