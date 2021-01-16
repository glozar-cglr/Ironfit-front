import React, {useState, useEffect} from 'react';
import Searchbox from '../components/SearchBox';
import SearchHeading from '../components/SearchHeading';
import SearchResult from '../components/SearchResults';
import {getTrainers} from '../services/trainersWs';


const SearchPage = () => {

    const [trainers, setTrainers] = useState([]);
    const [hasError, setHasError] = useState(false)


    useEffect(() => {
        getTrainers().then(
            res => {
                console.log(res);
                setTrainers(res.data.result);

            }
    ).catch(err => (setHasError(true) &&
    console.log("error", err.response)))
},[])
    
    return(
        <>  
            <Searchbox/>
            <SearchHeading/>
            <SearchResult
                trainer_id = "1snasdfj2dasdjf"
                profile_picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzsNTpNotGz89__s5dQdchARqDEUm6OiosQ&usqp=CAU"
                city= "Classes in Lima, Peru"
                name = "William Hunt"
                description = "Three years working as a soccer coach for Wigan Athletic Community Trust, whilst studying for my sports degree. I also spent three months coaching children aged 7-16 at a summer camp in Cleveland, GA, USA. Whilst gaining my FA Level 2 Coaching Badge I ran some socc..."
                rank = "4.5"
                trial = "12"
                price = "89"

            />
            <SearchResult
                trainer_id = "1snas293hjs9df0324sdfdfj2dasdjf"
                profile_picture = "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                city= "Classes in Lima, Peru"
                name = "Brian Nando"
                description = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings"
                rank = "4.5"
                trial = "12"
                price = "89"

            />
            {hasError ? <div>Error occured.</div> :
                (trainers.map((trainer) => (
                    <SearchResult {...trainer} name= {trainer._user.name}
                        profile_picture = {trainer._user.profile_picture}
                        city = {trainer._user.city}
                        country = {trainer._user.country}
                    />)
            ))
            }
        </>
    )
}

export default SearchPage;