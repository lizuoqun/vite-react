import React from 'react';
import {createPortal} from 'react-dom';

const Portal: React.FC = () => {
  // 封装dialog传送到body下，防止样式影响
  return createPortal(<div>Modify</div>, document.body);
};
export default Portal;
