import * as Enzyme from "enzyme";
import * as React from "react";
import { Counter } from "renderer/components/CounterComponent";
import { CounterActionDispatcher } from "renderer/containers/CounterActionDispatcher";

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

test("Counterコンポーネント", () => {
    const component = Enzyme.shallow(
        <Counter
            counter={10}
            {...new CounterActionDispatcher(jest.fn())}
        />
    );

    expect(component).toMatchSnapshot();
});
