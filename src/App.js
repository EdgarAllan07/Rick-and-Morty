
import './App.css';
import CharactersList from './components/CharactersList';


function App() {

  return (
    <div className="bg-dark text-white">
      <h1 className='text-center display-1 py-1'>Rick And Morty</h1>
      <CharactersList></CharactersList>

    </div>
  );
}

export default App;
