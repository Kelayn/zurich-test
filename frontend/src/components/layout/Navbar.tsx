import {AppBar, Link, Toolbar, Typography} from "@mui/material";

const Navbar = () => <AppBar position="static">
    <Toolbar variant="dense">
        <Link href="/" underline={"none"} color={'black'}>
            <Typography variant="h6" noWrap component="div" sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}>
                CodeTest
            </Typography>
        </Link>

    </Toolbar>
</AppBar>;

export default Navbar;