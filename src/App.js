import { useState , useEffect} from "react";
import axios from 'axios';
import PokemonList from "./pokemonList";
import Header from "./Header";
import Pagination from "./pagination";

function App() {
  const [loading, setLoading] = useState(false);
  const [network, setNetwork] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  function goToNext(){
    setCurrentPageUrl(nextPageUrl)
  }
  
  function goToPrev(){
    setCurrentPageUrl(prevPageUrl)
  }

  useEffect(() =>{
    setLoading(true); 
    axios.get(currentPageUrl).then(res => {
    setLoading(false); 
    setPokemon(res.data.results.map(poki => poki.name))
    setNextPageUrl(res.data.next);
    setPrevPageUrl(res.data.previous);
    }).catch(e=> {
      setLoading(false); 
      if(e.message === "Network Error") setNetwork(false);
    })
  }, [currentPageUrl])
  
  return (
    <div>
      <Header />
      <div style={{textAlign: 'center', paddingTop: '40px'}}>{ loading ? <h3>loading...</h3> : network ? <PokemonList pokemon={pokemon} />: <h3>Please turn on connection</h3>}</div>
      <Pagination next={goToNext} prev={goToPrev}/>
    </div>
  );
}

export default App;
