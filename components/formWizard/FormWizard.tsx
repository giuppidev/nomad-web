import {
  FormWizardContext,
  FormWizardContextType,
  useFormWizardContext,
} from "@/context/FormWizardContext";

type FormWizardProps = {
  children: React.ReactNode;
  currentIndex: number;
};
type FormWizardItemProps = {
  children: React.ReactNode;
  index: number;
};

const FormWizard = ({ children, currentIndex }: FormWizardProps) => {
  const initialValues: FormWizardContextType = {
    currentIndex: currentIndex,
  };

  return (
    <FormWizardContext.Provider value={initialValues}>
      {children}
    </FormWizardContext.Provider>
  );
};

const FormWizardItem = ({ children, index }: FormWizardItemProps) => {
  const { currentIndex } = useFormWizardContext();

  if (currentIndex === index) return <>{children}</>;
  return null;
};

export { FormWizard, FormWizardItem };
