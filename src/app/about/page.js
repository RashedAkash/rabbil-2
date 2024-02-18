import Image from "next/image";

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
 
  return (
    <div>
      about
      <h1>{data["data1"].length}</h1>
      <h1>{data["data2"].length}</h1>
      <h1>{data["data3"].length}</h1>
      <h1>{data["data4"].length}</h1>
      <Image
        alt="pic"
        src="https://plus.unsplash.com/premium_photo-1706625698049-02ddcd91361d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={400}
        height={300}
      />
      <Image
        alt="res"
        width={500}
        height={400}
        src="https://images.unsplash.com/photo-1696388790726-68161096266e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default page;
