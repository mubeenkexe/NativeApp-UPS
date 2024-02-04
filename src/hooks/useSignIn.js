import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFormSchema } from "../utils/formValidations";
import { BaseUrl } from "../utils/constant";

const useSignIn = () => {

  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const [submittedData, setSubmittedData] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

const onSubmit = async (data) => {
  try {
    console.log(data);
    const response = await fetch(`${BaseUrl}/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        action: 'signin',
      })
    });

    const responseData = await response.json();
    console.log(responseData);
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
