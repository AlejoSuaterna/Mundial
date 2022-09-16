import './App.css';
import NavBar from './components/NavBar/NavBar';
import PartidosListContainer from './components/PartidosFold/PartidosListContainer';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <PartidosListContainer/>
      </div>
    </div>
  );
}
export default App;
