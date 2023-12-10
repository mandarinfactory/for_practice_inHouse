"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const main_1 = require("./main");
function App() {
    const 꺼내온거 = (0, react_redux_1.useSelector)((state) => state);
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<div className="App">
      {꺼내온거.counter1.user}
      <button onClick={() => {
            dispatch((0, main_1.increment)());
        }}>
        버튼
      </button>
    </div>);
}
exports.default = App;
