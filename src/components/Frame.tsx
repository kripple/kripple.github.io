import '@/components/frame.css';

export function Frame({ href, title }: { href: string; title: string }) {
  return (
    <div className="frame">
      <div className="iframe-container">
        <iframe src={href} title={title}></iframe>
      </div>
    </div>
  );
}
