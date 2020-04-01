import * as Enzyme from "enzyme";
import * as React from "react";
import { Counter } from "renderer/components/Counter";
import { CounterActionDispatcher } from "renderer/dispatcher/Counter";

const Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });

test("Counterコンポーネント", () => {
    const component = Enzyme.shallow(
        <Counter
            state={{ counter: 10 }}
            actions={new CounterActionDispatcher(jest.fn())}
        />
    );

    expect(component).toMatchSnapshot();
});
