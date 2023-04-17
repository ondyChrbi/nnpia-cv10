import TaskList from "../component/TaskList";
import './Tasks.css';
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {useFetchTasks} from "../features/task/hooks";

const Tasks = () => {
    const isLoggedIn = useSelector((state: RootState) => state.login.value);
    const {tasks, loading, error} = useFetchTasks(isLoggedIn);

    return <div className="tasks">
        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div className="alert alert-danger">loading</div>}
        <TaskList tasks={tasks} />
    </div>
};

export default Tasks;