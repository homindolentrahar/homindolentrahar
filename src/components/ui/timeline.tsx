import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "@/components/ui/badge";

type TimelineProps = {
  orientation?: "horizontal" | "vertical";
};

type TimelineContextProps = TimelineProps & {};

const TimelineContext = React.createContext<TimelineContextProps | null>(null);

function useTimeline() {
  const context = React.useContext(TimelineContext);

  if (!context) {
    throw new Error("useTimeline must be used within a <Timeline />");
  }

  return context;
}

const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & TimelineProps
>(({ className, orientation = "vertical", ...props }, ref) => (
  <TimelineContext.Provider value={{ orientation }}>
    <div
      ref={ref}
      className={cn(
        className,
        "flex",
        orientation === "vertical" ? "flex-col" : "flex-col lg:flex-row"
      )}
      {...props}
    />
  </TimelineContext.Provider>
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLDivElement,
  React.LiHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useTimeline();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col items-stretch",
        orientation === "horizontal" && "pb-8 lg:px-4",
        orientation === "vertical" && "pb-8",
        className
      )}
      {...props}
    />
  );
});
TimelineItem.displayName = "TimelineItem";

const TimelineHeader = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useTimeline();

  return (
    <div
      ref={ref}
      className={cn(
        // "mb-0 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-gray-200 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-primary-foreground/95 after:bg-foreground group-last:before:hidden sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem]",
        "flex flex-col gap-2 items-start md:items-center",
        orientation === "vertical" &&
          "before:absolute before:-left-6 before:top-2 before:size-3 before:rounded-full before:bg-gray-200 before:ring-2 before:ring-offset-2 before:ring-gray-200",
        orientation === "vertical" &&
          "after:absolute after:-left-5 after:top-2 after:h-full after:w-1 after:bg-gray-200 group-last:after:hidden",
        orientation === "horizontal" &&
          "before:absolute before:-left-6 lg:before:left-1/2 before:top-2 lg:before:-top-6 before:size-3 before:rounded-full before:bg-gray-200 before:ring-2 before:ring-offset-2 before:ring-gray-200",
        orientation === "horizontal" &&
          "after:absolute after:-left-5 lg:after:left-1/2 after:top-2 lg:after:-top-6 after:translate-y-1 after:h-full lg:after:h-1 after:w-1 lg:after:w-full after:bg-gray-200 group-last:after:hidden",
        className
      )}
      {...props}
    />
  );
});
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { orientation } = useTimeline();

  return (
    <div
      ref={ref}
      className={cn(
        "w-full font-bold text-xl text-gray-950 dark:text-white",
        orientation === "horizontal" && "text-start md:text-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TimelineTitle.displayName = "TimelineTitle";

// const TimelineTime = ({
//   className,
//   variant = "default",
//   ...props
// }: React.ComponentProps<typeof Badge>) => {
//   return (
//     <Badge
//       className={cn(
//         "left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0",
//         className
//       )}
//       variant={variant}
//       {...props}
//     >
//       {props.children}
//     </Badge>
//   );
// };
// TimelineTime.displayName = "TimelineTime";

const TimelineDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useTimeline();

  return (
    <div
      ref={ref}
      className={cn(
        "w-full text-sm font-normal text-gray-500 dark:text-gray-400",
        orientation === "horizontal" && "text-start md:text-center",
        className
      )}
      {...props}
    />
  );
});
TimelineDescription.displayName = "TimelineDescription";

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { orientation } = useTimeline();

  return (
    <div
      ref={ref}
      className={cn(
        "size-10 ml-2 lg:ml-0 content-center text-center rounded-md border-[1.5px] bg-gray-200/15 dark:bg-gray-800 border-gray-200 dark:border-transparent",
        orientation === "horizontal" && "lg:mt-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TimelineIcon.displayName = "TimelineIcon";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  // TimelineTime,
  TimelineTitle,
  TimelineDescription,
  TimelineIcon,
};
