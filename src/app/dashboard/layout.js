import Sidebar from '@/components/Sidebar';


const layout = ({children}) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;