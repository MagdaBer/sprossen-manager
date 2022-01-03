import React from 'react';

export type CardTextProps = {
  headline?: string;
  content?: string;
};

const CardText = (props: CardTextProps): JSX.Element => {
  const { headline, content } = props;

  return (
    <>
      {headline && <div>{headline}</div>}
      {content && <p>{content}</p>}
    </>
  );
};
export default CardText;
