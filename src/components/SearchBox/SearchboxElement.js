import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    max-width: fit-content;
    padding: 10px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 999px;
    `;

export const SearchSpace = styled.input`
    border: none;
    padding: 10px;
    outline-width: 0;
    ${'' /* width: 250px; */}

    `;

