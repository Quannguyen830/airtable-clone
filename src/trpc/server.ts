import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers";
import { cache } from "react"

import { createCaller, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import { createQueryClient } from "./query-client";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  try {
    const heads = new Headers(await headers());
    heads.set("x-trpc-source", "rsc");

    return createTRPCContext({
      headers: heads,
    });
  } catch (error) {
    // Handle the error appropriately
    console.error("Failed to create TRPC context:", error);
    throw new Error("Failed to create TRPC context");
  }
});

const getQueryClient = cache(() => {
  try {
    return createQueryClient();
  } catch (error) {
    console.error("Failed to create query client:", error);
    throw new Error("Failed to create query client");
  }
});

const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);
