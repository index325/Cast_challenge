import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, IconButton, Box, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  box: {
    width: "100%",
    alignItems: "center",
  },
}));

export default function Tbar({ ...props }) {
  const classes = useStyles();
  const { className } = props;
  const { handleSideBar, openSide } = props;

  return (
    <Toolbar className={className} variant="dense">
      <Box display="flex" justifyContent="center" className={classes.box}>
        <Box flexGrow={1} textAlign="center">
          <Typography>Gerenciamento de cursos</Typography>
        </Box>
      </Box>
    </Toolbar>
  );
}
