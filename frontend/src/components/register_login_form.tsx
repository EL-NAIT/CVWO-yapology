import { Box, Button, TextField, Typography } from '@mui/material';

type RegisterLoginFormProps = {
    register: boolean;
};

export default function RegisterLoginForm(props: RegisterLoginFormProps) {
    const register = props.register;
    const title = register ? "Create Account" : "Log In";
    return (<Box width="100%" textAlign="center" bgcolor='primary.main' p={4} borderRadius={4} boxShadow={3}>
                    <Typography variant="h6" fontFamily='Arial'>Sign Up</Typography>
                    <TextField required label="Username" variant="outlined" fullWidth margin="normal" color='secondary' />
                    <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
                        {title}
                    </Button>
                </Box>);}