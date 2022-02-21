import React, { useEffect, useState } from "react";
import { Card } from "../components/styled/Card";

const ListTask = ()=>{
    const [tasks , setTask] = useState<[]>([]);
    useEffect(()=>{
        const allTasks = JSON.parse(localStorage.getItem('tasks') as string);
        if(allTasks) setTask(allTasks);
    } , [])
    return (
        <React.Fragment>
            <h1>List Task</h1>
            {tasks.map((task , index) => {
                return (
                    <Card key={index}>
                        <h5>{task}</h5>
                    </Card>
                )
            }) }
        </React.Fragment>

    )
}

export default ListTask;