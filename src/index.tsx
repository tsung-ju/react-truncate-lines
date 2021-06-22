import React, { useEffect, useRef } from "react";
import { onlyText } from "react-children-utilities";

export interface TruncateLinesProps extends React.HTMLAttributes<HTMLSpanElement> {
  lines: number;
  ellipsis: React.ReactNode;
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
      return length == 0 || span.getClientRects().length <= lines;
    });
    textNode.nodeValue = text.slice(0, newLength);
  });
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
  // invariant: f(start) == true && f(end + 1) == false
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (predicate(mid)) {
      start = mid;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
