"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
        <Link href={"/"}><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
        <Link href={"/analytics"}><MenuItem setActive={setActive} active={active} item="Analytics"></MenuItem></Link>
        <Link href={"/user"}><MenuItem setActive={setActive} active={active} item="User"></MenuItem></Link>
        <Link href={"/contact"}><MenuItem setActive={setActive} active={active} item="Contact"></MenuItem></Link>
      </Menu>
    </div>
    )
}
export default Navbar