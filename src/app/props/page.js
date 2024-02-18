import Demo from "@/components/Demo";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <div>
      <Demo data={data} />
      <Image
        alt="pic"
        width={500}
        height={500}
        src="https://images.unsplash.com/photo-1637214599674-8bd83beb260b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        src="https://img.freepik.com/free-photo/mesmerizing-scenery-green-mountains-with-cloudy-sky-surface_181624-27189.jpg?w=1060&t=st=1708220506~exp=1708221106~hmac=f4cc24afc4aca8485a877eaa97e3b448db72c8c02b7f59e9dbe72016c495e1a6"
        width={500}
        height={500}
        alt="free"
        layout="responsive"
      />
      
    </div>
  );
};

export default page;
