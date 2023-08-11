import { Button } from '@/components/ui/button';

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import registerSchema from '@/validators/auth';
import { z } from 'zod'; // input validation library - type safe

import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

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

export const columns: ColumnDef<InputsFormated>[] = [
    {
        // accessorKey: 'firstname',
        // header: 'First Name',
        ///////////////////////
        // accessorKey: 'firstname',
        // header: 'First Name',
        // cell: ({ row }) => (
        //     <div className="capitalize">{row.getValue('firstname')}</div>
        // ),
        accessorKey: 'firstname',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                First Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'lastname',
        // header: 'Last Name',
        // enableSorting: true, // Activer le tri pour cette colonne
        //     accessorKey: "lastname",
        //     header: () => {
        //   return (
        //     <Button
        //       variant="ghost"
        //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        //     >
        //       Last name
        //       <ArrowUpDown className="ml-2 h-4 w-4" />
        //     </Button>
        //   )
        accessorKey: 'lastname',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Last Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'startDate',
        // header: 'Start Date',
        accessorKey: 'startDate',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Start Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'department',
        // header: 'Department',
        accessorKey: 'department',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Department
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'dateOfBirth',
        // header: 'Date of Birth',
        accessorKey: 'dateOfBirth',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Date of Birth
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'street',
        // header: 'Street',
        accessorKey: 'street',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Street
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'city',
        // header: 'City',
        accessorKey: 'city',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                City
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'state',
        // header: 'State',
        accessorKey: 'state',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                State
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        // accessorKey: 'zipCode',
        // header: 'Zip Code',
        accessorKey: 'zipCode',
        header: ({ column }) => (
            <Button
                className="pl-0"
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === 'asc')
                }
            >
                Zip Code
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
];
