"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

export default function NavBar({  }) {

    const handleReturnHome = () => {
        window.location.href = "/";
    }

    return(
        <div className="flex flex-row">
            <Image src="/caisey_logo.png" alt="Caisey Logo" width={200} height={50} onClick={handleReturnHome}/>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Assignments</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className="min-w-48" asChild>
                                <Link href="/assignments/brooklyn_brewery">Brooklyn Brewery</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="min-w-48" asChild>
                                <Link href="/assignments/netflix_strategy">Netflix Strategy</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Students</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className="min-w-48" asChild>
                                <Link href="/students/aj2173">Alex Johnson</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="min-w-48" asChild>
                                <Link href="/students/mm3321">Maria Martinez</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="min-w-48" asChild>
                                <Link href="/students/sp4050">Sungjoon Park</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="min-w-48" asChild>
                                <Link href="/students/kh8742">Kevin Huang</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
