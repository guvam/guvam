"use client";

import type { FC, ReactElement, ReactNode } from "react";
import { Children, isValidElement, useEffect, useMemo, useState } from "react";
import { ArrowClockwise, Check, Exclamation, Question } from "react-bootstrap-icons";

import { classList } from "./utils/classList";

export const StepperIconError = () => <Exclamation className="Stepper-icon Stepper-icon--error" />;
export const StepperIconWarning = () => <Question className="Stepper-icon Stepper-icon--warning" />;
export const StepperIconDone = () => <Check className="Stepper-icon Stepper-icon--done" />;
export const StepperIconLoading = () => (
  <ArrowClockwise className="Stepper-icon Stepper-icon--loading" />
);

type StepperItemProps = {
  header: string;
  subheader: string;
  icon?: ReactNode;
};
export const StepperItem: FC<StepperItemProps> = () => null;

type StepperProps = {
  children: ReactElement<StepperItemProps>[];
  activeIndex?: number;
  layout?: "vertical" | "horizontal";
  onChange?: (activeStep: number, count: number) => void;
};

export const Stepper: FC<StepperProps> = ({
  layout = "horizontal",
  children,
  activeIndex = 0,
  onChange,
}) => {
  const items = useMemo(() => Children.map(children, (x) => x).filter(isValidElement), [children]);
  const [activeStep, setActiveStep] = useState(activeIndex);

  useEffect(
    () => setActiveStep(Math.min(items.length, Math.max(0, activeIndex))),
    [activeIndex, items]
  );
  useEffect(() => onChange?.(activeStep, items.length), [activeStep, onChange, items]);

  return (
    <div
      className={classList({
        Stepper: true,
        "Stepper--Vertical": layout === "vertical",
        "Stepper--Horizontal": layout === "horizontal",
      })}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className={classList({
            "Stepper-Item": true,
            "Stepper-Item--Completed": activeStep > index,
            "Stepper-Item--Active": activeStep === index,
          })}
        >
          <div className="Stepper-itemOutline">
            <button className="Stepper-button" onClick={() => setActiveStep(index)}>
              <span className="Stepper-number">
                {child.props.icon ? (
                  child.props.icon
                ) : activeStep > index ? (
                  <StepperIconDone />
                ) : (
                  index + 1
                )}
              </span>
              <span className="Stepper-content">
                <span className="Stepper-header">{child.props.header}</span>
                <span className="Stepper-Subheader">{child.props.subheader}</span>
              </span>
            </button>
          </div>
          {index < items.length - 1 && <div className="Stepper-separator" />}
        </div>
      ))}
    </div>
  );
};
