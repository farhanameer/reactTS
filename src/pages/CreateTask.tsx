import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button";
import { Flex } from "../components/styled/Flex";
import { Input } from "../components/styled/Input";

const CreateTask = ()=>{
    const navigate = useNavigate();

    const [input , changeInput] = useState<string>('');
    const handleChange =(event : React.ChangeEvent<HTMLInputElement>) =>{
        changeInput(event.target.value);
    }

    const createTask = ()=>{
        const items = JSON.parse(localStorage.getItem('tasks') as string);
        if(!items) {
            const tasks = [];
            tasks.push(input);
            localStorage.setItem('tasks' , JSON.stringify(tasks));
            return;
        }
        items.push(input);
        localStorage.setItem('tasks' , JSON.stringify(items));
        navigate("/");

    }
    return (
        <React.Fragment>
            <h1>Create Task</h1>
            <Flex>
            <Input value={input} onChange={handleChange}></Input>
            <Button onClick={createTask}>Create</Button>
        </Flex>
        </React.Fragment>
    )
}

export default CreateTask;