import dynamic from "next/dynamic";

const Client = dynamic(
  () => import("@/components/Client"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const page = () => {
  return (
    <div>
      <Client />
    </div>
  );
};

export default page;
