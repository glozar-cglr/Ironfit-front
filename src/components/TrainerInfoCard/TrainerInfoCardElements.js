import styled from 'styled-components';

export const General = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 12px rgba(0,40,117,.06);
    background-color: white;
`;

export const MainPicture = styled.img`
    width: 100%;
    height: calc(100vh-16px);
    overflow: hidden;
`;

export const TitleSection = styled.div`
    display: flex;
    justify-content: center;
    height: 200px;

`;

export const ProfilePicture = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    padding: 30px;
    box-sizing: border-box;
`;

export const NamingSection = styled.div`
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    line-height: 1.5715;
`;

export const NamingSectionP1 = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;   
`;

export const NameDiv = styled.div`
    padding-top: 30px;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const NameH1 = styled.h1`
    margin-bottom: 3px;
    font-size: 23px;
    font-weight: 500;
    color: #333;
`;

export const PersonalInfoDiv = styled.div`
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 300;
    font-style:normal;
    font-stretch: normal;
    line-height: 25px;
    letter-spacing: normal;
    text-align: left;
    color: #777;
`;

export const yellowBar = styled.div`
    width: 15px;
    border-bottom: 2px solid #fce11a; 
    border-radius: 1px;
`;

export const NameRight = styled.div`
    width: 150px;
    padding-top: 20px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

`;

export const IconLike = styled.div`
    display: flex;
    flex-directio: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const NameRightBody = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    light-height:26px;
    font-size:12px;
    color: #333;
`;

export const Stars = styled.div`
    margin-top:6px;
    margin-bottom: 6px;
`;

export const StarBox = styled.div`
    height: 12px;
    display: flex;
    flex-direction:row;
    align-items: center;
`;

export const Teaches = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TeachesTitle = styled.div`
    margin-top: 4px;
    margin-right: 15px;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 300;
    color: #777;
    text-transform: uppercase
`;

export const TeachesSport = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

export const AboutTeacher = styled.div`
    margin-bottom: 30px;
    padding-top: 30px;
    margin: 0 30px 40px;
    border-top: 1px solid #ddd;
    white-space: pre-wrap;
`;

export const CardTitle = styled.h2`
    margin-bottom: 20px;
    height: 27px;
    margin-top: 0;
    font-size: 23px;
    font-weight: 500;
    color: #333;
`;

export const AboutContent = styled.div`
    line-height: 21px;
    word-break: break-word;
    box-sizing: border-box
`;
