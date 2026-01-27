// import { createPost } from "@/app/actions/create-post";
// import { Button } from "../ui/button";

// export default function CreatePostForm() {
//   return (
//     <div className="bg-cyan-700 rounded-2xl p-8 max-w-lg my-8">
//       <h2 className="font-bold text-3xl text-white mb-6">Add your comments</h2>

//       <form action={createPost} className="flex flex-col gap-5">
//         {/* Поле Имени — добавил text-slate-900, чтобы буквы были темными */}
//         <input
//           type="text"
//           name="author"
//           placeholder="Your Name"
//           className="w-full px-5 py-3 rounded-xl bg-purple-50 text-slate-900 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-purple-300"
//         />

//         {/* Поле Заголовка */}
//         <input
//           type="text"
//           name="title"
//           placeholder="Summarize your experience"
//           className="w-full px-5 py-3 rounded-xl bg-purple-50 text-slate-900 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-purple-300 font-semibold"
//         />

//         {/* Основной текст */}
//         <textarea
//           name="text"
//           placeholder="Tell us about your experience..."
//           className="w-full px-5 py-3 rounded-xl bg-purple-50 text-slate-900 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-purple-300 resize-none"
//         />

//         {/* Блок рейтинга (исправил твои комментарии // на валидный JSX) */}
//         <div className="flex items-center gap-3 px-2">
//           <span className="text-sm font-medium text-cyan-100">Rating:</span>
//           <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
//         </div>

//         <Button
//           variant="outline"
//           type="submit"
//           className="bg-white text-cyan-700 hover:bg-cyan-50"
//         >
//           Publish
//         </Button>
//       </form>
//     </div>
//   );
// }

// Добавь это в начало компонента
// const [rating, setRating] = useState(0);
// const [isRecommended, setIsRecommended] = useState(false);

// // Функция для смены рейтинга, которая "умно" меняет рекомендацию
// const handleRating = (val) => {
//   setRating(val);
//   if (val >= 4) setIsRecommended(true);
//   if (val <= 2) setIsRecommended(false);
// };

// // ... в return формы:

// {/* Поле Текста */}
// <textarea
//   name="text"
//   placeholder="Tell us about your experience..."
 
//   className="w-full px-5 py-3 rounded-xl bg-purple-50 text-slate-900 border-none outline-none transition-all placeholder:text-purple-300 resize-none"
// />

// {/* Блок Рейтинга и Рекомендации */}
// <div className="flex flex-col gap-3 bg-white/10 p-4 rounded-2xl border border-white/20">
//   <div className="flex items-center justify-between">
//     <span className="text-sm font-medium text-white">Your Rating:</span>
//     <div className="flex gap-1">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <button
//           key={star}
//           type="button"
//           onClick={() => handleRating(star)}
//           className={`text-2xl transition-all ${star <= rating ? "text-yellow-400 scale-110" : "text-gray-300 opacity-50"}`}
//         >
//           ★
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Чекбокс Рекомендации */}
//   <label className="flex items-center gap-3 cursor-pointer group mt-2">
//     <div className="relative">
//       <input
//         type="checkbox"
//         name="recommended"
//         checked={isRecommended}
//         onChange={(e) => setIsRecommended(e.target.checked)}
//         className="peer sr-only"
//       />
//       <div className="w-5 h-5 border-2 border-white/50 rounded-md peer-checked:bg-pink-500 peer-checked:border-pink-500 transition-all flex items-center justify-center">
//         {isRecommended && <span className="text-[10px] text-white">✔</span>}
//       </div>
//     </div>
//     <span className="text-sm text-white font-medium select-none">
//       {isRecommended ? "I recommend this place!" : "Would you recommend this?"}
//     </span>
//   </label>
// </div>

{/* Скрытые инпуты для передачи данных в createPost */}
{/* <input type="hidden" name="rating" value={rating} />
<input type="hidden" name="recommended" value={isRecommended ? "yes" : "no"} /> */}


import { createPost } from "@/app/actions/create-post";
import { Button } from "../ui/button";

export default function CreatePostForm() {
  return (
    <div className="bg-indigo-300 rounded-2xl p-8 max-w-100 my-8">
      <h2 className="font-bold text-3xl">Add your comments</h2>
      {/* <form action={createPost} className="flex flex-col gap-4" text-slate-900 > */}
      <form action={createPost} className=" text-slate-900 flex flex-col gap-5">
        <input
          type="text"
          name="author"
          placeholder="Your Name"
          className="w-full px-5 py-3 rounded-xl bg-purple-50 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-purple-300"
        />
        <input
          type="text"
          name="title"
          placeholder="Summarize your experience"
          className="w-full px-5 py-3 rounded-xl bg-purple-50 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-purple-300 font-semibold"
        />

        <textarea
          name="text"
          placeholder="Tell us about your experience..."
          className="w-full px-5 py-3 rounded-xl bg-purple-50 border-none focus:ring-2 focus:ring-purple-400 outline-none transition-all placeholder:text-purple-300 resize-none"
        />

        {/* <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border rounded border-gray-800"
        /> */}

        {/* <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          id="text"
          className="border rounded border-gray-800"
        /> */}

        <div className="flex items-center gap-3 px-2">
          <span className="text-sm font-medium text-purple-400">Rating:</span>
          <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
        </div>

        <Button variant="outline" type="submit" className="bg-white text-cyan-700 hover:bg-cyan-50">
          Publish
        </Button>
      </form>
    </div>
  );
}
