import React from 'react'

//Destructuring the Description object to get the items out of it
const Description = ({ heightpok, weightpok, pokstat1, pokstat2, pokstat3, pokstat4, pokstat5, pokstat6, posbs1, posbs2, posbs3, posbs4, posbs5, posbs6 }) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        // Creating a table to accomodate all the information needed to display
        <div className="desc">
            <table className="table table-hover table-striped">
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td>{heightpok * 10} cm.</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{weightpok * 10} cm.</td>
                    </tr>
                    <tr>
                        <td>{capitalizeFirstLetter(pokstat1)}</td>
                        <td>{posbs1}</td>
                    </tr>
                    <tr>
                        <td>{capitalizeFirstLetter(pokstat2)}</td>
                        <td>{posbs2}</td>
                    </tr>
                    <tr>
                        <td>{capitalizeFirstLetter(pokstat3)}</td>
                        <td>{posbs3}</td>
                    </tr>
                    <tr>
                        <td>{capitalizeFirstLetter(pokstat4)}</td>
                        <td>{posbs4}</td>
                    </tr>
                    <tr>
                        <td>{capitalizeFirstLetter(pokstat5)}</td>
                        <td>{posbs5}</td>
                    </tr>
                    <tr>
                        <td>{capitalizeFirstLetter(pokstat6)}</td>
                        <td>{posbs6}</td>
                    </tr>
                </tbody>
            </table>



        </div>
    )
}

export default Description
