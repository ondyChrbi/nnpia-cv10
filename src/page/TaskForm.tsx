import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

interface FormValues {
    title: string;
}

const resolver = yupResolver(yup.object({
    "title": yup.string()
        .max(128, 'Maximalni delka 128 znaku')
        .required('Toto pole je povinne'),
}));

const TaskForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver
    });
    const onSubmit = (data: FormValues) => console.log(data);

    return <>
        <h1>Založit nový Task</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} />
            <p>{errors.title?.message}</p>

            <input type="submit" />
        </form>
    </>
    ;
}

export default TaskForm;