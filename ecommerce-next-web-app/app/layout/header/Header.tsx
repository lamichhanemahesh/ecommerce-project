import { AppBar, Typography,Toolbar } from "@material-ui/core";

function Header(){
    return(
        <AppBar position='static' sx={{margin-bottom: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;