import { FC, PropsWithChildren } from 'react';
import ModuleCard from '@components/ModuleCard';

const Component: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <ModuleCard title="模块标题" />
  </div>
);

export default Component;
