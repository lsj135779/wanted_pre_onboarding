import "./App.css";
import { Toggle } from "./component/Toggle";
import { Modal } from "./component/Modal";
import { Tab } from "./component/Tab";
import { Tag } from "./component/Tag";
import { Autocomplete } from "./component/Autocomplete";
import { ClickToEdit } from "./component/ClickToEdit";

function App() {
  return (
    <div id="container">
      <div className="box">
        <div className="title">Toggle</div>
        <Toggle />
      </div>
      <div className="box">
        <div className="title">Modal</div>
        <Modal />
      </div>
      <div className="box">
        <div className="title">Tab</div>
        <Tab />
      </div>
      <div className="box">
        <div className="title">Tag</div>
        <Tag />
      </div>
      <div className="box">
        <div className="title">Autocomplete</div>
        <Autocomplete />
      </div>
      <div className="box">
        <div className="title">ClickToEdit</div>
        <ClickToEdit />
      </div>
    </div>
  );
}

export default App;
