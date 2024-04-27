import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function Herosection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify- relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="orange"
            />
            <div className='p-4 mt-36 relative z-10 w-full text-center'>
                <h1 className='mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
                    Take Control of Your Finances
                </h1>
                <p className='mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                    Welcome to Tie Money, the ultimate solution for managing your income and expenses. Whether you're a student, professional, or small business owner, our easy-to-use platform helps you track every dollar and make informed financial decisions. Say goodbye to financial stress and start your journey toward financial freedom today.
                </p>
                <div className="mt-7">
                    <Link href={"/analytics"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Herosection
