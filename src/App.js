import { Provider } from "react-redux";
import store from "./ReduxContainer/ReduxStore";
import BookContainer from "./ReduxContainer/BookContainer";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer />
    </div>
    </Provider>
  );
}

export default App;
