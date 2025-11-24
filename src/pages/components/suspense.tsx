import React, {ComponentType, lazy, Suspense} from 'react';

const AsyncComponent = lazy<ComponentType>(() => import('./AsyncComponent'));

const SuspenseComponent: React.FC = () => {
  return <>
    <Suspense fallback={<div>loading...</div>}>
      <AsyncComponent/>
    </Suspense>
  </>;
};

export default SuspenseComponent;
