"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmount = exports.decrement = exports.increment = void 0;
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const 초기값 = { count: 0, user: "kim" };
const counterSlice = (0, toolkit_1.createSlice)({
    name: "counter",
    initialState: 초기값,
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        },
    },
});
let store = (0, toolkit_1.configureStore)({
    reducer: {
        counter1: counterSlice.reducer,
    },
});
//수정방법 만든거 export
_a = counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
client_1.default.createRoot(document.getElementById("root")).render(<react_redux_1.Provider store={store}>
    <App_tsx_1.default />
  </react_redux_1.Provider>);
