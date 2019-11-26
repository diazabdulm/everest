import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { List as ListIcon } from "@material-ui/icons";

const ProjectList = () => {
  const projects = useSelector(state => state.projects);

  return (
    <Fragment>
      {projects.map(({ id, text }) => (
        <ListItem button key={id} component={Link} to={`/projects/${id}`}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </Fragment>
  );
};

export default ProjectList;
