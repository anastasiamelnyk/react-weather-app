import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: yupResolver(schema) });

    const login = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(login)} className={classes['form']}>
            <Input
                labelText="Email"
                register={register}
                inputId="email"
                errorText={errors.email?.message}
            />
            <Input
                labelText="Password"
                register={register}
                inputId="password"
                errorText={errors.password?.message}
            />
            <Button fullWidth>
                Login
            </Button>
        </form>
    );
};

export default LoginForm;