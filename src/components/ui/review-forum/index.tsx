import DeletePostButton from "@/app/components/delete-post-btn";
import { db } from "@/db";
import { postsTable } from "@/db/schema";

export default async function ReviewForum() {
  const posts = await db.select().from(postsTable);

  return (
    <div>
      <h2 className="text-4xl font-bold py-8">Client Reviews</h2>
      <ul className="flex flex-col gap-6 p-2">
        {posts.map((review) => (
          <li key={review.id} className="p-4 bg-purple-600 rounded-2xl">
            <h3 className="font-bold">{review.title}</h3>
            <p>{review.text}</p>
            <DeletePostButton id={review.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// import { db } from "@/db";
// import { reviewsTable } from "@/db/schema";

// export default async function ReviewsPage() {
//   const reviews = await db.select().from(reviewsTable);
//   return (
//     <div>
//       <h2>Review</h2>
//       <ul>
//         {reviews.map((r) => (
//           <li key={r.id}>
//             <h3>{r.title}</h3>
//             <span>{r.content}</span>
//             <span>
//               {r.createdAt.getDate() +
//                 " " +
//                 r.createdAt.getHours() +
//                 " " +
//                 r.createdAt.getMinutes()}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }