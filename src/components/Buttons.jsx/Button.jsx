export default function Button({ text, onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      className="mx-1 px-1 sm:px-3 py-1 rounded text-sm  text-white font-semibold
    bg-[#00000087] dark:bg-[#80808063] hover:opacity-80"
    >
      {text}
    </button>
  );
}
export function BorderlessButton({ text }) {
  return (
    <button className="text-sm text-blue-600 font-light hover:text-black dark:hover:text-white">
      {text}
    </button>
  );
}
