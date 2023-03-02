import {
  Typography,
  Stack,
  AppBar,
  ThemeProvider,
  useScrollTrigger,
  CssBaseline,
} from "@mui/material";
import React from "react";
import { NavButton, darkTheme } from "./styled-components";

const ElevationScroll = (props: { children: React.ReactElement }) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export const NavBar: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <ElevationScroll>
          <AppBar position="fixed">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              zIndex={1}
            >
              <NavButton>
                <Typography variant="h6">CS Tutoring - UC Davis</Typography>
              </NavButton>
              <Stack direction="row">
                <NavButton>
                  <Typography variant="h6">Home</Typography>
                </NavButton>
                <NavButton>
                  <Typography variant="h6">People</Typography>
                </NavButton>
                <NavButton>
                  <Typography variant="h6">Become a CS Tutor</Typography>
                </NavButton>
              </Stack>
            </Stack>
          </AppBar>
        </ElevationScroll>
      </ThemeProvider>
    </React.Fragment>
  );
};
