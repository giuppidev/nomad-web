import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import CustomMotionDiv from "../../../shared/components/CustomMotionDiv/CustomMotionDiv";

type ExampleButtonProps = {
  setCurrentStep: Dispatch<SetStateAction<number>>;
};

const ExampleButton = ({ setCurrentStep }: ExampleButtonProps) => {
  const [visibile, setInvisible] = useState(true);

  const nextStep = () => {
    setInvisible(false);
    setTimeout(() => {
      setCurrentStep((index) => index + 1);
    }, 500);
  };

  return (
    <AnimatePresence>
      {visibile && (
        <div className="flex items-center flex-wrap justify-center  gap-10 h-50">
          <CustomMotionDiv
            key={"custom1"}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            exit={{ x: "-100vw" }}
          >
            <Button className="p-4" variant={"primary"} onClick={nextStep}>
              {" "}
              PRIMO BOTTONE
            </Button>
          </CustomMotionDiv>
          <CustomMotionDiv
            key={"custom2"}
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "", duration: 1.5 }}
            exit={{ y: "-100vh" }}
          >
            <Button className="p-4" variant={"primary"} onClick={nextStep}>
              SEC BOTTONE
            </Button>
          </CustomMotionDiv>
          <CustomMotionDiv
            key={"custom3"}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            exit={{ x: "100vw" }}
          >
            <Button className="m-4" variant={"primary"} onClick={nextStep}>
              {" "}
              PRIMO BOTTONE
            </Button>
          </CustomMotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExampleButton;
