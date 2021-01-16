import React, { useState } from 'react';
import { signUpTraineeWs } from '../services/traineeWs'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormH3, FormSelect, FormLabel, FormInput, FormButton} from '../components/SignUpTrainer/SignUpTrainerComponents'
import {useHistory} from 'react-router-dom'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

function SignUpTrainee () {
    const history = useHistory()
    const [data, setData] = useState ({})
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        signUpTraineeWs(data).then((response) => {
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
                        <FormH1>We want to know more about you</FormH1>
                        <FormLabel htmlFor= 'for'>Country</FormLabel>
                        <FormSelect name = 'interest' onChange = {handleChange} multiple>
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
                        <FormLabel htmlFor= 'for'>Describe your objectives</FormLabel>
                        <FormInput name ='description'  onChange = {handleChange}/>
                        <FormLabel htmlFor= 'for'>What is your current weight?</FormLabel>
                        <FormInput name ='weight'  onChange = {handleChange}/>
                        <FormButton type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </scrollToTop>
        </>
    )
}

export default SignUpTrainee;