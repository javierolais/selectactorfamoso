import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getActorName } from '../helpers/UseFetch';
import 'antd/dist/antd.css';
import './Upload.css';
import { useNavigate } from 'react-router-dom';
import { MoviesList } from './MoviesList';
import { ActorCharacteristics } from './ActorCharacteristics';


export const WhoIs = () => {
    //Cachamos y destructuramos el actorName con el useParams;
    const { actorName } = useParams();
    const [actor, setActor] = useState({
        validador: false,
        data: []
    }); //Hook para renderizar el JSX con las características del actor seleccionado;

    const navigate = useNavigate();

    useEffect(() => {
        const actorSelected = async () => {
            try {
                const resultActor = await getActorName(actorName);
                if (resultActor.length === 0) {
                    alert(`No existen peliculas registradas en la API The Movie Database, con el actor: ${actorName}. Se te regresará a la pantalla anterior para que escojas un nuevo actor`);
                    navigate('/'); //Regresamos a la pantalla para elegir una nueva imagen de un actor famoso;
                }
                else {
                    setActor({ validador: true, data: resultActor });
                }
                console.log(resultActor);
            }
            catch (error) {
                console.log(error);
            }
        }

        actorSelected();
    }, [actorName]);

    const { validador, data } = actor;

    return (
        <div className="container">

            {
                validador && (

                    <>
                        <div className="item item1" style={{ borderRight: 'solid 1px black' }}>
                            <div>
                                <ActorCharacteristics 
                                    navigate={navigate} 
                                    profile_path={data[0].profile_path} 
                                    popularity={data[0].popularity}
                                    gender={data[0].gender} 
                                    name={data[0].name} 
                                />
                            </div>
                        </div>
                        <div className="item item2">
                            <h3> Películas </h3>
                            {
                                data[0].known_for.map((actor, index) => {
                                    return (
                                        <MoviesList 
                                            key={index} 
                                            title={actor.title} 
                                            vote_average={actor.vote_average} 
                                            overview={actor.overview} 
                                            release_date={actor.release_date} 
                                            poster_path={actor.poster_path} 
                                        />
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </div >
    );

}
