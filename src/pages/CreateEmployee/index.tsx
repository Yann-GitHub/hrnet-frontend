// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import Join from '../../assets/join.svg';
import states from '../../data/states.ts';

import { useEmployeeContext } from '../../context/employeeContext.tsx';

import { Button } from '@/components/ui/button';

import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

import { useForm, SubmitHandler } from 'react-hook-form';
import registerSchema from '@/validators/auth';
import { z } from 'zod'; // input validation library - type safe
import { zodResolver } from '@hookform/resolvers/zod';

type Inputs = z.infer<typeof registerSchema>; // infer the type of registerSchema

type InputsFormated = {
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
};

function CreateEmployee() {
    // const { handleSubmit, reset, watch } = useForm();

    const form = useForm<Inputs>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            // dateOfBirth: new Date(),
            // startDate: new Date(),
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: '',
        },
        mode: 'onChange',
    }); // imported from react-hook-form

    console.log(form.watch()); // watch method from react-hook-form - provides access to the entire form state

    const { employees, setEmployees } = useEmployeeContext();
    // const [newEmployee, setNewEmployee] = useState<Inputs>({
    //     firstname: '',
    //     lastname: '',
    //     dateOfBirth: new Date(),
    //     startDate: new Date(),
    //     street: '',
    //     city: '',
    //     state: '',
    //     zipCode: '',
    //     department: '',
    // });

    function onSubmit(data: Inputs) {
        alert(JSON.stringify(data));
        console.log(data);

        // console.log(typeof data.dateOfBirth);

        // Format the dateOfBirth and startDate before storing them in the context
        // const formattedData: Inputs = {
        //     ...data,
        //     dateOfBirth: new Date(format(data.dateOfBirth, 'MM/dd/yyyy')),
        //     startDate: new Date(format(data.startDate, 'MM/dd/yyyy')),
        // };
        const formattedData: InputsFormated = {
            ...data,
            dateOfBirth: format(data.dateOfBirth, 'MM/dd/yyyy'),
            startDate: format(data.startDate, 'MM/dd/yyyy'),
        };

        // Add the new employee to the list of employees
        // setEmployees([...employees, data]);
        setEmployees([...employees, formattedData]);

        // Log the formatted data for verification
        console.log('Formatted Data:', formattedData);

        // setEmployees([...employees, newEmployee]);

        // Reset the form to its default values
        form.reset();
    }

    // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // useEffect(() => {
    //     if (isSubmitSuccessful) {
    //         // Reset the form to its default values
    //         reset();
    //     }

    return (
        <div className="section-min-height flex flex-col justify-center items-center mb-14">
            <div className="flex flex-row justify-center items-center mt-14">
                {/* <h2 className="text-xl text-blue-600">Create Employee</h2> */}
                <img src={Join} alt="join" className="w-1/3" />
            </div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create Employee</CardTitle>
                    <CardDescription>
                        Fill out the form below to create a new employee.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your first name..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your last name..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date of birth</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={'outline'}
                                                        className={cn(
                                                            'w-[240px] pl-3 text-left font-normal',
                                                            !field.value &&
                                                                'text-muted-foreground'
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                // 'PPP'
                                                                'MM/dd/yyyy'
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() ||
                                                        date <
                                                            new Date(
                                                                '1900-01-01'
                                                            )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Start Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={'outline'}
                                                        className={cn(
                                                            'w-[240px] pl-3 text-left font-normal',
                                                            !field.value &&
                                                                'text-muted-foreground'
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                // 'PPP'
                                                                'MM/dd/yyyy'
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() ||
                                                        date <
                                                            new Date(
                                                                '1900-01-01'
                                                            )
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="street"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Street</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your street..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your city..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>State</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a state to display" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className=" max-h-44 ">
                                                {states.map((s) => {
                                                    return (
                                                        <SelectItem
                                                            key={s.name}
                                                            value={s.name}
                                                        >
                                                            {s.name}
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="zipCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Zip Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your zip code..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Department</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a department to display" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[
                                                    'Sales',
                                                    'Marketing',
                                                    'Engineering',
                                                    'Human Ressources',
                                                    'Legal',
                                                ].map((d) => {
                                                    return (
                                                        <SelectItem
                                                            key={d}
                                                            value={d}
                                                        >
                                                            {d}
                                                        </SelectItem>
                                                    );
                                                })}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end items-center">
                                <Button type="submit">Submit</Button>
                                <Button
                                    type="button"
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateEmployee;
