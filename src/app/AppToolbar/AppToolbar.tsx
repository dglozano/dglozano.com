import React from "react";
import { AppBar, Toolbar, makeStyles, ThemeProvider } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { useTranslation } from "react-i18next";

import NorwayFlag from "icons/NorwayFlag";
import BritishFlag from "icons/BritishFlag";
import SpanishFlag from "icons/SpanishFlag";
import { darkTheme } from "config/themes";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.palette.primary.dark,
    ...theme.mixins.toolbar
  }
}));

const AppToolbar = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.languages[0]);

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar id="back-to-top-anchor">
          <ToggleButtonGroup
            size="small"
            value={language}
            exclusive
            onChange={handleLanguageChange}
          >
            <ToggleButton value="en">
              <BritishFlag />
            </ToggleButton>
            <ToggleButton value="es">
              <SpanishFlag />
            </ToggleButton>
            <ToggleButton value="no">
              <NorwayFlag />
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppToolbar;
