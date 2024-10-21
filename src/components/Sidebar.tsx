import * as React from 'react';
import { Box, Collapse, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from "react-router-dom";

import { RuleDef } from "../data/loadRules";

const drawerWidth = 240;

interface SidebarProps {
    rules: RuleDef[];
}

export default function Sidebar({ rules }: SidebarProps) {
    const [open, setOpen] = React.useState('');
    const history = useNavigate();
    
    const navigate = (rule: RuleDef) => {
        history(`/rules/${rule.id}`);
    }

    const handleClick = (rule: RuleDef) => {
        setOpen(open === rule.id ? '' : rule.id);
        if (rule.children.length === 0) {
            navigate(rule);
        }
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List component="nav" dense>
                    {rules.map((rule, index) => (
                        <>
                            <ListItemButton key={rule.id} onClick={() => handleClick(rule)}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={rule.name} />
                            </ListItemButton>
                            <Divider />
                            <Collapse in={open === rule.id} timeout="auto" unmountOnExit>
                                <List dense>
                                    {rule.children.map(child => (
                                        <ListItemButton key={child.id} onClick={() => handleClick(child)}>
                                            <ListItemText primary={child.name} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        </>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}