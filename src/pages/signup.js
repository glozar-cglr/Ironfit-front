import React, { useState } from 'react';
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, FormH3, FormSelect} from '../components/Signup/SignupElements';
import { signup } from '../services/userWs';
import {useHistory} from 'react-router-dom'


function SignUp  () {
    const history = useHistory()
    const [data, setData] = useState({role:"TRAINEE"})
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        signup(data).then((response)=>{
            if (data.role == "TRAINER") {
                history.push("/signup/signup-trainer")
            } else {
                history.push("/signup/signup-trainee")
            }
            setData({data:{}})
            localStorage.setItem("user", JSON.stringify(response.data.user))
            console.log("Funciono!", response) 
        }).catch((error)=>{
            console.log("hay un error", error.response)
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
                            <FormH1>Create your Account</FormH1>
                            <FormLabel htmlFor= 'for'>Name</FormLabel>
                            <FormInput name ='name' type="text" required onChange = {handleChange} />
                            <FormLabel htmlFor= 'for'>Last Name</FormLabel>
                            <FormInput name ='last_name' type="text" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Email</FormLabel>
                            <FormInput name ='email' type="email" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Password</FormLabel>
                            <FormInput name ='password' type="password" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Confirm Password</FormLabel>
                            <FormInput name ='confirmPassword' type="password" required onChange = {handleChange}/>
                            <FormLabel htmlFor= 'for'>Select your role:</FormLabel>
                            <FormSelect name = 'role' type="text" placeholder="Select a role" required onChange = {handleChange} >
                                <option>Select a role</option>
                                <option value="TRAINER">Trainer</option>
                                <option value="TRAINEE">Trainee</option>
                            </FormSelect>
                            <FormLabel htmlFor= 'for'>Upload a picture</FormLabel>
                            <FormInput name ='profile_picture' required onChange = {handleChange} />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </scrollToTop>    
        </>
    )
}

export default SignUp;
