import React from 'react';
import { StarOutlined } from '@ant-design/icons';

export const MoviesList = ({ title, vote_average, overview, release_date, poster_path }) => {
    return (
        <div>
            <hr style={{ backgroundColor: '#1890FF !important' }} />
            <div className="average">
                <p> {title}</p>
                <p>
                    {vote_average}/10
                    <StarOutlined style={{ color: '#FEB611' }} />
                </p>
            </div>
            <div style={{ display: 'flex' }}>
                <p>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        style={{ width: '70px' }}
                    />
                </p>
                <p style={{ paddingLeft: '10px' }}>
                    {overview}
                </p>
            </div>

            <label style={{ fontWeight: 'bold' }}> Fecha de estreno: {release_date} </label>
        </div>
    )
}
