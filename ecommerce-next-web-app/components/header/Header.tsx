import {AppBar,Toolbar,Typography,Switch, List, ListItem, ButtonBaseProps} from "@mui/material";
import {mid_links} from '../../static-data-arrays';
import Link from "next/link";
interface Props{
  darkMode: boolean,
  handleThemeChange: () => void;
}
function Header({darkMode,handleThemeChange}:Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <List sx={{ display: "flex" }}>
          {mid_links.map(({ title, path }) => (
            <ListItem
            // component={ListItemComponent}
            // to={path}
            key={path}
            sx={{ color: "inherit", typography: "h6" }}
            >
              <Link href={path}>{title.toUpperCase()}</Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
