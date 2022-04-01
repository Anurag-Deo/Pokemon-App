import Description from './Description'

//Destructuring the pokemonthumbnail object to get its everything
const PokemonThumbnail = ({ id, name, image, type, height, weight, stat1, stat2, stat3, stat4, stat5, stat6, bs1, bs2, bs3,
    bs4, bs5, bs6 }) => {
    //Selecting the colours for different types of pokemon
    var bgcolor = ""
    if (type === 'fire') {
        bgcolor = 'danger'
    }
    else if (type === 'grass') {
        bgcolor = 'success'
    }
    else if (type === 'water') {
        bgcolor = 'water'
    }
    else if (type === 'bug') {
        bgcolor = 'bug'
    }
    else if (type === 'electric') {
        bgcolor = 'electric'
    }
    else if (type === 'poison') {
        bgcolor = 'poison'
    }
    else if (type === 'fairy') {
        bgcolor = 'fairy'
    }
    else if (type === 'ground') {
        bgcolor = 'ground'
    }
    else if (type === 'rock') {
        bgcolor = 'rock'
    }
    else if (type === 'phychic') {
        bgcolor = 'phychic'
    }
    else if (type === 'ghost') {
        bgcolor = 'ghost'
    }
    else {
        bgcolor = 'else'
    }
    return (

        <>
            {/* Adding a card for displaying pokemon */}
            <div className="col">
                <div className={`card h-100 bg-${bgcolor}`}>
                    <img src={image} className="card-img-top h-100" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name.toUpperCase()}</h5>
                        <h5 className="card-title">Type: {type}</h5>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${name}`}>Know More</button>
                        {/* Modal for displaying the other information  */}
                        <div className="modal fade" id={name} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className={`modal-dialog  bg-${bgcolor}`}>
                                <div className={`modal-content  `}>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{name.toUpperCase()}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* A card inside the modal to accomodate the information */}
                                        <div className={`card bg-${bgcolor}`}>
                                            <img src={image} className="card-img-top" alt={name} style={{ height: '212px' }} />
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h5 className="card-title">{name.toUpperCase()}</h5>
                                                    <h5 className="card-title">Type: {type}</h5>
                                                </div>
                                                {/* <p className="card-text"> */}
                                                    {/* A call for the Description to make a table of these */}
                                                    <Description weightpok={weight} heightpok={height} pokstat1={stat1}
                                                        pokstat2={stat2}
                                                        pokstat3={stat3}
                                                        pokstat4={stat4}
                                                        pokstat5={stat5}
                                                        pokstat6={stat6}
                                                        posbs1={bs1}
                                                        posbs2={bs2}
                                                        posbs3={bs3}
                                                        posbs4={bs4}
                                                        posbs5={bs5}
                                                        posbs6={bs6}
                                                    />
                                                {/* </p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PokemonThumbnail
