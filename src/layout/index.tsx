import { FC } from 'react';
import Content from '../views/content/index';
import Editor from '../views/editor/index';

const Layout: FC = (props) => (
  <div className="flex h-1/1">
    <div className="flex-1">
      <Content />
    </div>
    <div className="flex-1">
      <Editor />
    </div>
  </div>
);

export default Layout;
