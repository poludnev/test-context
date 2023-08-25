import { ITestComponent1Props } from './TestComponent1Props';
import styles from './TestComponent1.module.scss';
import { useTestContext } from '../../contexts/TestContext';
import { memo } from 'react';
import { useTestContextValue } from '../../contexts/TestContext';
const TestComponent1_m: React.FC<ITestComponent1Props> = () => {
  console.count('render TestComponent1');
  // const { value1 } = useTestContext();
  // console.log('testContext value1', value1);
  console.log(useTestContextValue());

  return <div className={styles.container}>TestComponent1</div>;
};

export const TestComponent1 = memo(TestComponent1_m);
