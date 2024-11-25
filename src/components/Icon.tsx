export function Icon({
  id,
  drawPath,
  viewBox,
}: {
  id: string;
  drawPath: string;
  viewBox: string;
}) {
  return (
    <svg
      className="icon"
      fill="currentColor"
      id={id}
      role="button"
      stroke="none"
      strokeWidth="0.5px"
      viewBox={viewBox}
    >
      <path d={drawPath}></path>
    </svg>
  );
}
