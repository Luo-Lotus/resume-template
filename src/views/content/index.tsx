import { FC, memo, PropsWithChildren } from 'react';

const Component: FC<PropsWithChildren> = ({ children }) => <div className="bg-red">{children}</div>;

export default memo(Component);
