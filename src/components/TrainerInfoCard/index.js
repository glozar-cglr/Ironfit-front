import React from 'react';
import { General, IconLike, MainPicture, NameDiv, NameH1, NameRight, NameRightBody, NamingSection, NamingSectionP1, PersonalInfoDiv, ProfilePicture, TitleSection, Stars, StarBox, yellowBar, Teaches, TeachesTitle, TeachesSport, AboutTeacher, CardTitle, AboutContent} from './TrainerInfoCardElements';
import {FaHeart, FaStar} from 'react-icons/fa'

function TrainerInfoCard(
    {
        name,
        last_name,
        sport,
        city,
        country,
        methodology,
        description,
        profile_picture,
        lessons,
        students,
        rank,
        img
    }
) {
    return(
        <>
            <General>
                <MainPicture src={img} alt=""/>
                <TitleSection>
                    <ProfilePicture src={profile_picture} alt=""/>
                    <NamingSection>
                        <NamingSectionP1>
                            <NameDiv>
                                <NameH1>{last_name}, {name}</NameH1>
                                <PersonalInfoDiv>
                                    <div>
                                        <span>{methodology}</span>
                                    </div>
                                    <div>
                                        <span>From </span>
                                        <span>{country}</span>
                                    </div>
                                    <div>
                                        <span>Doing classes in </span>
                                        <span>{city}, {country}</span>
                                    </div>
                                </PersonalInfoDiv>
                                <yellowBar/>
                            </NameDiv>
                            <NameRight>
                                <IconLike>
                                    <span><FaHeart/></span>
                                </IconLike>
                                <NameRightBody>
                                    <Stars>
                                        <StarBox>
                                            <FaStar color="#ffe116"/>
                                            <FaStar color="#ffe116"/>
                                            <FaStar color="#ffe116"/>
                                            <FaStar color="#ffe116"/>
                                            <FaStar color="#ffe116"/>
                                            <span style={{"font-size":14, "font-weight":500, color: "#ffe116"}}>{rank}</span>
                                        </StarBox>
                                        <div>
                                            <span>{lessons} </span>
                                            <span>LESSONS</span>
                                        </div>
                                        <div>
                                            <span>{students} </span>
                                            <span>STUDENTS</span>
                                        </div>
                                    </Stars>
                                </NameRightBody>
                            </NameRight>
                        </NamingSectionP1>
                        <div>
                            <Teaches>
                                <TeachesTitle>Teaches</TeachesTitle>
                                <TeachesSport>
                                    {sport.map(e => (
                                        <div style={{"margin-right":10}}>
                                            <span>{e}</span>
                                        </div>
                                    ))}
                                </TeachesSport>
                            </Teaches>
                        </div>
                    </NamingSection>
                </TitleSection>
                <AboutTeacher>
                    <div></div>
                    <div>
                        <CardTitle>About Me</CardTitle>
                        <AboutContent>{description}</AboutContent>
                    </div>
                </AboutTeacher>

            </General>
        </>
    )
}

export default TrainerInfoCard