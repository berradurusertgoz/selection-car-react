import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [carOptions, setCarOptions] = useState();
    const [steps] = useState([{
        link: "/colors",
        name: "COLORS",
    },
    {
        link: "/accessories",
        name: "ACCESSORIES",
    },
    {
        link: "/summary",
        name: "SUMMARY"
    },
    {
        link: "",
        name: "BUY NOW"
    }
    ]);
    const [stepCount, setStepCount] = useState(0);

    const values = {
        carOptions,
        setCarOptions,
        steps,
        stepCount,
        setStepCount
    }
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}
export const useData = () => useContext(DataContext)
