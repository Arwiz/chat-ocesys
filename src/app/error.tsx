'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'flowbite-react';

type Props = {};

const error = (props: Props) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/error.png"
                height="300"
                width="300"
                alt="Error"
                className="dark:hidden"
            />
            <Image
                src="/error.png"
                height="300"
                width="300"
                alt="Error"
                className="hidden dark:block"
            />
            <h2 className="text-xl font-medium">Something went wrong!</h2>
            <Button>
                <Link href="/dashboard">Go back</Link>
            </Button>
        </div>
    );
};

export default error;
