import React, { Children, useEffect, useRef } from "react";

export interface TruncateLinesProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  lines?: number;
  ellipsis?: React.ReactNode;
}

export function TruncateLines({
  lines = 1,
  ellipsis = "…",
  children,
  ...rest
}: TruncateLinesProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const ellipsisRef = useRef<HTMLSpanElement>(null);
  const text = onlyText(children);
  useEffect(() => {
    const span = spanRef.current!;
    if (span.getClientRects().length <= lines) return;
    ellipsisRef.current!.style.display = "inline-block";
    const textNode = span.firstChild!;
    const newLength = lastIndexWhere(0, text.length, (length) => {
      textNode.nodeValue = text.slice(0, length);
      return length === 0 || span.getClientRects().length <= lines;
    });
    textNode.nodeValue = text.slice(0, newLength);
  }, [lines, ellipsis, text]);
  return (
    <span ref={spanRef} {...rest}>
      {text}
      <span ref={ellipsisRef} style={{ display: "none" }}>
        {ellipsis}
      </span>
    </span>
  );
}

function lastIndexWhere(
  start: number,
  end: number,
  predicate: (index: number) => boolean
): number {
  // invariant: predicate(start) === true && predicate(end + 1) === false
  while (start < end) {
    const mid = start + ((end - start) >> 1);
    // start <= mid < end
    if (predicate(mid + 1)) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

function onlyText(children: React.ReactNode): string {
  let result = "";
  Children.forEach(children, (child) => {
    if (typeof child === "number" || typeof child === "string") {
      result += child.toString();
    } else {
      throw new TypeError("Unexpected child type");
    }
  });
  return result;
}
