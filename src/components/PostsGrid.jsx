export default function PostGrid({ children }) {
  return (
    <div className="w-full border-[3px] border-black grid grid-cols-3 gap-1">
      {children}
    </div>
  );
}
