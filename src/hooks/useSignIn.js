import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFormSchema } from "../utils/formValidations";
import { BaseUrl } from "../utils/constant";
import { useAuth } from "./authContext";


const useSignIn = () => {

  const { login, user  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInFormSchema),
  });

  console.log(user)
  const { errors, isSubmitting } = formState;

  const [submittedData, setSubmittedData] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      login({
        email: data.email,
        password: data.password,
        action: 'signin',
      });
    } catch (error) {
      console.error('API request error:', error);
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

export default useSignIn;
