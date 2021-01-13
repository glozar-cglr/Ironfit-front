import React from 'react';
import Searchbox from '../components/SearchBox';
import SearchHeading from '../components/SearchHeading';
import SearchResult from '../components/SearchResults';


const SearchPage = () => {
    
    return(
        <>
            <Searchbox/>
            <SearchHeading/>
            <SearchResult
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzsNTpNotGz89__s5dQdchARqDEUm6OiosQ&usqp=CAU"
                location= "Classes in Lima, Peru"
                title = "Best Classes in town"
                description = "This is a test of a small description... Lorem Lorem Lorem"
                star = "4.5"
                price = "ZZ USD per session"
                total = "Monthly Subs = 150ZZ"

            />
            <SearchResult
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzsNTpNotGz89__s5dQdchARqDEUm6OiosQ&usqp=CAU"
                location= "Classes in Lima, Peru"
                title = "Best Classes in town"
                description = "This is a test of a small description... Lorem Lorem Lorem"
                star = "4.5"
                price = "ZZ USD per session"
                total = "Monthly Subs = 150ZZ"

            />
        </>
    )
}

export default SearchPage;