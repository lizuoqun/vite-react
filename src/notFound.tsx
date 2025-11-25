import {Link} from 'react-router';

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f5f5f5]">
      <h1 className="text-9xl text-blue-500">404</h1>
      <p className="text-2xl text-gray-500">
        抱歉，您访问的页面不存在
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-2">
        返回首页
      </Link>
    </div>
  );
}
