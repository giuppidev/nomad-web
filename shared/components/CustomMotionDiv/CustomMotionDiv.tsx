import { HTMLMotionProps, motion } from "framer-motion";

interface CustomMotionDivProps extends HTMLMotionProps<"div"> {}

const CustomMotionDiv = (props: CustomMotionDivProps) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export default CustomMotionDiv;
