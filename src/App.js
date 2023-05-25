import './App.scss';
import Directories from './components/Directories/Directories';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';
import NodeEditor from './components/NoteEditor/NoteEditor';


function App() {
  return (
    <div className="App">
      {/* <NavigationPanel/> */}
      <NodeEditor/>
      <Directories />
    </div>
  );
}

export default App;
