import React from 'react';
import TrainerBook from '../components/TrainerBook';
import TrainerInfoCard from '../components/TrainerInfoCard';
import {getTrainerDetail} from '../services/trainersWs';


const TrainerPage = (

 info = {
    name: "TestName",
    last_name: "TestLastName",
    sport: "sport selected",
    city: "city",
    country: "country",
    methodology: "Online",
    description: "This should be a long description, but I don't have time to try find any option.... LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM",
    profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzsNTpNotGz89__s5dQdchARqDEUm6OiosQ&usqp=CAU",
    lessons: 530,
    students: 34,
    rank: 4.76,
    img: "https://e3.365dm.com/21/01/1024x768/skysports-man-utd-liverpool_5237523.jpg?20210114163708"
}


) => {

    return (
        <> 
            <div style={{width:'100%',  display:'flex', "justify-content":"center", "padding-top":"50px", "background-color":"#fafafc"}}>
                <div style={{width: '66%', 'max-width': 750}}> 
                    {/* Acá van los temas que que van a ir a la izquierda */}
                    <TrainerInfoCard
                        name="William"
                        last_name="Hunt"
                        sport={["Soccer","Boxing", "Gym"]}
                        city= "New York"
                        country="USA"
                        methodology="Online"
                        description="Three years working as a soccer coach for Wigan Athletic Community Trust, whilst studying for my sports degree. I also spent three months coaching children aged 7-16 at a summer camp in Cleveland, GA, USA. Whilst gaining my FA Level 2 Coaching Badge I ran some soccer sessions with a local Under 9's team & with an Adults 5 a-side team. In 2014, I spent 10 weeks as a soccer coach in New England, working for Challenger Sports. This role involved coaching children of various abilities aged 3 - 16 years old."
                        profile_picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzsNTpNotGz89__s5dQdchARqDEUm6OiosQ&usqp=CAU"
                        lessons="530"
                        students="34"
                        rank= "4.76"
                        img="https://e3.365dm.com/21/01/1024x768/skysports-man-utd-liverpool_5237523.jpg?20210114163708"
                    />

                </div>
                <div style={{width: '33%', 'max-width': 300, 'margin-left':50}}>
                    {/* Acá van los temas que irían a la derecha */}
                    <TrainerBook 
                        trial={15}
                        price={18}
                    />
                </div>
            </div>
           
         
         
        </>
    );
};

export default TrainerPage;