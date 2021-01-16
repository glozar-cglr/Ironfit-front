import styled from 'styled-components';

export const General = styled.div`
    box-shadow: 0 2px 12px rgba(0,40,117,.06);
    border-radius: 4px;
    width: 100%;
    background-color: white;
`;

export const BookCards = styled.div`
    box-sizing: border-box;
    display: block;
`;

export const BookCardBox = styled.div`
    padding: 5px;
    display: flex;
    box-sizing: border-box;
`;

export const BookCard = styled.div`
    width: 100%;
    min-height: 71px;
    padding: 0 15px;
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    top: 0;
    right: 0;

    & > .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    };

    & > .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
`;

export const ContactButton = styled.button`
    width: 100%;
    height: 42px;
    margin: 0 20px 20px;
    color: #333;
    background-color: #ffe116;
    text-shadow: none;
    box-shadow: none;
    outline: 0;
    position: relative;
    display: inline-block;
    font-weight: 500;
`;