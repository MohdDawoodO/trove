"use client";

export function randomNumber(min: number, max: number) {
  const minValue = Math.ceil(min);
  const maxValue = Math.ceil(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
