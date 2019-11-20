import { CounterActionDispatcher } from "renderer/dispatcher/Counter";
import * as CounterModule from "renderer/modules/Counter";

test("CounterActionDispatcher", () => {
    const dispatcher = jest.fn();
    const dispatch = new CounterActionDispatcher(dispatcher);
    dispatch.onClickDecrement();

    const expected = [[CounterModule.decrement()]];
    expect(dispatcher.mock.calls).toEqual(expected);
});

test("CounterActionDispatcher", () => {
    const dispatcher = jest.fn();
    const dispatch = new CounterActionDispatcher(dispatcher);
    dispatch.onClickIncrement();

    const expected = [[CounterModule.increment()]];
    expect(dispatcher.mock.calls).toEqual(expected);
});
