import { ReactNode, createContext, useContext, useState } from 'react';
import registerSchema from '@/validators/auth';
import { z } from 'zod'; // input validation library - type safe

// Create a context
// const EmployeeContext = createContext<any>(null);
type Inputs = z.infer<typeof registerSchema>; // infer the type of registerSchema

// const initialInputs: Inputs = {
//     firstname: '',
//     lastname: '',
//     dateOfBirth: new Date(),
//     startDate: new Date(),
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     department: '',
// };

interface EmployeeContextType {
    employees: Inputs[];
    setEmployees: React.Dispatch<React.SetStateAction<Inputs[]>>;
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
    const [employees, setEmployees] = useState<Inputs[]>([]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};
