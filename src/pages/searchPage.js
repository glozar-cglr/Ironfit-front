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
                img = "https://www.google.com/url?sa=i&url=https%3A%2F%2Feminenceorganics.com%2Fca%2Fblog%2F2018%2F05%2F23%2Facne-face-map-what-are-your-breakouts-telling-you&psig=AOvVaw0KW2CIqE2q2S9yarLVay35&ust=1610509585377000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCmuvG9le4CFQAAAAAdAAAAABAD"
                location= "Classes in Lima, Peru"
                title = "Best Classes in town"
                description = "This is a test of a small description... Lorem Lorem Lorem"
                star = "4.5"
                Price = "ZZ USD per session"
                total = "Monthly Subs = 150ZZ"

            />
        </>
    )
}

export default SearchPage;