"use client";

import { useEffect, useState } from "react";

const FIRST_WORD = "Software ";
const SECOND_WORD = "Developer";
const TOTAL_LENGTH = FIRST_WORD.length + SECOND_WORD.length;
const TYPING_SPEED_MS = 110;
const DELETING_SPEED_MS = 60;
const HOLD_TYPED_MS = 2500;
const HOLD_DELETED_MS = 500;

const GRADIENT_CLASSES =
  "bg-linear-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent";

function getDelay(
  isFullyTyped: boolean,
  isFullyDeleted: boolean,
  isDeleting: boolean,
) {
  if (isFullyTyped) return HOLD_TYPED_MS;
  if (isFullyDeleted) return HOLD_DELETED_MS;
  return isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS;
}

export function TypewriterTitle() {
  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const isFullyTyped = !isDeleting && count === TOTAL_LENGTH;
    const isFullyDeleted = isDeleting && count === 0;

    const timeoutId = setTimeout(
      () => {
        if (isFullyTyped || isFullyDeleted) {
          setIsDeleting(!isDeleting);
          return;
        }
        setCount((current) => current + (isDeleting ? -1 : 1));
      },
      getDelay(isFullyTyped, isFullyDeleted, isDeleting),
    );

    return () => clearTimeout(timeoutId);
  }, [count, isDeleting]);

  const typedFirst = FIRST_WORD.slice(0, count);
  const typedSecond = SECOND_WORD.slice(
    0,
    Math.max(0, count - FIRST_WORD.length),
  );

  return (
    <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
      <span className="sr-only">
        {FIRST_WORD}
        {SECOND_WORD}
      </span>
      <span aria-hidden="true" className="grid">
        <span className="invisible col-start-1 row-start-1 motion-reduce:visible">
          {FIRST_WORD}
          <span className={GRADIENT_CLASSES}>{SECOND_WORD}</span>
        </span>
        <span className="col-start-1 row-start-1 motion-reduce:hidden">
          {typedFirst}
          <span className={GRADIENT_CLASSES}>{typedSecond}</span>
          <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-caret-blink bg-violet-400" />
        </span>
      </span>
    </h1>
  );
}
