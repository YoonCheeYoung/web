'use client'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'


function Example() {
const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
];


return (
    <div>
    <Stepper index={1}>
        {steps.map((step, index) => (
        <Step key={index}>
            <StepIndicator>
            <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
            />
            </StepIndicator>

            <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
        </Step>
        ))}
    </Stepper>
    </div>
);
}

export default Example;