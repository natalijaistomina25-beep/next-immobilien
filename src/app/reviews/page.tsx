// import CreatePostForm from "@/components/create-post-form";
import CreatePostReviewForm from "@/components/create-post-review-form";
// import Forum from "@/components/ui/forum";
import ReviewForum from "@/components/ui/review-forum";

export default function Reviews() {
  return (
    <section>
      <ReviewForum/>

      <CreatePostReviewForm />
    </section>
  );
}