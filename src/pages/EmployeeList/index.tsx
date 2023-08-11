// import { Link } from 'react-router-dom';
import * as React from 'react';
import { useState, useMemo } from 'react';
import team from '../../assets/team.svg';
import { useEmployeeContext } from '../../context/employeeContext';

import { columns } from './columns';
import registerSchema from '@/validators/auth';
import { z } from 'zod';

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    PaginationState,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import { set } from 'date-fns';

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

function EmployeeList() {
    const { employees } = useEmployeeContext();

    // const [rowsPerPage, setRowsPerPage] = useState(10); // Pagination number of entries - Initial value: 10
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    // Calculate the total number of pages based on the total number of employees and page size
    // const totalPageCount = Math.ceil(employees.length / pageSize);

    // const [sorting, setSorting] = React.useState<SortingState>([]);

    const table = useReactTable<InputsFormated>({
        columns,
        data: employees,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // Sorting per column

        // pageCount: -1,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        // state: {
        //     // sorting,
        //     pagination: {
        //         pageIndex,
        //         pageSize,
        //     },
        // },
        // onPaginationChange: setPagination,
        // manualPagination: true,
        getPaginationRowModel: getPaginationRowModel(), // Pagination

        // pageCount: totalPageCount, // Set the calculated totalPageCount

        // getPaginationRowModel: (options) =>
        //     getPaginationRowModel({ ...options, pageSize: rowsPerPage }),
        // onSortingChange: setSorting,
    });

    return (
        <div className="section-min-height flex flex-col justify-start items-center mx-36">
            <div className="flex flex-col justify-center items-center mb-3 mt-14">
                <img src={team} alt="team" className="w-1/3" />
                <h2 className="text-xl text-blue-600 mt-3">Employee List</h2>
            </div>
            <div className="flex flex-row justify-end items-center w-full mb-3">
                <p className="text-gray-600 text-sm pr-3">Show entries</p>
                {/* <Select
                    onValueChange={(e) =>
                        setRowsPerPage(Number(e.target.value))
                    }
                > */}
                <Select
                    // value={table.getState().pagination.pageSize}
                    // onChange={(e) => {
                    //     table.setPageSize(Number(e.target.value));
                    // }}
                    // value={table.getState().pagination.pageSize}
                    // onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    //     setPagination(
                    //         e.target.value as unknown as PaginationState
                    //     )
                    // }
                    // value={table.getState().pagination.pageSize.toString()} // Convert to string
                    // onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    //     setPagination({
                    //         pageIndex: table.getState().pagination.pageIndex,
                    //         pageSize: Number(e.target.value), // Convert to number
                    //     })
                    // }
                    value={table.getState().pagination.pageSize.toString()} // Convert to string
                    onValueChange={(value: string) =>
                        setPagination({
                            // pageIndex: table.getState().pagination.pageIndex,
                            pageIndex: 0,
                            pageSize: Number(value), // Convert to number
                        })
                    }
                >
                    <SelectTrigger className="w-[60px]">
                        <SelectValue placeholder="jdfkjd" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value={'5'}>5</SelectItem>
                            <SelectItem value={'10'}>10</SelectItem>
                            <SelectItem value={'25'}>25</SelectItem>
                            <SelectItem value={'50'}>50</SelectItem>
                            <SelectItem value={'100'}>100</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="rounded-md border w-full">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && 'selected'
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="w-full flex flex-row justify-end items-center mt-3 mb-14">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    className="ml-3"
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
                {/* <pre>{JSON.stringify(pagination, null, 2)}</pre> */}
            </div>
        </div>
    );
}

export default EmployeeList;
