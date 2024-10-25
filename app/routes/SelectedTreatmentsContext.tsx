import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedTreatmentsContextProps {
    selectedTreatments: string[];
    setSelectedTreatments: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedTreatmentsContext = createContext<SelectedTreatmentsContextProps | undefined>(undefined);

export const SelectedTreatmentsProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);

    return (
        <SelectedTreatmentsContext.Provider value={{ selectedTreatments, setSelectedTreatments }}>
            {children}
        </SelectedTreatmentsContext.Provider>
    );
};

export const useSelectedTreatments = () => {
    const context = useContext(SelectedTreatmentsContext);
    if (!context) throw new Error("useSelectedTreatments must be used within SelectedTreatmentsProvider");
    return context;
};
