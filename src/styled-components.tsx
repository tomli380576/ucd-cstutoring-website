import {
    Button,
    createTheme,
} from "@mui/material";

import "./arrow-animation.css";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ffffff'
        }
    },
});

export const NavButton = (props: any) => (
    <Button variant="text" color="secondary" sx={{ m: 2 }} size='large'>
        {props.children}
    </Button>
);

export const Arrow = () => {
    return (
        <div id="arrowAnim">
            <div className="arrowSliding">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
                <div className="arrow"></div>
            </div>
        </div>
    )
}