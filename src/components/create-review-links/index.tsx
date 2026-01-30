// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// // import { useRouter } from "next/router";

// export default function CreateReviewLink() {
//   const router = useRouter();
//   function handleNavigate() {
//     router.push("/reviews/new");
//     // router.replace("/reviews/new");
//     // console.log(router.pathname);
//   }
//   return (
//     <div>
//       {/*  */}
//       <button type="button" onClick={handleNavigate}>
//         Navigate to reviews
//       </button>
//       {/* declarative approach */}
//       <Link href={"/reviews/new"}>Add review</Link>
//     </div>
//   );
// }
// categories >> reviewes >>> reviews/news

    // вернет нас на предыдущую страницу
    // router.back();
    //
    // router.forward();
    
    // если нужно заранее загрузить ресурс
    // router.prefetch("/reviews");
    // categories >> reviews/news - replace
    // - когда изменить историю - не хотим возвращаться на страницу откуда делаем переход
    // router.replace("/reviews/new");