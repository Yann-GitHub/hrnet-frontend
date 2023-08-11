import { z } from 'zod';

// Zod is a TypeScript-first schema declaration and validation library.
// The term "schema" refers to any data type, from simple strings to complex nested objects.
// Declare a validator with Zod, and it automatically infers the static TypeScript type.

const registerSchema = z.object({
    firstname: z
        .string()
        .nonempty('First name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    lastname: z
        .string()
        .nonempty('Last name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    // dateOfBirth: z.string().nonempty('A date of birth is required.'),
    dateOfBirth: z.date({
        required_error: 'A date of birth is required.',
    }),
    startDate: z.date({
        required_error: 'A date of start is required.',
    }),
    street: z
        .string()
        .nonempty('Street name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    city: z
        .string()
        .nonempty('City name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    state: z.string().nonempty('State name is required.'),
    zipCode: z.string().nonempty('Zipcode is required.').min(2).max(40),
    department: z.string().min(2).max(40),
});

export default registerSchema;
