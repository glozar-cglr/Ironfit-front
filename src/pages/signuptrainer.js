import React, { useState } from 'react';
import { signUpTrainerWs } from '../services/trainersWs';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormH3, FormSelect, FormLabel, FormInput, FormButton} from '../components/SignUpTrainer/SignUpTrainerComponents'
import {useHistory} from 'react-router-dom'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

function SignUpTrainer () {
    const history = useHistory()
    const [data, setData] = useState ({})
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    };

    const handleArray = (e) => {
        setData({...data, [e.target.name] : Array.from(e.target.selectedOptions, option => option.value)})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        signUpTrainerWs(data).then((response) => {
            setData({data:{}})
            history.push("/")
            console.log("Cogio los demas datos!", response)
        }).catch((error)=>{
            console.log("Nope, esta mal", error.response)
        })
    }

    return (
        <>
        <scrollToTop>
        <Container>
            <FormWrap>
                <Icon to="/">IronFitness</Icon>
                <FormContent>
                    <Form onSubmit = {onSubmit}>
                        <FormH1>As a trainer we need more information about you</FormH1>
                        
                        <FormLabel htmlFor= 'for'>Sport</FormLabel>
                        <FormSelect name = 'sport' onChange = {handleArray} multiple>
                        
                            <option>Select your sport</option>
                            <option value= "American Football">American Football</option>
                            <option value= "Athletics">Athletics</option>
                            <option value= "Archery">Archery</option>
                            <option value= "Badminton">Badminton</option>
                            <option value= "Baseball">Baseball</option>
                            <option value= "Basketball">Basketball</option>
                            <option value= "Body Building">Body Building</option>
                            <option value= "Boxing">Boxing</option>
                            <option value= "Canoeing">Canoeing</option>
                            <option value= "Cricket">Cricket</option>
                            <option value= "Cycling">Cycling</option>
                            <option value= "Equestrian">Equestrian</option>
                            <option value= "Fencing">Fencing</option>
                            <option value= "Football">Football</option>
                            <option value= "Golf">Golf</option>
                            <option value= "Gymnastics">Gymnastics</option>
                            <option value= "Gym">Gym</option>
                            <option value= "Hockey">Hockey</option>
                            <option value= "Horse Racing">Horse Racing</option>
                            <option value= "Judo">Judo</option>
                            <option value= "Martial Arts">Martial Arts</option>
                            <option value= "Rugby">Rugby</option>
                            <option value= "Squash">Squash</option>
                            <option value= "Swimming">Swimming</option>
                            <option value= "Table Tennis">Table TEnnis</option>
                            <option value= "Taekwondo">Taekwondo</option>
                            <option value= "Tennis">Tennis</option>
                            <option value= "Volleyball">Volleyball</option>
                            <option value= "Yoga">Yoga</option>
                        </FormSelect>
                        <FormLabel htmlFor= 'for'>Trainer Type</FormLabel>
                        <FormSelect name = 'trainer_type' type="text" onChange = {handleChange}>
                            <option>Select your Trainer Type</option>
                            <option value= "Professional Trainer">Professional Trainer</option>
                            <option value= "Experienced Athlete">Experienced Athlete</option>
                        </FormSelect>
                        
                        <FormLabel htmlFor= 'for'>Country</FormLabel>
                        <FormInput name ='country' type="text" onChange = {handleChange}/>
                        
                        <FormLabel htmlFor= 'for'>City</FormLabel>
                        <FormInput name ='city'  onChange = {handleChange}/>
                        <FormLabel htmlFor= 'for'>Methodology</FormLabel>
                        <FormSelect name = 'methodology' type="text"  onChange = {handleChange}>
                            <option>Select your Methodology</option>
                            <option value= "Online">Online</option>
                            <option value= "Live">Live</option>
                        </FormSelect>
                        <FormLabel htmlFor= 'for' >Birthday</FormLabel>
                        <FormInput name ='birthday' type="date" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >Lessons</FormLabel>
                        <FormInput name ='lessons' type="number" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >Students</FormLabel>
                        <FormInput name ='students' type="number" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >Rank</FormLabel>
                        <FormInput name ='rank' type="number" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >Trainer Picture</FormLabel>
                        <FormInput name ='img' type="text" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >Trial Price</FormLabel>
                        <FormInput name ='trial' type="number" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >Price</FormLabel>
                        <FormInput name ='price' type="number" onChange = {handleChange} />
                        <FormLabel htmlFor= 'for' >About you</FormLabel>
                        <FormInput name ='description' type="text" onChange = {handleChange} />
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </scrollToTop>
        </>
    )
}

export default SignUpTrainer;