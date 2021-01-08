import * as React from "react";
import { Button, Grid, Typography } from "@material-ui/core";

/**
 *
 *
 * @interface CounterProps
 */
export interface CounterProps {
    counter: number;
    onClickIncrement: (event: React.MouseEvent<HTMLElement>) => void;
    onClickDecrement: (event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Counter Component.
 */
export const Counter = ({
    counter,
    onClickIncrement,
    onClickDecrement,
}: CounterProps) => {
    return (
        <Grid>
            {/** カウンタ表示領域 */}
            <Grid container>
                <Grid item xs>
                    <Typography variant="h4" align="center">
                        {counter}
                    </Typography>
                </Grid>
            </Grid>

            {/** カウンタ操作領域 */}
            <Grid container>
                <Grid item xs style={{ padding: 8 }}>
                    <Button
                        fullWidth
                        onClick={onClickIncrement}
                        variant={`contained`}
                        color={"primary"}
                    >
                        increment
                    </Button>
                </Grid>
                <Grid item xs style={{ padding: 8 }}>
                    <Button
                        fullWidth
                        onClick={onClickDecrement}
                        variant={`contained`}
                        color={"secondary"}
                    >
                        decrement
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};
