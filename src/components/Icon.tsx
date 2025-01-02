export function Icon({
  id,
  drawPath,
  viewBox,
}: {
  id: string;
  drawPath: readonly string[];
  viewBox: string;
}) {
  return (
    <svg
      className="icon"
      fill="currentColor"
      id={id}
      role="button"
      stroke="none"
      strokeWidth="0.25px"
      viewBox={viewBox}
    >
      {drawPath.map((d, index) => (
        <path d={d} key={index} />
      ))}
    </svg>
  );
}
