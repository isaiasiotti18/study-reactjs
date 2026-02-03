import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const { data, isFetching, refetch, error } = query;

  // isLoading can also be used to show a loading state when the query is being fetched for the first time

  // isFetching is true whenever the query is being fetched, including background refetches

  // isPending can be used to show a loading state when the query is being fetched
  //   -> for the first time or when it's being refetched in the background

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <>
      <div>
        {isFetching ? (
          <span className="loader"></span>
        ) : (
          JSON.stringify(data?.slice(0, 10))
        )}
      </div>

      <button onClick={() => refetch()}>Refetch</button>
    </>
  );
}

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

export default App;
