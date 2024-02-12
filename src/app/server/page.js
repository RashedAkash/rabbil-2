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

const page = async() => {
  const data = await getData();
  console.log(data);
  return <div>
    server
    <h1>{JSON.stringify(data) }</h1>
  </div>;
};

export default page;
