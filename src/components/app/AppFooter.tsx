import React from "react";
import {
  Grid,
  Link,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";

import { darkTheme } from "config/themes";
import { socialMediaAccountsDetails } from "config/socialMedia";

const useStyles = makeStyles(theme => ({
  footer: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(2),
    ...theme.mixins.toolbar
  },
  heartIcon: {
    color: theme.palette.secondary.light
  }
}));

const AppFooter = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        component={Paper}
        square
        className={classes.footer}
      >
        <Typography variant="body2">
          <Trans i18nKey="madeWithLoveBy">
            Made with <HeartIcon className={classes.heartIcon} /> by
          </Trans>
          <Link
            href={socialMediaAccountsDetails["github"].href}
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <strong>@{socialMediaAccountsDetails["github"].accountName}</strong>
          </Link>
        </Typography>
        <Typography variant="body2">
          {t("codeAvailableIn")}
          <Link
            href={`${socialMediaAccountsDetails["github"].href}/dglozano`}
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="hover"
          >
            <strong>Github</strong>
          </Link>
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};

export default AppFooter;