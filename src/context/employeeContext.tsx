import { ReactNode, createContext, useContext, useState } from 'react';
import { InputsFormated } from '../types/index.ts';
import initialEmployeeList from '../data/initialEmployeeList.ts';

interface EmployeeContextType {
    employees: InputsFormated[];
    setEmployees: React.Dispatch<React.SetStateAction<InputsFormated[]>>;
}

// Create a context
const initialInputs: InputsFormated[] = [...initialEmployeeList];

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
