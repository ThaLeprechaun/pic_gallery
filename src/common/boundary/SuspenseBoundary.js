import React, { Suspense } from 'react'
import useDelayedRender from './UseDelay';

const DelayedRender = ({delay, children}) => useDelayedRender(delay)(()=>children);

function SuspenseBoundary({children}) {
  return <Suspense fallback={<DelayedRender delay={5000}>Loading...</DelayedRender>}>
    {children}
  </Suspense>
}

export default SuspenseBoundary;
