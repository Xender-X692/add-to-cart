import './App.css';
import { ItemProvider } from './context/ItemContext';
import View from './View';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <View/>
      </ItemProvider>
      {/* <h1>hello fuck you</h1> */}
    </div>
  );
}

export default App;
