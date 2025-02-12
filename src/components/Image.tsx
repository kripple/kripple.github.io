import '@/components/image.css';

export function Image(props: { alt: string; src: string }) {
  return (
    <div className="image-container">
      <img className="image" {...props}></img>
    </div>
  );
}
