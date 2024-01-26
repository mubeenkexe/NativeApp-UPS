import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFormSchema } from "../utils/formValidations";

const useLogin = () => {
  const navigation = useRouter();

  console.log(navigation);

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    // Simulate form submission
    console.log("Submitted Data:", data);
    setSubmittedData(data);
  };

  return [
    navigation,
    control,
    handleSubmit,
    errors,
    isSubmitting,
    submittedData,
    onSubmit,
  ];
};

export default useLogin;
