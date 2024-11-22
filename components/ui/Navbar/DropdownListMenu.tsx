import { AlignLeft } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/links';
import SignOutLinks from './SignOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"


const DropdownListMenu = () => {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <AlignLeft />
                    <UserIcon />
                </Button>


            </DropdownMenuTrigger>
            <DropdownMenuContent>


                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode='modal'>
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SignUpButton mode='modal'>
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                <SignedIn>
                    {
                        links.map((item, index) => {
                            return <DropdownMenuItem key={index}>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </DropdownMenuItem>
                        })
                    }
                    <DropdownMenuSeparator />
                    <DropdownMenuItem tabIndex={0}
                        className="bg-red-500 text-white text-sm font-bold 
                    focus:bg-red-600 focus:scale-105 focus:shadow-lg focus:outline-none 
                    hover:bg-red-400 hover:scale-105 active:bg-red-600 active:scale-105 
                    transition-transform duration-200 ease-in-out">
                        <SignOutLinks />
                    </DropdownMenuItem>

                </SignedIn>


            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default DropdownListMenu