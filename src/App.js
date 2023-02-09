import './App.css'; 
import Details from "./Componente/DetailPokemons/Details"; 
import pokemons from './Componente/Pokemons/Pokemons'; 


function App() { 


  return (
    <div className="App"> 
    {pokemons.map((pok, i) => { 
      return ( 
      <Details 
        name={pok.name} 
        img_url = {pok.img} 
        id = {pok.id} 
        className = "cadaPoke" 
        nameBtn = {pok.name} 
        />) 
    })} 
    </div>
  );
}




export default App;
