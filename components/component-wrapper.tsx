"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import React from "react";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const ComponentWrapper = ({
  children,
  name,
}: ComponentWrapperProps) => {
  const [key, setKey] = React.useState(0);
  const [isRotating, setIsRotating] = React.useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setKey((prev) => prev + 1);
    setTimeout(() => setIsRotating(false), 800);
  };

  return (
    <div key={key} className="relative rounded-md ">
      <div className="flex items-center justify-end gap-2 p-4 absolute right-0">
        <Button
          onClick={handleClick}
          className="flex items-center rounded-lg px-3 py-1"
          variant="ghost"
          title="Restart Component"
          aria-label="Restart Component"
        >
          <RotateCcw 
            aria-label="restart-btn" 
            size={16} 
            className={cn(
              isRotating && "animate-[spin_0.4s_linear_reverse_infinite]"
            )}
          />
        </Button>
      </div>

      <div className="flex min-h-[350px] w-full items-center justify-center p-10 ">
        {children}
      </div>
    </div>
  );
};
