"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerClassName,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <Link
            href="https://artistjodi.com"
            className={navigationMenuTriggerClassName()}
          >
            AJ Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={{ pathname: "/", hash: "collection" }}
            className={navigationMenuTriggerClassName()}
          >
            Collection
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
