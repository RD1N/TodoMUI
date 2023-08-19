import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useState } from 'react';
import {Checkbox, ListItemButton, ListItemIcon} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

let nextId = 3;

const initialTasks = [
    {
        id: 1,
        text: 'Brunch this week?',
        status: "plan"
    },
    {
        id: 2,
        text: 'Birthday Gift',
        status: "plan"
    },
    {
        id: 3,
        text: 'Recipe to try',
        status: "plan"
    },
    {
        id: 4,
        text: 'Yes!',
        status: "plan"
    },
    {
        id: 5,
        text: "Doctor's Appointment",
        status: "plan"
    },
    {
        id: 6,
        text: 'Discussion',
        status: "plan"
    },
    {
        id: 7,
        text: 'Summer BBQ',
        status: "done"
    },
];



export default function ListTasks () {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                status: "plan",
            },
        ]);
    }

    function handleChangeTask(task) {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return (
        <>
            <List sx={{ mb: 2 }}>
                    <ListSubheader
                        sx={{
                            bgcolor: 'background.paper',
                            textAlign: 'center',
                        }}
                    >
                        ПЛАН
                    </ListSubheader>
                    {tasks.filter((s) => s.status === "plan").map(({ id, text}) => (
                        <ListItem key={id}>
                            <ListItemButton dense>
                                <ListItemIcon>
                                    <Checkbox/>
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                                <IconButton
                                    color="primary"
                                    onClick={handleChangeTask}
                                >
                                    <BorderColorIcon/>
                                </IconButton>
                                <IconButton
                                    onClick={handleDeleteTask}
                                    color="secondary"
                                >
                                    <DeleteIcon onClick={handleDeleteTask}/>
                                </IconButton>
                            </ListItemButton>
                        </ListItem>
                ))}
                <ListSubheader
                    sx={{
                        bgcolor: 'background.paper',
                        textAlign: 'center',
                    }}
                >
                    ГОТОВО
                </ListSubheader>
                    {tasks.filter((s) => s.status === "done").map(({ id, text}) => (
                        <ListItem key={id}>
                            <ListItemButton dense>
                                <ListItemIcon>
                                    <Checkbox
                                        checked={true}
                                        onClick={handleChangeTask}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                                <IconButton
                                    color="primary"
                                    onClick={handleChangeTask}
                                >
                                    <BorderColorIcon/>
                                </IconButton>
                                <IconButton
                                    onClick={handleDeleteTask}
                                    color="secondary"
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemButton>
                        </ListItem>
                ))}
            </List>
        </>
    )
}


