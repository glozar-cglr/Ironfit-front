import styled from 'styled-components';

export const SRContainer = styled.div`
    display: flex;
    position: relative;
    margin: 20px;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    cursor: pointer;

    &:hover{
        opacity:0.8;
    }
`;

export const SRImage = styled.img`
    height: 200px;
    max-width: 350px;
    border-radius: 10px;
    overflow: hidden;
`;

export const SRTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
`;

export const SRInfoTop = styled.div`
    width: 40vw;

    & > h3 {
        font-weight: 300;
        margin-top: 10px;
    }

    & > p {
        margin-bottom: 10px;
        font-size: 13px;
        color: gray;
    }
`;

export const SRInfoBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SRStars = styled.div`
    display:flex;
    align-items:center;

    & > p {
        margin-left: 10px;
        font-size: 20px;
    }
`;

export const SRPrice = styled.div`
    text-align: right;
    
`;
