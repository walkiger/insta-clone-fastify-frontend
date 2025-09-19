import { z } from "zod";

// First, we declare a zod schema
const postSchema = z.object({
  id: z.number(),
  img_url: z.string().url().or(z.string().startsWith("/")),
  caption: z.string().nullable(),
  created_at: z.string().optional(),
});

const postsSchema = z.array(postSchema);

// Then, we infer the TypeScript type from the Zod schema.
type Post = z.infer<typeof postSchema>;

// Schema for creating a new post (for frontend validation)
const createPostInputSchema = z
  .object({
    caption: z.string().min(1, "Caption is required.").max(255).optional(),
    image: z.instanceof(File).optional(),
  })
  .refine((data) => data.caption || data.image, {
    message: "Either an image or a caption is required.",
    path: ["image"],
  });

type CreatePostInput = z.infer<typeof createPostInputSchema>;

export { postSchema, postsSchema, createPostInputSchema };
export type { Post, CreatePostInput };