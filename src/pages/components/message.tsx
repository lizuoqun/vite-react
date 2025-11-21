import {createRoot, Root} from 'react-dom/client';
import React from 'react';

let count = 1;
const Message: React.FC = () => {
  return <div>这是第{count++}条消息提示</div>;
};

interface Item {
  messageContainer: HTMLDivElement;
  root: Root;
}

const queue: Item[] = [];

window.onShowMessage = () => {
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message';
  messageContainer.style.transform = `translateY(${queue.length * 50}px)`;
  document.body.appendChild(messageContainer);
  const root = createRoot(messageContainer);
  root.render(<Message/>);
  queue.push({messageContainer, root});


  setTimeout(() => {
    const item = queue.find(item => item.messageContainer === messageContainer) as Item;
    item.messageContainer.classList.add('removing');
    // 等待动画结束后再移除元素
    setTimeout(() => {
      item.root.unmount();
      document.body.removeChild(item.messageContainer);
      queue.splice(queue.indexOf(item), 1);
      queue.forEach((item, index) => {
        (item.messageContainer as HTMLElement).style.transform = `translateY(${index * 50}px)`;
      });
    }, 300);
  }, 2000);
};

declare global {
  interface Window {
    onShowMessage: () => void;
  }
}

export default Message;
