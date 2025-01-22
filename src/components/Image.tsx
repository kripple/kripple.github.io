import '@/components/image.css';

export function Image({
  imgClass,
  title,
  urls: [small, src],
}: {
  imgClass: string;
  title: string;
  urls: [small: string, src: string];
}) {
  return (
    <div className="image">
      <img className={imgClass} loading="lazy" src={small} title={title}></img>
      <img
        className={`${imgClass} lazy`}
        loading="lazy"
        src={src}
        style={{ display: 'none' }}
        title={title}
      ></img>
    </div>
  );
}
