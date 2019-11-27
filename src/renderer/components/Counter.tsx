import * as React from "react";
import { Button, Grid } from "@material-ui/core";
import { CounterState } from "renderer/modules/Counter";
import { CounterActionDispatcher } from "../dispatcher/Counter";

/**
 *
 *
 * @interface CounterProps
 */
export interface CounterProps {
    state: CounterState;
    actions: CounterActionDispatcher;
}

/**
 * Counter Component.
 */
export class Counter extends React.Component<CounterProps, {}> {
    public constructor(props: CounterProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                alignItems={"center"}
                justify={"center"}
                style={{ width: "100%" }}
            >
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <h1>Hello React World! </h1>
                    <h2>{this.props.state.counter}</h2>
                    <Button
                        onClick={this.props.actions.onClickIncrement}
                        variant={`contained`}
                        color={"primary"}
                    >
                        increment
                    </Button>
                    &emsp;
                    <Button
                        onClick={this.props.actions.onClickDecrement}
                        variant={`contained`}
                        color={"secondary"}
                    >
                        decrement
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
