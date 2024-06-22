import { createContext, useContext, ReactNode } from "react";

export type FormWizardItemType = {
  content: ReactNode;
  completed: boolean;
  index: number;
};

export type FormWizardContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: FormWizardItemType[];
  setStepCompleted: (step: number) => void;
};

export const FormWizardContext = createContext<FormWizardContextType>({
  currentStep: 0,
  setCurrentStep: () => null,
  steps: [],
  setStepCompleted: (steps: number) => null,
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
