import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import Counter from "renderer/containers/CounterContainer";

/**
 * Counter Component.
 */
const App = () => {
    return (
        <div>
            <Typography variant="h3">React-Redux Boilerplate</Typography>
            <Grid
                container
                alignItems={"center"}
                justify={"center"}
                style={{ width: "100%" }}
            >
                <Grid item xs>
                    <Counter />
                </Grid>
            </Grid>
        </div>
    );
};
export default App;
