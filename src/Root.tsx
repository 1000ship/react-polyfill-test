import App from 'App';
import MainContext, { defaultValue, IMainContext } from 'contexts/MainContext';
import React, { useState } from 'react';

const Root: React.FC = () => {
  const [context, setContext] = useState<IMainContext>(defaultValue);
  return (
    <MainContext.Provider value={context}>
      <App setContext={setContext} />
    </MainContext.Provider>
  );
};

export default Root;
