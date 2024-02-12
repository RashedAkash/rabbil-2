"use client"

import { fetcher } from "@/components/fetcher";
import useSWR from "swr";

const page = () => {
    const { data, error, isLoading } = useSWR(
      "https://jsonplaceholder.typicode.com/users",
      fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    // render data
    return <div>hello {data.length}!</div>;
};

export default page;