import { useEffect, useState } from "react";
import Character from "./Character";

function Navpage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page:{props.page}</p>
      <button
        className="btn btn-primary btn-sm "
        onClick={() => {
          props.setPage(props.page + 1);
        }}
      >
        Next Page {props.page + 1}
      </button>
      {props.page == 1 ? (
        ""
      ) : (
        <button
          className="btn btn-primary btn-sm "
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        >
          Previous Page {props.page - 1}
        </button>
      )}
    </header>
  );
}

function CharactersList() {
  //Me permiten rendear o crear un componente con logica al inicio del programa
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  //key={id} nos hace saber que cada objeto que se muestra en la pagina nos pide que le demos una clave unica Siempre es asi con map()

  return (
    <div className="container ">
      <Navpage page={page} setPage={setPage}></Navpage>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {characters.map((user) => {
            return (
              <div className="col-md-4" key={user.id}>
                <Character user={user}></Character>
              </div>
            );
          })}
        </div>
      )}
      <Navpage page={page} setPage={setPage}></Navpage>
    </div>
  );
}

export default CharactersList;
