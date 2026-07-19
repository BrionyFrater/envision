import { QueryClient } from "@tanstack/react-query";

export function getContext() {
  const queryClient = new QueryClient();

  return {
    queryClient,
  };
}
// biome-ignore lint/suspicious/noEmptyBlockStatements: <no implemented>
export default function TanstackQueryProvider() {}
