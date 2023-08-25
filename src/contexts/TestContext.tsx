import { createContext, useContext, useMemo, useState } from 'react';

interface ITestContextInterface {
  value1: string | { [id: string]: any } | null;
  setValue1:
    | React.Dispatch<React.SetStateAction<string | { [id: string]: any } | null>>
    | (() => void);
}

const testContextDefault: ITestContextInterface = {
  value1: null,
  setValue1: () => undefined,
};

export const TestContext = createContext<ITestContextInterface>(testContextDefault);

export const useTestContext = () => useContext(TestContext);

export const useTestContextValue = () => {
  const { value1 } = useTestContext();
  return value1;
};

export const TestContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value1, setValue1] = useState<ITestContextInterface['value1']>(null);

  const memVal = useMemo(() => [value1, setValue1], [value1]);
  const value: ITestContextInterface = {
    value1: memVal[0] as string,
    setValue1: memVal[1] as React.Dispatch<
      React.SetStateAction<string | { [id: string]: any } | null | null>
    >,
  };
  // const value = { value1, setValue1 };
  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};
