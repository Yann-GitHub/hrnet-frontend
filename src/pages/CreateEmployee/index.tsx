import { useState, useEffect } from 'react';
import Join from '../../assets/join.svg';
import states from '../../data/states.ts';
import { InputsFormated } from '../../types/index.ts';

import { useEmployeeContext } from '../../context/employeeContext.tsx';

import { Modal } from 'hrnet-react-modal-101';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    // CardFooter,
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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    // FormDescription,
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

import { useForm } from 'react-hook-form';

import registerSchema from '@/validators/auth';
import { z } from 'zod'; // input validation library - type safe
import { zodResolver } from '@hookform/resolvers/zod';

// Infer the type Inputs from registerSchema with zod
type Inputs = z.infer<typeof registerSchema>;

function CreateEmployee() {
    // React Hook Form
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
    });

    // watch method from react-hook-form - provides access to the entire form state
    // console.log(form.watch());

    // Context - data list of employees
    const { employees, setEmployees } = useEmployeeContext();

    // Modal
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     if (isOpen) {
    //         openModal();
    //     }
    // }, [isOpen]);

    const openModal = () => {
        setIsOpen(true);
        // setIsOpen((prevState) => !prevState);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // const customModalStyle = {
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     border: '2px solid blue',
    //     borderRadius: '10px',
    //     padding: '20px',
    // };

    function onSubmit(data: Inputs) {
        // alert(JSON.stringify(data));
        // console.log(data);

        // Format the dateOfBirth and startDate before storing them in the context
        const formattedData: InputsFormated = {
            ...data,
            dateOfBirth: format(data.dateOfBirth, 'MM/dd/yyyy'),
            startDate: format(data.startDate, 'MM/dd/yyyy'),
        };

        // Add the new employee to the list of employees
        setEmployees([formattedData, ...employees]);

        // Reset the form to its default values
        form.reset();

        // Open the modal
        openModal();
    }

    return (
        <div className="section-min-height flex flex-col justify-center items-center mb-14">
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                // modalCustomStyle={customModalStyle}
            >
                <h2 className="text-blue-500">Employee Created!</h2>
                <p>
                    Congratulations! The new employee has been successfully
                    added to the database."
                </p>
            </Modal>
            {/* <div>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    modalCustomStyle={customModalStyle}
                >
                    <h2 className="text-blue-500">Modal Content</h2>
                    <p>This is the content of the modal.</p>
                </Modal>
            </div> */}

            <div className="flex flex-row justify-center items-center mt-14">
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
                                {/* <Button
                                    type="button"
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button> */}
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateEmployee;
