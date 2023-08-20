import { cn } from "@/lib/utils";

interface BlendBackgroundProps {
  className: string;
}

export const BlendBackground = ({ className }: BlendBackgroundProps) => (
  <div className="w-full overflow-visible left-0 right-0 -z-10 absolute max-w-full">
    <div
      className={cn(
        "bg-blend-shadow  bg-center aspect-square  bg-cover scale-150 sm:scale-125 md:scale-0",
        className,
      )}
    />
  </div>
);
