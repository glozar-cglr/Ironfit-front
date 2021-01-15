
import React, { useState } from 'react';
import { signup } from '../../services/userWs';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormH3, select, FormLabel, FormInput} from '../../components/SignUpTrainer'

function SignUpTrainer () {
    const [data, setData] = useState ({})
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        signup(data).then((response) => {
            setData({data:{}})
            console.log("Cogio los demas datos!", response)
        }).catch((error)=>{
            console.log("Nope, esta mal", error.response)
        })
    }

    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">IronFitness</Icon>
                <FormContent>
                    <Form onSubmit = {onSubmit}>
                        <FormH1>As a trainer we need more information about you</FormH1>
                        <FormH3>Select a Sport</FormH3>
                        <select value = 'role' non-required onChange = {handleChange}>
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
                            <option value= "Table TEnnis">Table TEnnis</option>
                            <option value= "Taekwondo">Taekwondo</option>
                            <option value= "Tennis">Tennis</option>
                            <option value= "Volleyball">Volleyball></option>
                            <option value= "Yoga">Yoga</option>
                        </select>
                        <FormH3>Select a Trainer Type</FormH3>
                        <select value = 'trainer_type' onChange = {handleChange}>
                            <option value= "Professional Trainer">Professional Trainer</option>
                            <option value= "Experienced Athlete">Experienced Athlete</option>
                        </select>
                        <FormH3>Select Country</FormH3>
                        <FormLabel htmlFor= 'for'>Country</FormLabel>
                        <FormInput name ='country'  onChange = {handleChange}/>
                        <FormH3>Select City</FormH3>
                        <FormLabel htmlFor= 'for'>City</FormLabel>
                        <FormInput name ='city'  onChange = {handleChange}/>
                        <FormH3>Select Methodology</FormH3>
                        <select value = 'methodology'  onChange = {handleChange}>
                            <option value= "Online">Online</option>
                            <option value= "Live">Live</option>
                        </select>
                        <FormLabel htmlFor= 'for'>Birthday</FormLabel>
                        <FormInput name ='birthday'  onChange = {handleChange} />
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignUpTrainer;