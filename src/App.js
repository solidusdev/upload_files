import "./scss/main.scss";
import SingleUpload from "./components/single-upload/single-upload";
import MultiUpload from "./components/multi-upload/multi-upload";

const App = () => {
  return(
    <div className="App">
      <SingleUpload />
      <MultiUpload />
    </div>
  )
};

export default App;
