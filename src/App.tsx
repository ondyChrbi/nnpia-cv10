import './App.css'
import {Provider} from "react-redux";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from "./page/Tasks";
import Header from "./component/ui/Header";
import TaskDetail from "./page/TaskDetail";
import {QueryClient, QueryClientProvider} from "react-query";
import TaskForm from "./page/TaskForm";

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/task"} element={<Tasks />} />
                    <Route path={"/task/:id"} element={<TaskDetail />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </Provider>
  )
}

export default App
