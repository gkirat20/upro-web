"use client";

import { useExternalData } from "@/hooks/useQueries";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";

export function QueryExample() {
  const { data, isLoading, isError, error } = useExternalData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>TanStack Query Example</CardTitle>
        <CardDescription>
          This client component uses TanStack Query on a public page
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        ) : isError ? (
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span>Error: {error?.message || "Failed to fetch data"}</span>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-3">
              Latest posts from external API:
            </p>
            {data?.slice(0, 2).map(post => (
              <div key={post.id} className="border-l-2 border-blue-500 pl-3">
                <h4 className="font-medium text-sm">{post.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {post.body.substring(0, 80)}...
                </p>
              </div>
            ))}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-xs">
                💡 This data is cached and shared across all components using
                TanStack Query
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
