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
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAOVBMVEX///+hoaGampqdnZ2srKy0tLSoqKjZ2dnq6ur39/fAwMDt7e3g4OC7u7vw8PD6+vqTk5PS0tLIyMhAQKZNAAACjElEQVR4nO3a2XKqQBRAUXsCZGz4/4+9EhCQsS50FYeqvV41hm17Gkh8vQAAAAAAAAAAAAAAAAAAAAAAAAAACCIvXFB1dWNMo01I2iY3xqRGGR2KUcrmt8aYOksCyZ2+OUaH+/VlQUwwxGwRFJM3aXNtYxUTk7hIfRTvCy8mJSZxpm1Rxl2okRKTdi1K6QsXJEJiEvuNUfb80giJiaNvi9Ll6RcTElOrMSY7/WJCYnI7xJjHr0zpvjNzZTsTEjN+zvzueTPVqtl+VErM5y5Nt+vi472dufisnyk2HxYT8/rcjHjtdgcm9n+LV289Lifm9aoOTpel7z+KW/udpJgjw4YXbTzhQTGpHnbvjbF5Tkzu1Wh9bJ4TM21RanWjeExMZH5iVsfmKTHjwPTSlSc9JCbxsxZl4uWzHhKzaFFGLa/hZMZks9PibGA6bvFjImOs99H0fa/nA9NZXHJKjGlvoY0ar22WA9Ob/6TAmObvQLUbatbXpd2fZ2cbeTFxf6T+e5Z3awPTbQKzyxpxMeXwpw3fve/11odsOTbiYsZ16MYm22sx6ue+VFpMMzlUXVST6/71Gju9BxIWk6vpgPh4Z2D6munYyIqp7O+xm+agRf3cDciKKebHvrkrj73RODaiYurDQ1+rGU9IkmKS1Uuw45rhbkBQzPto2LdE37sBQTHpyZbP/tyPjZyYyX81/rumHxsxMYk9uzCtRlRMdXZguqXpxkZKTHN8xLs1LpMTE5/blSc17XWcjJjEHp/qD2LasZER00T2qsglMmKqMguglBATv0NJbo9RLg2liMy9MTrgdzS1uTemjsIqzn+L4Loqj4M6//UOAAAAAAAAAAAAAAAAAAAAAAAAAMBl/wCSoC7OdsS5KwAAAABJRU5ErkJggg=="
      />
      <Image
        alt="res"
        width={500}
        height={400}
        src="https://images.unsplash.com/photo-1696388790726-68161096266e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="responsive"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAOVBMVEX///+hoaGampqdnZ2srKy0tLSoqKjZ2dnq6ur39/fAwMDt7e3g4OC7u7vw8PD6+vqTk5PS0tLIyMhAQKZNAAACjElEQVR4nO3a2XKqQBRAUXsCZGz4/4+9EhCQsS50FYeqvV41hm17Gkh8vQAAAAAAAAAAAAAAAAAAAAAAAAAACCIvXFB1dWNMo01I2iY3xqRGGR2KUcrmt8aYOksCyZ2+OUaH+/VlQUwwxGwRFJM3aXNtYxUTk7hIfRTvCy8mJSZxpm1Rxl2okRKTdi1K6QsXJEJiEvuNUfb80giJiaNvi9Ll6RcTElOrMSY7/WJCYnI7xJjHr0zpvjNzZTsTEjN+zvzueTPVqtl+VErM5y5Nt+vi472dufisnyk2HxYT8/rcjHjtdgcm9n+LV289Lifm9aoOTpel7z+KW/udpJgjw4YXbTzhQTGpHnbvjbF5Tkzu1Wh9bJ4TM21RanWjeExMZH5iVsfmKTHjwPTSlSc9JCbxsxZl4uWzHhKzaFFGLa/hZMZks9PibGA6bvFjImOs99H0fa/nA9NZXHJKjGlvoY0ar22WA9Ob/6TAmObvQLUbatbXpd2fZ2cbeTFxf6T+e5Z3awPTbQKzyxpxMeXwpw3fve/11odsOTbiYsZ16MYm22sx6ue+VFpMMzlUXVST6/71Gju9BxIWk6vpgPh4Z2D6munYyIqp7O+xm+agRf3cDciKKebHvrkrj73RODaiYurDQ1+rGU9IkmKS1Uuw45rhbkBQzPto2LdE37sBQTHpyZbP/tyPjZyYyX81/rumHxsxMYk9uzCtRlRMdXZguqXpxkZKTHN8xLs1LpMTE5/blSc17XWcjJjEHp/qD2LasZER00T2qsglMmKqMguglBATv0NJbo9RLg2liMy9MTrgdzS1uTemjsIqzn+L4Loqj4M6//UOAAAAAAAAAAAAAAAAAAAAAAAAAMBl/wCSoC7OdsS5KwAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

export default page;
