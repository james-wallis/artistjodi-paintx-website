import { cn } from "@/lib/utils";

interface BlendBackgroundProps {
  className: string;
}

export const BlendBackground = ({ className }: BlendBackgroundProps) => (
  <div
    className={cn(
      "bg-blend-shadow left-0 right-0 -z-10 bg-center aspect-square absolute bg-cover",
      className,
    )}
  />
);
