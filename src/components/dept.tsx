import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

interface Department {
  department: string;
  sub_departments: string[];
}

const data: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentListComponent: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const handleExpand = (department: string) => {
    if (expandedDepartments.includes(department)) {
      setExpandedDepartments(
        expandedDepartments.filter((dep) => dep !== department)
      );
    } else {
      setExpandedDepartments([...expandedDepartments, department]);
    }
  };

  const handleSelect = (department: string) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(
        selectedDepartments.filter((dep) => dep !== department)
      );
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }
  };

  const handleSelectAll = (subDepartments: string[]) => {
    const allSelected = subDepartments.every((dep) =>
      selectedDepartments.includes(dep)
    );

    if (allSelected) {
      setSelectedDepartments(
        selectedDepartments.filter((dep) => !subDepartments.includes(dep))
      );
    } else {
      setSelectedDepartments([...selectedDepartments, ...subDepartments]);
    }
  };

  return (
    <List>
      {data.map(({ department, sub_departments }) => (
        <React.Fragment key={department}>
          <ListItemButton onClick={() => handleExpand(department)}>
            {expandedDepartments.includes(department) ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )}
            <ListItemText primary={department} />
          </ListItemButton>
          <Collapse in={expandedDepartments.includes(department)}>
            <List disablePadding>
              <ListItemButton onClick={() => handleSelectAll(sub_departments)}>
                <Checkbox
                  edge="start"
                  checked={sub_departments.every((dep) =>
                    selectedDepartments.includes(dep)
                  )}
                  indeterminate={
                    sub_departments.some((dep) =>
                      selectedDepartments.includes(dep)
                    ) &&
                    sub_departments.some(
                      (dep) => !selectedDepartments.includes(dep)
                    )
                  }
                  disableRipple
                />
                <ListItemText primary="{Fa}" />
              </ListItemButton>
              {sub_departments.map((subDepartment) => (
                <ListItemButton
                  key={subDepartment}
                  onClick={() => handleSelect(subDepartment)}
                >
                  <Checkbox
                    edge="start"
                    checked={selectedDepartments.includes(subDepartment)}
                    disableRipple
                  />
                  <ListItemText primary={subDepartment} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentListComponent;
