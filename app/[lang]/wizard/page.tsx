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
      content: <Item currentIndex={0} />,
      completed: false,
      index: 0,
    },
    {
      content: <Item currentIndex={1} />,
      completed: false,
      index: 1,
    },
    {
      content: <Item currentIndex={2} />,
      completed: false,
      index: 2,
    },
  ];

  return (
    <FormWizard wizardSteps={formWizardItem}>
      {formWizardItem.map((item, index) => (
        <FormWizardItem key={index} index={index}>
          {item.content}
        </FormWizardItem>
      ))}
    </FormWizard>
  );
}

const Item = ({ currentIndex }: { currentIndex: number }) => {
  const { setStepCompleted } = useFormWizardContext();

  const completeStep = () => {
    setStepCompleted(currentIndex);
  };

  return (
    <div>
      <div>{currentIndex}</div>
      <button onClick={completeStep}>Complete</button>
    </div>
  );
};
