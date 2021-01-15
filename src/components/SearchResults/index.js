/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { SRGeneral, SRContainer, SRImage, SRTextDiv, SRInfoTop, SRInfoBottom, SRStars, SRPrice} from './SearchResultsElements'

function SearchResult({
    trainer_id,
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <SRGeneral>
            <SRContainer to={"/find-trainer/" + trainer_id}>
                <SRImage src={img} alt=""/>
                <SRTextDiv>
                    <SRInfoTop>
                        <p>{location}</p>
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
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </SRPrice>
                    </SRInfoBottom>
                </SRTextDiv>
            </SRContainer>
        </SRGeneral>
    )
};

export default SearchResult