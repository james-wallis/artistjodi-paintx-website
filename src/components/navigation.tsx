"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerClassName,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <Link href="https://artistjodi.com" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerClassName()}>
              AJ Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerClassName()}>
              Collection
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
