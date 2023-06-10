"use client"
import Image from 'next/image'
import Link from 'next/link';

const GlassmorphicImage = ({heading,path,src}) => {
    return (
        <Link href={`/gallery/${path}`} class="relative m-4 shadow-lg border-8 shadow-gray-500 border-white rounded-xl overflow-hidden">
            <Image src={src} alt="Your Image" class="w-full h-auto  " />
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <h1 class="text-white text-2xl md:text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {heading}
            </h1>
        </Link>
    );
};

export default GlassmorphicImage;
