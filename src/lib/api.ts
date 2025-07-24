import { supabase } from "./supabase";
import type { Post, UserProfile, CreatePostRequest } from "@/types/api";

// Example API functions that can be used with TanStack Query

export const api = {
  // User profile functions
  async getUserProfile(userId: string): Promise<UserProfile> {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) throw error;
    return data;
  },

  async updateUserProfile(
    userId: string,
    updates: Partial<UserProfile>
  ): Promise<UserProfile> {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Example posts/content functions
  async getPosts(): Promise<Post[]> {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async createPost(post: CreatePostRequest): Promise<Post> {
    const { data, error } = await supabase
      .from("posts")
      .insert(post)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePost(postId: string) {
    const { error } = await supabase.from("posts").delete().eq("id", postId);

    if (error) throw error;
    return { success: true };
  },

  // Example external API call
  async getExternalData(): Promise<Post[]> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    if (!response.ok) throw new Error("Failed to fetch external data");
    return response.json();
  },
};
