"use client";

import NumberFlow, { type Format } from "@number-flow/react";
import { useEffect, useState } from "react";

export type AnimatedNumberFormat = Format;

export type AnimatedNumberProps = {
  readonly format?: AnimatedNumberFormat | undefined;
  readonly prefix?: string | undefined;
  readonly suffix?: string | undefined;
  readonly value: number;
};

export function AnimatedNumber({ format, prefix, suffix, value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setDisplayValue(value));

    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <NumberFlow
      className="metric-number"
      locales="en-US"
      trend={1}
      value={displayValue}
      {...(format ? { format } : {})}
      {...(prefix ? { prefix } : {})}
      {...(suffix ? { suffix } : {})}
    />
  );
}
