import type { SVGProps } from "react";

export function MobilinLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      {...props}
    >
      <text
        x="10"
        y="35"
        className="font-headline"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--primary))"
      >
        Mobilin
      </text>
      <text
        x="125"
        y="35"
        className="font-headline"
        fontSize="30"
        fontWeight="bold"
        fill="hsl(var(--accent))"
      >
        .
      </text>
    </svg>
  );
}
