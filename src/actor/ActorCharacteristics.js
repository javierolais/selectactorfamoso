import React from 'react'
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const ActorCharacteristics = ({navigate, profile_path, popularity, gender, name}) => {

    const handleReset = () => {
        navigate('/'); //Regresamos a la pantalla para elegir una nueva imagen de un actor famoso;
    }

    return (
        <>
            <div>
                <Button type="primary" icon={<ArrowLeftOutlined />} style={{ marginTop: '6px', marginLeft: '8px' }} onClick={handleReset} >Regresar </Button>
            </div>
            <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                style={{ width: '100px', objectFit: 'contain', paddingTop: '13px', paddingLeft: '0px', marginLeft: '8px' }}
            />
            <p style={{ paddingLeft: '19px' }}> {name} </p>
            <p style={{ paddingLeft: '19px', backgroundColor: '#F8D88F', width: '89px', marginLeft: '12px' }}> {gender === 2 ? 'Hombre' : 'Mujer'} </p>
            <p style={{ paddingLeft: '19px' }}>Popularidad: {popularity}</p>
        </>
    )
}
