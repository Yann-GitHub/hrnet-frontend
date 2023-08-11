import { ReactNode, createContext, useContext, useState } from 'react';
import registerSchema from '@/validators/auth';
import { z } from 'zod'; // input validation library - type safe

import { format } from 'date-fns';

import initialEmployeeList from '../data/initialEmployeeList.ts';

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

// Create a context

const initialInputs: InputsFormated[] = [...initialEmployeeList];

interface EmployeeContextType {
    employees: InputsFormated[];
    setEmployees: React.Dispatch<React.SetStateAction<InputsFormated[]>>;
}

// const EmployeeContext = createContext<Inputs>(initialInputs);
const EmployeeContext = createContext<EmployeeContextType>({
    employees: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setEmployees: () => {},
});

// Create a custom hook to use the context
export const useEmployeeContext = () => useContext(EmployeeContext);

// Create a provider to wrap the app and provide the context
export const EmployeeContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [employees, setEmployees] = useState<InputsFormated[]>(initialInputs);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};
