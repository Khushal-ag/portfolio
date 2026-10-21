import TrafficLights from "@/components/TrafficLights";

type ErrorCardProps = {
  file: string;
  comment: string;
  title: React.ReactNode;
  message: string;
  children: React.ReactNode;
};

/** Editor-style panel shared by the error, 404 and global-error screens. */
export default function ErrorCard({
  file,
  comment,
  title,
  message,
  children,
}: ErrorCardProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg px-4">
      <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg-panel shadow-xl shadow-black/10">
        <div className="flex items-center gap-2 border-b border-border bg-bg-elevated px-3 py-2">
          <TrafficLights />
          <span className="font-editor ml-2 text-xs text-text-dim">{file}</span>
        </div>
        <div className="border-l-2 border-accent/20 bg-bg-panel px-6 py-8 md:px-8 md:py-10">
          <p className="font-editor text-sm text-comment">{`// ${comment}`}</p>
          <p className="mt-2 text-2xl font-(--font-heading) tracking-tight text-text md:text-3xl">
            {title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {message}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
