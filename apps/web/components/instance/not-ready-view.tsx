/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { GOD_MODE_URL } from "@plane/constants";
// assets
import GradientBgLogo from "@/app/assets/auth/gradient-bg-logo.webp?url";
import DefaultLayout from "@/layouts/default-layout";
import { PlaneLockup } from "@plane/blocks/icons";
import { Button } from "@makeplane/propel/components/button";

export function InstanceNotReady() {
  return (
    <DefaultLayout>
      <div className="relative z-10 flex h-screen w-screen overflow-hidden">
        {/* Background decorations */}
        <img
          src={GradientBgLogo}
          className="pointer-events-none absolute -top-24 -left-32 h-56 w-96 opacity-15"
          alt=""
          aria-hidden="true"
        />
        <img
          src={GradientBgLogo}
          className="pointer-events-none absolute -right-20 -bottom-16 h-56 w-96 opacity-15"
          alt=""
          aria-hidden="true"
        />
        {/* Main content */}
        <div className="flex h-full w-full flex-col items-center px-8 pt-6 pb-10">
          <div className="sticky top-0 flex w-full shrink-0 items-center justify-between gap-6">
            <PlaneLockup height={20} width={95} className="text-primary" />
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-7">
            <div className="flex flex-col items-center gap-11">
              <svg
                viewBox="0 0 283.46 283.46"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-accent-primary"
                aria-label="Clutch"
              >
                <path d="M36.16,159.43C33.38,104.31,60.11,25.63,112.1,1.66V0H17C7.61,0,0,7.61,0,17v249.47c0,9.39,7.61,17,17,17h95.1v-1.22c-43.67-15.54-73.11-66.59-75.94-122.81Z" />
                <path d="M266.47,0h-95.1v1.59c51.98,23.81,78.71,102.72,75.94,157.84-2.83,56.23-32.27,107.27-75.94,122.81v1.22h95.1c9.39,0,17-7.61,17-17V17c0-9.39-7.61-17-17-17Z" />
              </svg>
              <div className="flex max-w-124 flex-col items-center gap-3">
                <h1 className="text-h2-semibold text-primary">Welcome to Clutch</h1>
                <p className="text-center text-body-md-regular text-secondary">
                  Set up your instance and create your first workspace to begin managing projects and work.
                </p>
              </div>
            </div>
            <div className="w-72">
              <Button
                variant="primary"
                size="lg"
                stretch="full"
                nativeButton={false}
                render={<a href={GOD_MODE_URL}>Get started</a>}
                label="Get started"
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
