import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';

function App() {
  const items = [{ id: 1, name: "Test1" },
                 { id: 2, name: "Test2" }];
  return (
    <div className="App">  
        <ListComponent items={items} />
    </div>
  );
}

export default App;
