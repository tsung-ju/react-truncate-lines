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
  const rootSpanRef = useRef<HTMLSpanElement>(null);
  const ellipsisSpanRef = useRef<HTMLSpanElement>(null);
  const text = onlyText(children);

  useEffect(() => {
    const rootSpan = rootSpanRef.current!;
    const ellipsisSpan = ellipsisSpanRef.current!;
    const textNode = rootSpan.firstChild!;

    ellipsisSpan.style.display = "none";
    textNode.nodeValue = text;
    if (rootSpan.getClientRects().length <= lines) return;

    ellipsisSpan.style.display = "inline-block";
    const newLength = lastIndexWhere(0, text.length, (length) => {
      textNode.nodeValue = text.slice(0, length);
      return length === 0 || rootSpan.getClientRects().length <= lines;
    });
    textNode.nodeValue = text.slice(0, newLength);
  }, [lines, ellipsis, text]);

  return (
    <span ref={rootSpanRef} {...rest}>
      {text}
      <span ref={ellipsisSpanRef} style={{ display: "none" }}>
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
