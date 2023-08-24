import React, { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  makeStyles,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const departmentsData = [
  {
    id: 1,
    department: "customer service",
    sub_departments: [
      { id: 11, name: "support" },
      { id: 12, name: "customer success" },
    ],
  },
  {
    id: 2,
    department: "design",
    sub_departments: [
      { id: 21, name: "graphic design" },
      { id: 22, name: "product design" },
    ],
  },
];
const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),....

    
  },
}));

const DepartmentComponent: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleExpandClick = (department: string) => {
    if (expanded === department) {
      setExpanded(null);
    } else {
      setExpanded(department);
    }
  };

  const handleItemClick = (item: string) => {
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
  };

  const isDepartmentSelected = (department: string) =>
    selectedItems.includes(department) ||
    departmentsData
      .find((item) => item.department === department)
      ?.sub_departments?.every((subDepartment) =>
        selectedItems.includes(subDepartment)
      );

  const finalData = (
    <List>
      {departmentsData.map((dept) => (
        <div key={dept.department}>
          <ListItem button onClick={() => handleExpandClick(dept.department)}>
            <ListItemIcon>
              {expanded === dept.department ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary={dept.department} />
            <Checkbox
              edge="end"
              checked={isDepartmentSelected(dept.department)}
              onChange={() => handleItemClick(dept.department)}
            />
          </ListItem>
          <Collapse
            in={expanded === dept.department}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem
                  key={subDept}
                  button
                  className={classes.nested}
                  onClick={() => handleItemClick(subDept)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedItems.includes(subDept)}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );

  return finalData;
};

export default DepartmentComponent;
