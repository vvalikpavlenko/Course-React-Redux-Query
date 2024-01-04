import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
