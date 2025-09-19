import { type ActionFunctionArgs, redirect } from "react-router";
import { CreatePostForm } from "~/components/CreatePostForm";
import { api } from "~/services/api";
import { createPostInputSchema } from "~/schemas/post.schema";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const caption = formData.get("caption")?.toString();
  const imageFile = formData.get("image") as File | null;

  const validationResult = createPostInputSchema.safeParse({
    caption,
    image: imageFile ?? undefined,
  });

  if (!validationResult.success) {
    console.error("Client-side validation failed:", validationResult.error.issues);
    return redirect("/create");
  }

  const payload = new FormData();
  if (validationResult.data.caption) payload.append("caption", validationResult.data.caption);
  if (validationResult.data.image) payload.append("file", validationResult.data.image);

  try {
    await api.post("/posts", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return redirect("/profile/posts/grid");
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post." };
  }
}

export default function CreatePostPage() {
  return (
    <div className="py-8">
      <CreatePostForm />
    </div>
  );
}


