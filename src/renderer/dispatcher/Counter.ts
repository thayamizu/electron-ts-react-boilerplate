import * as ReduxActions from "redux-actions";
import * as Actions from "renderer/modules/Counter";

/**
 *
 *
 * @export
 * @class CounterActionDispatcher
 */
export class CounterActionDispatcher {
    private dispatch: (action: ReduxActions.Action<void>) => void;

    /**
     *Creates an instance of CounterController.
     * @param {Redux.Dispatch<Redux.Action<void>>} dispatch
     * @memberof CounterController
     */
    public constructor(dispatch: (action: ReduxActions.Action<void>) => void) {
        this.dispatch = dispatch;
    }

    /**
     * On click decrment button.
     *
     */
    public onClickDecrement = (): void => {
        this.dispatch(Actions.decrement());
    };

    /**
     * On click increment button.
     *
     */
    public onClickIncrement = (): void => {
        this.dispatch(Actions.increment());
    };
}
