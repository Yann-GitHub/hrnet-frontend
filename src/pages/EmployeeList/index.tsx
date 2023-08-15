// import * as React from 'react';
import { useState, useMemo } from 'react';
import team from '../../assets/team.svg';

import { useEmployeeContext } from '../../context/employeeContext';
import { columns } from './columns';
import { InputsFormated } from '../../types/index';

import {
    SortingState,
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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    // SelectLabel,
} from '@/components/ui/select';

import DebouncedInput from '@/components/ui/debouncedInput';

function EmployeeList() {
    const { employees } = useEmployeeContext(); // Get data from context

    // Pagination state
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    // Ensure that the pagination object is only recalculated when the pageIndex or pageSize changes - performance optimization
    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    // Sorting per column state
    const [sorting, setSorting] = useState<SortingState>([]);

    // Global Filters for all columns state
    const [globalFilter, setGlobalFilter] = useState('');

    // All table data and logic is encapsulated in the useReactTable hook
    const table = useReactTable<InputsFormated>({
        columns,
        data: employees,
        state: {
            pagination,
            sorting,
            globalFilter,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // Sorting per column
        onSortingChange: setSorting,
        getPaginationRowModel: getPaginationRowModel(), // Pagination
        onPaginationChange: setPagination,
        getFilteredRowModel: getFilteredRowModel(), // Global Filters for all columns
    });

    return (
        <div className="section-min-height flex flex-col justify-start items-center mx-36">
            <div className="flex flex-col justify-center items-center mb-3 mt-14">
                <img src={team} alt="team" className="w-1/3" />
                <h2 className=" text-blue-600 mt-3 text-3xl">Employee List</h2>
            </div>
            <div className="flex flex-row justify-between items-center w-full mb-3">
                <div>
                    <DebouncedInput
                        value={globalFilter ?? ''}
                        onChange={(value) => setGlobalFilter(String(value))}
                        className="max-w-sm"
                        placeholder="Search all columns..."
                    />
                </div>
                <div className="flex flex-row justify-center items-center">
                    <p className="text-gray-600 text-sm pr-3">Show entries</p>
                    <Select
                        value={table.getState().pagination.pageSize.toString()}
                        onValueChange={(value: string) =>
                            setPagination({
                                pageIndex: 0,
                                pageSize: Number(value),
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
            <div className="w-full flex flex-row justify-between items-center mt-3 mb-14">
                <div className="text-sm text-black text-opacity-50">
                    Page {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </div>
                <div>
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
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;
