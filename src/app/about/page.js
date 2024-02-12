async function getData() {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
    const res3 = await fetch("https://jsonplaceholder.typicode.com/users");
    const res4 = await fetch("https://jsonplaceholder.typicode.com/users");

    const data1= await res1.json()
    const data2= await res2.json()
    const data3= await res3.json()
    const data4= await res4.json()
     return {data1:data1,data2:data2,data3:data3,data4:data4};
  } catch (error) {
     throw new Error("Failed to fetch data");
  }


 
}

const page = async() => {
  const data = await getData()
 
  return <div>about
    <h1>{data['data1'].length }</h1>
    <h1>{data['data2'].length }</h1>
    <h1>{data['data3'].length }</h1>
    <h1>{data['data4'].length }</h1>
  
  </div>;
};

export default page;
