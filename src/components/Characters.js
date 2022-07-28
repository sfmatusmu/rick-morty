export default function Characters(props) {
    
    const { characters, setCharacters } = props;
    const resetCharacters = () => {
        setCharacters(null);
    }

return (
    <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={ resetCharacters } >Regresar al Home</span>
        <div classname="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={ index }>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h4>{character.name}</h4>
                        <h6>{character.status === "Alive" ?(
                            <>
                            <span className="alive" />
                            Alive
                            </>
                        ) : (
                            <>
                            <span className="dead" />   
                            Dead                         
                            </>
                        )}
                        </h6>
                        <p className="text-grey"><span>Episodios: </span>
                        <span>{character.episode.length}</span></p>
                        <p className="text-grey"><span>Especie: </span>
                        <span>{character.species}</span></p>
                    </div>
                </div> 
            ))}
        </div>
        <span className="back-home" onClick={ resetCharacters }>Regresar al Home</span>
    </div>
    );
}