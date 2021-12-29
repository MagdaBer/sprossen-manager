import React from 'react';

export type CardContentProps = {
  headline?: string;
  content?: string;
};

const CardContent = (props: CardContentProps): JSX.Element => {
  const { headline, content } = props;

  return (
    <>
      {headline && <div>{headline}</div>}
      {content && <p>{content}</p>}
    </>
  );
};
export default CardContent;
