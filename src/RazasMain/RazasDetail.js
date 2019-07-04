import React, { Component } from 'react';
import { Card, CardHeader, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import './RazasMain.css';
import axios from 'axios';

//este componente es para desplegar las fotos de las razas y subrazas
export default class RazasDetail extends Component {


    constructor(props) {
        super(props);
    }

    state = {
        loading: true,
        subraza: "",
        raza: "",
        imagenes: [],
        error: null,
    };


    componentDidMount() {
        const { subraza } = this.props.location.state;
        const { raza } = this.props.location.state;

        this.setState({
            subraza: subraza,
            raza: raza,
        })

        //obtener datos de la raza q pasé por el link

        console.log("subraza", subraza);
        console.log("raza", raza);

        if (subraza) {
            axios.get(`https://dog.ceo/api/breed/${raza}/${subraza}/images/random/10`)
                .then(result => {

                    let imagenes = result.data["message"]

                    this.setState({
                        imagenes: imagenes
                    })
                    console.log("Este es el resultado", result);

                }).catch(error => this.setState({
                    error,
                    isLoading: false
                }));
        }

        else {


            axios.get(`https://dog.ceo/api/breed/${raza}/images/random/10`)
                .then(result => {

                    let imagenes = result.data["message"]

                    this.setState({
                        imagenes: imagenes
                    })
                    console.log("Este es el resultado", result);

                }).catch(error => this.setState({
                    error,
                    isLoading: false
                }));

        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.raza}</h1>
                    <h2>{this.state.subraza}</h2>
                    <Link className="link"
                        to="/">
                        Breeds
                    </Link>
                </div>
                {this.state.isLoading || !this.state.imagenes ?
                    <div>loading...</div> :

                    this.state.imagenes.map(imagen =>
                        <Card className="Card-main" >
                            <CardHeader style={{ backgroundColor: '#A0E8AF' }}>
                            </CardHeader>
                            <CardImg className="card-img" top width="100%" style={{ width: "150px", height: "150px" }} src={imagen} alt="Card image cap" />
                        </Card>
                    )
                }
            </div>
        );

    }
}