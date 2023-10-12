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

function StepLayout({activeStep}) {
    const steps = [
        { title: 'Step 1', description: '데이터 업로드' },
        { title: 'Step 2', description: '데이터 확인' },
        { title: 'Step 3', description: '모델 데이터 확인' },
    ];
    
    const stepperStyle = {
        marginLeft  : '150px',
        marginRight : '30px',
        margintop : '0px'
    }
    // const { activeStep } = useSteps({
    //     index: 0,
    //     count: steps.length,
    //   })
    

    return (
        <div>
        {/* <h1 style={{ textAlign: 'center' }}>정성 조사 결과 자동 분석</h1> */}
        <div style = {stepperStyle}>
        <Stepper index={activeStep}>
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
        </div>
    );
}

export default StepLayout;