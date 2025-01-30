# React useEffect setInterval Bug

This repository demonstrates a common bug related to using `setInterval` within a React `useEffect` hook. The issue arises from an improper conditional check and handling of the interval cleanup.

## Bug Description

The provided code snippet intends to increment a counter every second, only when the count is greater than 0. However, due to an error in the conditional logic and improper cleanup, the interval continues indefinitely even when the count is 0, leading to an unexpected behavior and potential memory leaks.

## Solution

The solution involves correctly managing the interval within the `useEffect` hook, ensuring it's properly cleared when needed and the conditions are correctly checked.  We also demonstrate using `useRef` to manage the interval ID, avoiding the potential issue of `clearInterval` acting on stale values.