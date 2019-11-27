import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/Counter";
import * as Store from "./Store";
import * as styles from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const appRoot = document.getElementById("app");
const theme = createMuiTheme({});
render(
    <Provider store={Store.counterStore}>
        <styles.ThemeProvider theme={theme}>
            <App />
        </styles.ThemeProvider>
    </Provider>,
    appRoot
);
