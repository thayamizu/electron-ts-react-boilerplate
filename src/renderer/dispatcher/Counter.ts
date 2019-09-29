import * as Redux from "redux";
import * as Actions from "renderer/modules/Counter";

/**
 *
 *
 * @export
 * @class CounterActionDispatcher
 */
export class CounterActionDispatcher {
    private dispatch: Redux.Dispatch<Redux.Action<string>>;

    /**
     *Creates an instance of CounterController.
     * @param {Redux.Dispatch<Redux.Action<string>>} dispatch
     * @memberof CounterController
     */
    public constructor(dispatch: Redux.Dispatch<Redux.Action<string>>) {
        this.dispatch = dispatch;
    }

    /**
     * On click decrment button.
     *
     */
    public onClickDecrement = (event: React.MouseEvent<HTMLElement>): void => {
        this.dispatch(Actions.decrement());
    };

    /**
     * On click increment button.
     *
     */
    public onClickIncrement = (event: React.MouseEvent<HTMLElement>): void => {
        this.dispatch(Actions.increment());
    };
}
