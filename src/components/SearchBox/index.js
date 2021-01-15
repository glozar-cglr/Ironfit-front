import React from 'react';
import { GeneralSpace, Container, SearchSpace } from './SearchboxElement'
import SearchIcon from '../../images/Search_Icon.svg'

function Searchbox() {
    return(
        <GeneralSpace>
            <h3>What are you looking for?</h3>
            <Container>
                <SearchSpace/>
                <img src={SearchIcon} height="25px" alt=""/>
            </Container>
        </GeneralSpace>
    )
}

export default Searchbox