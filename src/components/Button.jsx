export default function Button({ text }) {
  return (
    <button
      className="mx-1 px-1 sm:px-3 py-1 rounded  text-white font-semibold
    bg-[#00000087] dark:bg-[#80808063] hover:opacity-80"
    >
      {text}
    </button>
  );
}
