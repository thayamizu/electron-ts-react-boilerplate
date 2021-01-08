import * as ReactRedux from "react-redux";
import * as Redux from "redux";
import { Counter } from "renderer/components/CounterComponent";
import { StoreType } from "renderer/Store";
import { CounterActionDispatcher } from "renderer/containers/CounterActionDispatcher";

function mapStateToProps(store: StoreType) {
    return { ...store.counter.getState() };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<Redux.Action>) {
    return { ...new CounterActionDispatcher(dispatch) };
}
export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Counter);
