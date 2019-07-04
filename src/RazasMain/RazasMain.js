import React, { Component } from 'react';
import axios from 'axios';
import RazaItem from './RazaItem';
import './RazasMain.css';

const ALL_DOGS = "https://dog.ceo/api/breeds/list/all";


export default class App extends Component {

    state = {
        loading: true,
        allBreeds: null,
        error: null    
    };

    componentDidMount() {

       const breeds = [];
    

        axios.get(ALL_DOGS)
            .then(result => {

                const perros = result.data["message"]; //la lista de razas del field message del objeto principal
                const keys = Object.keys(perros); //los keys para cada uno de los arrays de subrazas

                for (let i = 0; i < keys.length; i++) {
                    // para mayor facilidad crear un objeto con la raza y un array de subrazas luego meter cada objeto en un array

                    let obj = {
                        "raza":keys[i],
                        "subrazas" : perros[keys[i]]
                    };
                   
                    breeds.push(obj); 

                }
                // actualizo el estado
                if(breeds){
                    this.setState({allBreeds:breeds})
                }

            }

            ).catch(error => this.setState({
                error,
                isLoading: false
            }));


    }

    render() {
        return (
            <div>
            
             {this.state.isLoading || !this.state.allBreeds ?

                <div>loading...</div> : 
                
                <div>
                     <h1>Dog Breeds</h1>
                    {this.state.allBreeds.map(breed =>
                     
                     <RazaItem raza={breed.raza} subrazas={breed.subrazas} />)}
                     
                </div>
            }
            </div>

        );

    }
}