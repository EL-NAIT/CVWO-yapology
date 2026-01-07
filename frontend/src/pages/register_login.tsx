import Navbar from '../components/navbar';
import { Box, Container } from '@mui/material';
import RegisterLoginForm from '../components/register_login_form';

type RegisterLoginProps = {
    register: boolean;
};

export default function RegisterLogin(props: RegisterLoginProps) {
    return <>
        <Navbar register={props.register} />
        <Container maxWidth="md">
            <Box sx={{ backgroundColor: 'inherit', 
                            minHeight: '100vh', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            }}>
                <RegisterLoginForm register={props.register} />
            </Box>
        </Container>
    </>;
}