"use client";

import { FormWizard, FormWizardItem } from "@/components/formWizard/FormWizard";
import {
  FormWizardItemType,
  useFormWizardContext,
} from "@/context/FormWizardContext";
import { Locale } from "@/i18n.config";
import { useState } from "react";

export default function Wizard({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const formWizardItem: FormWizardItemType[] = [
    {
      content: <Item />,
      completed: false,
    },
    {
      content: <Item />,
      completed: false,
    },
    {
      content: <Item />,
      completed: false,
    },
  ];

  return (
    <FormWizard wizardSteps={formWizardItem}>
      {formWizardItem.map((item, index) => (
        <FormWizardItem key={index} stepIndex={index}>
          {item.content}
        </FormWizardItem>
      ))}
    </FormWizard>
  );
}

const Item = () => {
  const { setStepCompleted, currentStep } = useFormWizardContext();

  /** Puoi prendere il current step dal context **/
  const completeStep = () => {
    setStepCompleted(currentStep);
  };

  return (
    <div>
      <div>{currentStep}</div>
      <button onClick={completeStep}>Complete</button>
    </div>
  );
};
