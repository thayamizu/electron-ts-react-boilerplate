import * as Enzyme from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import Counter from "renderer/containers/CounterContainer";
import * as Store from "renderer/Store";

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

test("Counterコンポーネント", () => {
    const component = Enzyme.render(
        <Provider store={Store.counterStore}>
            <Counter />
        </Provider>
    );

    expect(component).toMatchSnapshot();
});
