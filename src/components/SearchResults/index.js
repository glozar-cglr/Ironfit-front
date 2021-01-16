/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { SRGeneral, SRContainer, SRImage, SRTextDiv, SRInfoTop, SRInfoBottom, SRStars, SRPrice} from './SearchResultsElements'

function SearchResult({
    _id,
    profile_picture,
    city,
    title,
    description,
    star,
    trial,
    price
}) {
    return (
        <SRGeneral>
            <SRContainer to={"/find-trainer/" + _id}>
                <SRImage src={profile_picture} alt=""/>
                <SRTextDiv>
                    <SRInfoTop>
                        <p>{city}</p>
                        <h3>{title}</h3>
                        <p>_____</p>
                        <p>{description}</p>
                    </SRInfoTop>
                    <SRInfoBottom>
                        <SRStars>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Star_full.svg" height="30px"/>
                            <p><strong>{star}</strong></p>
                        </SRStars>
                        <SRPrice>
                            <h2>{"Test Lesson USD " + trial}</h2>
                            <p>{"Classes Cost USD "+ price}</p>
                        </SRPrice>
                    </SRInfoBottom>
                </SRTextDiv>
            </SRContainer>
        </SRGeneral>
    )
};

export default SearchResult