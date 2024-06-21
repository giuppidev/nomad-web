"use client";

import { FormWizard, FormWizardItem } from "@/components/formWizard/FormWizard";
import { Locale } from "@/i18n.config";
import ExampleButton from "@/shared/components/ExampleButton";
import { useState } from "react";

export default function Wizard({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [currentStep, setCurrentStep] = useState(0);

  const formWizardItem = [
    {
      index: 0,
      content: <ExampleButton setCurrentStep={setCurrentStep} />,
    },
    {
      index: 1,
      content: <ExampleButton setCurrentStep={setCurrentStep} />,
    },
    {
      index: 2,
      content: <ExampleButton setCurrentStep={setCurrentStep} />,
    },
  ];

  return (
    <FormWizard currentIndex={currentStep}>
      {formWizardItem.map((item) => (
        <FormWizardItem key={item.index} index={item.index}>
          {item.content}
        </FormWizardItem>
      ))}
    </FormWizard>
  );
}
