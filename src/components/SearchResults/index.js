import React from 'react';
import { SRContainer, SRImage, SRTextDiv, SRInfoTop, SRInfoBottom, SRInfoTopH3, SRInfoTopP} from './SearchResultsElements'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <SRContainer>
            <SRImage src={img} alt=""/>
            <SRTextDiv>
                <SRInfoTop>
                    <SRInfoTopP>{location}</SRInfoTopP>
                    <SRInfoTopH3>{title}</SRInfoTopH3>
                    <SRInfoTopP>_____</SRInfoTopP>
                    <SRInfoTopP>{description}</SRInfoTopP>
                </SRInfoTop>
                <SRInfoBottom>

                </SRInfoBottom>
            </SRTextDiv>
        </SRContainer>
    )
};

export default SearchResult