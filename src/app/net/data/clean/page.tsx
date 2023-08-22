'use client'

import Example from '../../net/components/stepper'; // Make sure to provide the correct path

function stps() {
  return (
    <div>
      {/* Use the Example component and set the activeStep prop */}
      <Example activeStep={2} />
    </div>
  );
}

export default stps;