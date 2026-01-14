export function VisualBreak({ src }: { src: string }) {
  return (
    <div
      className="h-[60vh] w-full bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
