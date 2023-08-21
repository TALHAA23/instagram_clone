export default function StatusBar() {
  return (
    <div className="flex gap-2">
      <Status />
      <Status />
      <Status />
    </div>
  );
}

export function Status() {
  return (
    <div className=" w-16 aspect-square rounded-full border border-black dark:border-white"></div>
  );
}
