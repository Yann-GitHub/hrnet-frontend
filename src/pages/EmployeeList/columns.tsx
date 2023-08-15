import { InputsFormated } from '../../types/index';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table'; // Type or Interface defined properties of a column
import { ArrowUpDown } from 'lucide-react';

export const columns: ColumnDef<InputsFormated>[] = [
    {
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
