import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define context types
interface SelectedTreatmentContextType {
    selectedTreatments: string[];
    setSelectedTreatments: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedTreatmentContext = createContext<SelectedTreatmentContextType | undefined>(undefined);

// Provider component
export const SelectedTreatmentProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);

    return (
        <SelectedTreatmentContext.Provider value={{ selectedTreatments, setSelectedTreatments }}>
            {children}
        </SelectedTreatmentContext.Provider>
    );
};

// Custom hook
export const useSelectedTreatment = () => {
    const context = useContext(SelectedTreatmentContext);
    if (!context) {
        throw new Error("useSelectedTreatment must be used within a SelectedTreatmentProvider");
    }
    return context;
};
