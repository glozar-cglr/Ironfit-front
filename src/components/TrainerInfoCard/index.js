import React from 'react';
import { General, MainPicture } from './TrainerInfoCardElements'

function TrainerInfoCard(
    {
        name,
        last_name,
        sport,
        city,
        country,
        methodology,
        description,
        profile_picture,
        lessons,
        students,
        rank,
        img
    }
) {
    return(
        <>
            <General>
                <MainPicture src={profile_picture} alt=""/>

            </General>
        </>
    )
}

export default TrainerInfoCard