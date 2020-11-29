import React from 'react'
import { Container, FormWrap, Icon ,FormButton, FormContent, Form, FormH1, FormInput, FormLabel, Text } from './SigninElements'

export const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">YaWaGa</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn