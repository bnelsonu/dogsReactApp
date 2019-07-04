import React from "react";
import { Card, CardBody, CardHeader } from 'reactstrap';
import './RazasMain.css';
import { Link } from 'react-router-dom';

//en este componente se manejan los links hacia las razas o subrazas segun se le de clic
const RazaItem = (props) => {
    return (

        <Card className="Card-main" style={{ width: "40%", height: "60%" }}>
            <CardHeader style={{ backgroundColor: '#A0E8AF' }}>
                <Link to={{
                    pathname: '/detail',
                    state: {
                        raza: props.raza
                    }
                }}>
                    {props.raza}
                </Link>
            </CardHeader>
            <CardBody>
                {
                    props.subrazas.map(subraza =>
                        <div>
                            <Link to={{
                                pathname: '/detail',
                                state: {
                                    raza: props.raza,
                                    subraza: subraza
                                }
                            }}>
                                {subraza}

                            </Link>
                        </div>
                    )
                }
            </CardBody>
        </Card>
    );
}

export default RazaItem;