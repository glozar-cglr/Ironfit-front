import React from 'react';
import TrainerInfoCard from '../components/TrainerInfoCard';
import {getTrainerDetail} from '../Services/trainersWs';


const TrainerPage = (

 info = {
    name: "TestName",
    last_name: "TestLastName",
    sport: "sport selected",
    city: "city",
    country: "country",
    methodology: "methodology",
    description: "This should be a long description, but I don't have time to try find any option.... LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM",
    profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzsNTpNotGz89__s5dQdchARqDEUm6OiosQ&usqp=CAU",
    lessons: 530,
    students: 34,
    rank: 4.76,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Star_full.svg"
}


) => {

    return (
        <> 
            <div style={{width:'100%',  display:'flex', "justify-content":"center"}}>
                <div style={{width: '66%', 'max-width': 750}}> 
                    {/* Acá van los temas que que van a ir a la izquierda */}
                    <TrainerInfoCard
                        name={info.name}
                        last_name={info.last_name}
                        sport={info.sport}
                        city={info.city}
                        country={info.country}
                        methodology={info.methodology}
                        description={info.description}
                        profile_picture={info.profile_picture}
                        lessons={info.lessons}
                        students={info.students}
                        rank={info.rank}
                        img={info.img}
                    />

                </div>
                <div style={{width: '33%', 'max-width': 300, 'margin-left':50}}>
                    {/* Acá van los temas que irían a la derecha */}
                    <p>Test 2</p>
                </div>
            </div>
           
         
         
        </>
    );
};

export default TrainerPage;