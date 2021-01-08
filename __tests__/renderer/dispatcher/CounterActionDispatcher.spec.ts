import { CounterActionDispatcher } from "renderer/containers/CounterActionDispatcher";
import * as CounterModule from "renderer/containers/CounterModule";

test("CounterActionDispatcher", () => {
    const dispatcher = jest.fn();
    const dispatch = new CounterActionDispatcher(dispatcher);
    dispatch.onClickDecrement({} as any);

    const expected = [[CounterModule.decrement()]];
    expect(dispatcher.mock.calls).toEqual(expected);
});

test("CounterActionDispatcher", () => {
    const dispatcher = jest.fn();
    const dispatch = new CounterActionDispatcher(dispatcher);
    dispatch.onClickIncrement({} as any);

    const expected = [[CounterModule.increment()]];
    expect(dispatcher.mock.calls).toEqual(expected);
});
