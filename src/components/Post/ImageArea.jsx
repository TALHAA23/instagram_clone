export default function ImageArea({ src }) {
  return (
    <div className="h-full flex items-center">
      <img className="relative aspect-square object-contain" src={src} />
    </div>
  );
}
