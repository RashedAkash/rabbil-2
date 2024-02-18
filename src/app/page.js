

const page = () => {
   console.log(process.env.API_KEY);
  return <div>
   
    {process.env.API_KEY}
  </div>;
};

export default page;
