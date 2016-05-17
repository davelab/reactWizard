import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const Steps = [
    { name: "Step One", component: <StepOne /> },
    { name: "Step Two", component: <StepTwo /> },
    { name: "Step Three", component: <StepThree /> }
];

export { Steps };