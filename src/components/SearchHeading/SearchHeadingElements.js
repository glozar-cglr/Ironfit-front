import styled from 'styled-components';

export const General = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
`;

export const SearchPageInfo = styled.div`
    padding: 20px;
`;

export const SearchResultsP = styled.p`
    margin-bottom: 10px;
    font-size: 14px;

`;

export const SearchResultsH1 = styled.h1`
    margin-bottom: 30px;

`;

export const SRButtonContainer = styled.div`
    display: flex;
    max-width: 400px;
    justify-content:space-between;
`;

export const SearchResultsButton = styled.button`
    display: flex;
    flex:1;
    align-items: center;
    max-width: fit-content;
    padding: 10px 20px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 999px;
    background-color:white;
    margin: 5px;
`;

