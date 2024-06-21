import { createContext, useContext } from "react";

export type FormWizardContextType = {
  currentIndex: number;
};

export const FormWizardContext = createContext<FormWizardContextType>({
  currentIndex: 0,
});

export const useFormWizardContext = () => {
  const context = useContext(FormWizardContext);
  if (!context) {
    throw new Error(
      "useFormWizardContext must be used within a FormWizardContextProvider",
    );
  }
  return context;
};
