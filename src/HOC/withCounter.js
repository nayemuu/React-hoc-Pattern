import React from 'react';

const withCounter = (OrginalComponent) => {
  class NewComponent extends React.Component {
    state = { count: 0 };

    incrementHandler = () => {
      this.setState((state) => ({ count: state.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return (
        <OrginalComponent
          incrementHandler={this.incrementHandler}
          count={count}
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
