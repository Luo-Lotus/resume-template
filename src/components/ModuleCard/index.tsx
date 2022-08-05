import { FC, PropsWithChildren } from 'react';
import styles from './index.module.css';

type Props = {
  title: string;
};

const ModuleCard: FC<PropsWithChildren<Props>> = ({ children, title }) => (
  <div>
    <div className={`${styles.title} flex items-center justify-between color-blue font-900 text-3xl cursor-pointer`}>
      <div className="">{title}</div>
      <div className="i-ant-design-caret-down-filled hover:rotate-180 transition-500" />
    </div>
    <div>{children}</div>
  </div>
);

export default ModuleCard;
