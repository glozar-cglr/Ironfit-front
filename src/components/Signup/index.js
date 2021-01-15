import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignupElements';

function SignUp  () {
    const [data, setData] = useState({})
    const handleChange = (e) => {}
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">IronFitness</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create your Account</FormH1>
                            <FormLabel htmlFor= 'for'>Name</FormLabel>
                            <FormInput type='name' required />
                            <FormLabel htmlFor= 'for'>Last Name</FormLabel>
                            <FormInput type='lastname' required />
                            <FormLabel htmlFor= 'for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor= 'for'>Confirm Password</FormLabel>
                            <FormInput type='confirm-password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>   
        </>
    )
}

export default SignUp;