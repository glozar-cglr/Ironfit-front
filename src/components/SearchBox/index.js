import React from 'react';
import { Container, SearchSpace } from './SearchboxElement'
import SearchIcon from '../../images/Search_Icon.svg'

function Searchbox() {
    return(
        <Container>
            <SearchSpace/>
            <img src={SearchIcon} height="25px"/>
        </Container>
    )
}

export default Searchbox