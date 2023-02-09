
export default function pokemons({className, name, img_url, id, nameBtn }) { 


    const consola = (event) => { 
        console.log(name);
    } 

    return ( 

        <div className= {className}> 
            <h1>{name}</h1> 
            <img src={img_url} alt="img" /> 
            <p>{id}</p> 
            <button onClick={consola}>{nameBtn}</button> 
        </div>
    )
    
}