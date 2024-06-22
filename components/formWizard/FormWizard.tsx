"use client";
import {
  FormWizardContext,
  FormWizardContextType,
  FormWizardItemType,
  useFormWizardContext,
} from "@/context/FormWizardContext";
import CustomMotionDiv from "@/shared/components/CustomMotionDiv/CustomMotionDiv";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type FormWizardProps = {
  children: React.ReactNode;
  wizardSteps: FormWizardItemType[];
};
type FormWizardItemProps = {
  children: React.ReactNode;
  index: number;
};

const FormWizard = ({ children, wizardSteps }: FormWizardProps) => {
  const [steps, setSteps] = useState(wizardSteps);
  const [currentStep, setCurrentStep] = useState(0);

  const initialValues: FormWizardContextType = {
    currentStep,
    setCurrentStep: (step: number) => setCurrentStep(step),
    setStepCompleted: (stepIndex: number) =>
      setSteps(
        steps.map((step, index) =>
          index === stepIndex ? { ...step, completed: true } : step,
        ),
      ),
    steps,
  };

  return (
    <FormWizardContext.Provider value={initialValues}>
      {children}
    </FormWizardContext.Provider>
  );
};

const FormWizardItem = ({ children, index }: FormWizardItemProps) => {
  const { currentStep, setCurrentStep, steps } = useFormWizardContext();
  const [visibile, setVisible] = useState(true);

  useEffect(() => {
    setVisible(currentStep === index);
  }, [currentStep, index]);

  if (currentStep !== index) {
    return null;
  }

  const nextStep = (nextStep: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentStep(nextStep);
    }, 500);
  };

  return (
    <AnimatePresence>
      {visibile && (
        <div className="flex items-center flex-wrap justify-center  gap-10 h-50">
          {currentStep > 0 && (
            <CustomMotionDiv
              key={"custom1"}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
              exit={{ x: "-100vw" }}
            >
              <Button
                className="p-4"
                variant={"primary"}
                onClick={() => nextStep(currentStep - 1)}
              >
                PREV
              </Button>
            </CustomMotionDiv>
          )}
          <CustomMotionDiv
            key={"custom2"}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "", duration: 1.5 }}
            exit={{ y: "-100vh" }}
          >
            {children}
          </CustomMotionDiv>
          {currentStep < steps.length - 1 && (
            <CustomMotionDiv
              key={"custom3"}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
              exit={{ x: "100vw" }}
            >
              <Button
                className="m-4"
                variant={"primary"}
                onClick={() => nextStep(currentStep + 1)}
                disabled={!steps[currentStep].completed}
              >
                NEXT
              </Button>
            </CustomMotionDiv>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export { FormWizard, FormWizardItem };
