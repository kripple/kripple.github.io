import '@/components/frame.css';

export function Frame({ href }: { href: string }) {
  return (
    <div className="iframe-container">
      <iframe src={href}></iframe>
    </div>
  );
}
