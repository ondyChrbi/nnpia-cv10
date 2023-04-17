import TaskList from "../component/TaskList";
import './Tasks.css';
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {useQuery} from "react-query";
import {Task} from "../data/init-data";
import TaskForm from "./TaskForm";

const Tasks = () => {
    const isLoggedIn = useSelector((state: RootState) => state.login.value);
    const {data, isError, error, isLoading} = useQuery("tasks", fetchData);

    if (!isLoggedIn) {
        return <div className="tasks">Sign in before showing Tasks</div>
    }

    return <div className="tasks">
        {isError && <div className="alert alert-danger">{error as String}</div>}
        {isLoading && <div className="alert alert-danger">loading</div>}
        {data && <TaskList tasks={data as Array<Task>}/>}
        <TaskForm />
    </div>
};

const fetchData = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const result = await fetch(`${backendUrl}/task`);
    return (await result.json()) as Array<Task>
};


export default Tasks;