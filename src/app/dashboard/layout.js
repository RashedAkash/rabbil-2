import Sidebar from '@/components/Sidebar';


const layout = ({children}) => {
  return (
    <div className=' grid grid-cols-12 gap-5'>
      <div className=' col-span-3 '>
        <Sidebar />
      </div>
      <div className=' col-span-9'>{children}</div>
    </div>
  );
};

export default layout;