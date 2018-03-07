// This is a bundled demo
// you should remove this to work on
// your own component.

import React from "react";
import propTypes from "prop-types";

// remember to also remove the bundled demo CSS files
// from ../styles

import styles from "../styles/ignite-test-component.css";
import Accordion from "./accordion";

export default class IgniteTestComponent extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className={styles.container}>
        <h4>Hello NPM</h4>
        {data.map((d, x) => <Accordion key={x} summary={d.summary} details={d.details} />)}
      </div>
    );
  }
}

IgniteTestComponent.displayName = "IgniteTestComponent";

IgniteTestComponent.propTypes = {
  data: propTypes.array
};

IgniteTestComponent.defaultProps = { };
