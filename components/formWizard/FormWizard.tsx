"use client";
import {
  FormWizardContext,
  FormWizardContextType,
  FormWizardItemType,
  useFormWizardContext,
} from "@/context/FormWizardContext";
import CustomMotionDiv from "@/shared/components/CustomMotionDiv/CustomMotionDiv";
import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import React from "react";

type FormWizardProps = {
  children: React.ReactNode;
  wizardSteps: FormWizardItemType[];
};
type FormWizardItemProps = {
  children: React.ReactNode;
  stepIndex: number;
};

const FormWizard = ({ children, wizardSteps }: FormWizardProps) => {
  const [steps, setSteps] = useState(wizardSteps);
  const [currentStep, setCurrentStep] = useState(0);

  const stepsChildren = useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  const setStepCompleted = useCallback(
    (stepIndex: number) =>
      setSteps((prevSteps) =>
        prevSteps.map((step, index) =>
          index === stepIndex ? { ...step, completed: true } : step,
        ),
      ),
    [setSteps],
  );

  const setStepNotCompleted = useCallback(
    (stepIndex: number) =>
      setSteps((prevSteps) =>
        prevSteps.map((step, index) =>
          index === stepIndex ? { ...step, completed: false } : step,
        ),
      ),
    [setSteps],
  );

  const initialValues: FormWizardContextType = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
      setStepCompleted,
      setStepNotCompleted,
      steps,
    }),
    [currentStep, setCurrentStep, setStepCompleted, setStepNotCompleted, steps],
  );

  return (
    <FormWizardContext.Provider value={initialValues}>
      {stepsChildren[currentStep]}
    </FormWizardContext.Provider>
  );
};

const FormWizardItem = ({ children, stepIndex }: FormWizardItemProps) => {
  const { currentStep, setCurrentStep, steps, setStepNotCompleted } =
    useFormWizardContext();
  const [visibile, setVisible] = useState(true);

  useEffect(() => {
    setVisible(currentStep === stepIndex);
  }, [currentStep, stepIndex]);

  const nextStep = useCallback(
    (nextStep: number, prev: boolean) => {
      setVisible(false);
      /** If prev step, disable completed */
      if (prev) {
        setStepNotCompleted(currentStep - 1);
      }
      setTimeout(() => {
        setCurrentStep(nextStep);
      }, 500);
    },
    [currentStep, setVisible, setStepNotCompleted, setCurrentStep],
  );

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
                onClick={() => nextStep(currentStep - 1, true)}
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
                onClick={() => nextStep(currentStep + 1, false)}
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
