import * as Enzyme from "enzyme";
import * as React from "react";
import Counter from "renderer/containers/Counter";

test("Counterコンポーネント", () => {
    const component = Enzyme.render(<Counter />);

    expect(component).toMatchSnapshot();
});
