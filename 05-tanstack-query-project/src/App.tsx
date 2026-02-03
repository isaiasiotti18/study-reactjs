import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import "./App.css";
import { createTodoQueryOptions } from "./queryOptions/createTodoQueryOptions";
import { Suspense } from "react";

function App() {
  const { data: useSuspenseQueryResult } = useSuspenseQuery(
    createTodoQueryOptions(),
  );
  const { data: useQueryResult } = useQuery(createTodoQueryOptions());

  // isLoading can also be used to show a loading state when the query is being fetched for the first time

  // isFetching is true whenever the query is being fetched, including background refetches

  // isPending can be used to show a loading state when the query is being fetched
  //   -> for the first time or when it's being refetched in the background

  return (
    <>
      <Suspense fallback={<div>Loading todos with useSuspenseQuery...</div>}>
        <div>{JSON.stringify(useSuspenseQueryResult?.slice(0, 5))}</div>
      </Suspense>
      <br />
      {/* <div>{JSON.stringify(useQueryResult?.slice(0, 5))}</div> */}

      {/* <button onClick={() => setId((prev) => prev + 1)}>Increment ID</button> */}
    </>
  );
}

export default App;
