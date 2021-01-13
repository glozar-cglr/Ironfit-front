import React from 'react';
import { Container, SearchPageInfo, SearchResultsButton, SearchResultsH1, SearchResultsP, SRButtonContainer } from './SearchHeadingElements';

function SearchHeading() {
    return (
        <Container>
            <SearchPageInfo>
                <SearchResultsP>62 Trainers - XX Sports - Choose your preference</SearchResultsP>
                <SearchResultsH1>Available Nearby</SearchResultsH1>
                <SRButtonContainer>
                    <SearchResultsButton>Button 1</SearchResultsButton>
                    <SearchResultsButton>Button 2</SearchResultsButton>
                    <SearchResultsButton>Button 3</SearchResultsButton>
                </SRButtonContainer>
                
            </SearchPageInfo>
        </Container>
    )
};

export default SearchHeading;