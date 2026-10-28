/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

export type ClutchLogoProps = React.ComponentPropsWithoutRef<"svg">;

/** Eggsplain symbol: the protective 【 】 shell brackets. */
export function ClutchLogo({ width = "52", height = "52", className, color = "currentColor" }: ClutchLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 283.46 283.46"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M36.16,159.43C33.38,104.31,60.11,25.63,112.1,1.66V0H17C7.61,0,0,7.61,0,17v249.47c0,9.39,7.61,17,17,17h95.1v-1.22c-43.67-15.54-73.11-66.59-75.94-122.81Z" />
      <path d="M266.47,0h-95.1v1.59c51.98,23.81,78.71,102.72,75.94,157.84-2.83,56.23-32.27,107.27-75.94,122.81v1.22h95.1c9.39,0,17-7.61,17-17V17c0-9.39-7.61-17-17-17Z" />
    </svg>
  );
}

/** @deprecated Use ClutchLogo. Kept so upstream merges that reference PlaneLogo keep compiling. */
export const PlaneLogo = ClutchLogo;
