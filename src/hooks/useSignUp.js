import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpFormSchema } from "../utils/formValidations";
import { BaseUrl } from "../utils/constant";
import { useAuth } from "./authContext";


const useSignUp = () => {
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        resolver: zodResolver(SignUpFormSchema),
    });

    const { errors, isSubmitting } = formState;

    const [submittedData, setSubmittedData] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        try {
            login({
                username: data.username,
                email: data.email,
                password: data.password,
                action: 'signup',
            });
        } catch (error) {
            console.error('API request error:', error);
            // Handle other errors as needed
        }
    };



    return [
        control,
        showPassword,
        togglePasswordVisibility,
        handleSubmit,
        errors,
        isSubmitting,
        submittedData,
        onSubmit,
    ];
};

export default useSignUp;
