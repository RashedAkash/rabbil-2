

const page = () => {
   console.log(process.env.API_KEY);
  return <div>
   
    {process.env.API_KEY}
    <h1>Hello World</h1>
    <h2>Hello World</h2>
  </div>;
};

export default page;
