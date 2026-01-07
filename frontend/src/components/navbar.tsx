import ForumIcon from '@mui/icons-material/Comment';
import { IconButton, AppBar, Stack, Typography, Toolbar, Button } from "@mui/material";

type NavbarProps = {
    register: boolean;
};

export default function Navbar(props: NavbarProps) {
    const register = props.register;
    const button_text:string = register ? "Sign In" : "Sign Up";


    return (
        <>
            <AppBar color="primary" position="fixed">
                <Toolbar>
                    <IconButton color = "secondary" size = 'large' >
                        <ForumIcon />
                    </IconButton>
                    <Typography sx={{ fontFamily: '"Sekuya", system-ui', flexGrow: 1 }} variant="h6" component="div" color="secondary" marginLeft={1}>
                        Yapology
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color="secondary" variant="outlined">{button_text}</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}   