import * as z from 'zod';

export const SignUpFormSchema = z.object({
    username: z.string('Username must have than 6 characters').min(6),
    email: z.string().email("Email is Required!"),
    password: z.string()
        .min(6, 'Password must have than 6 characters').min(6, 'Password must have than 6 characters').refine(s => !s.includes(' '), 'No Spaces!'),
})
export const SignInFormSchema = z.object({
    email: z.string().email("Email is Required!"),
    password: z.string()
        .min(6, 'Password must have than 6 characters').refine(s => !s.includes(' '), 'No Spaces!'),
})