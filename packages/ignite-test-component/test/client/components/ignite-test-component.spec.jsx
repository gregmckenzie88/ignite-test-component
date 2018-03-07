/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import IgniteTestComponent from "src/components/ignite-test-component";

describe("components/ignite-test-component", () => {

  describe("Mounting", () => {
    const data = [
      {
        summary: "summary 1",
        details: "details 1"
      },
      {
        summary: "summary 2",
        details: "details 2"
      },
      {
        summary: "summary 3",
        details: "details 3"
      }
    ];
    it("should render into the document", () => {
      const component = shallow(<IgniteTestComponent data={data}/>);
      expect(component).to.not.be.null;
    });

  });

});
