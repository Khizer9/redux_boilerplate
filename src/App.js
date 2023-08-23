// import { Provider } from "react-redux";
// import store from "./ReduxContainer/ReduxStore";
// import BookContainer from "./ReduxContainer/BookContainer";
import GetAxios from "./Axios/GetAxios";
import PostAxios from "./Axios/PostAxios";
function App() {
  return (<>
      <GetAxios />
      <PostAxios />
      </> 
    // <Provider store={store}>
    // <div className="App">
    //   <BookContainer />
    // </div>
    // </Provider>
  );
}

export default App;
