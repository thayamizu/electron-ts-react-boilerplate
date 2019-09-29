import * as ReduxActions from "redux-actions";

// Counter State Type
export interface CounterState {
    counter: number;
    index: n;
}

/**
 *
 *
 * @export
 * @class CounterModel
 */
export class CounterModel {
    // State of Counter
    private state: CounterState;

    /**
     *Creates an instance of CounterModel.
     * @memberof CounterModel
     */
    public constructor(state: CounterState) {
        this.state = state;
    }

    /**
     * Increment counter
     *
     * @returns {CounterModel}
     * @memberof CounterModel
     */
    public increment(): CounterModel {
        this.state.counter++;
        return new CounterModel(this.state);
    }

    /**
     * Decrement counter
     *
     * @returns {CounterModel}
     * @memberof CounterModel
     */
    public decrement(): CounterModel {
        this.state.counter--;
        return new CounterModel(this.state);
    }

    /**
     * Get counter state.
     *
     * @returns {CounterState}
     * @memberof CounterModel
     */
    public getState(): CounterState {
        return { ...this.state };
    }
}

/**
 * Counter Action Type Name
 *
 * @export
 * @enum {number}
 */
export enum CounterActionNames {
    Increment = "Counter/Increment",
    Decrement = "Counter/Decrement"
}

// Increment Action
export const increment = ReduxActions.createAction<void>(
    CounterActionNames.Increment
);

// Decrement Action
export const decrement = ReduxActions.createAction<void>(
    CounterActionNames.Decrement
);

export const counterReducer = ReduxActions.handleActions<CounterModel, void>(
    {
        [CounterActionNames.Increment]: (state: CounterModel): CounterModel => {
            return state.increment();
        },

        [CounterActionNames.Decrement]: (state: CounterModel): CounterModel => {
            return state.decrement();
        }
    },
    new CounterModel({ counter: 0 })
);
