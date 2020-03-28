import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { useTranslation } from "react-i18next";

import NorwayFlag from "icons/NorwayFlag";
import BritishFlag from "icons/BritishFlag";
import SpanishFlag from "icons/SpanishFlag";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.palette.primary.dark
  }
}));

const AppToolbar = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(i18n.language);

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
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
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
  );
};

export default AppToolbar;
