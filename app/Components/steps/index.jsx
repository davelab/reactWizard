import React from 'react';
import StepOne from './StepOne.jsx';
import StepTwo from './StepTwo.jsx';
import StepThree from './StepThree.jsx';

const Steps = [
    { name: "Step One", component: <StepOne /> },
    { name: "Step Two", component: <StepTwo /> },
    { name: "Step Three", component: <StepThree /> }
];

export { Steps };