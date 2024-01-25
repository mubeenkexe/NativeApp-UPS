import * as z from 'zod';

export const SignInFormSchema = z.object({
    username: z.string().min(6),
    email: z.string().email(),
    password: z.string()
        .min(6, 'Password must have than 6 characters'),
})