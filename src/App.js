import './App.scss';
import Directories from './components/Directories/Directories';
import NodeEditor from './components/NoteEditor/NoteEditor';


function App() {
  return (
    <div className="App">
      <NodeEditor/>
      <Directories />
    </div>
  );
}

export default App;
