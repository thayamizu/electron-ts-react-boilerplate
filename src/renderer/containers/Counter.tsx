import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import * as Store from "renderer/Store";
import { Counter } from "renderer/components/Counter";
import { CounterActionDispatcher } from "renderer/dispatcher/Counter";

function mapStateToProps(state: Store.StoreType) {
    return { state: state.getState() };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<Redux.Action>) {
    return { actions: new CounterActionDispatcher(dispatch) };
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Counter);
