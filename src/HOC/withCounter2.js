import { useState } from 'react';

const withCounter = (OrginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
      setCount((previousState) => previousState + 1);
    };

    return (
      <OrginalComponent incrementHandler={incrementHandler} count={count} />
    );
  };

  return NewComponent;
};

export default withCounter;
