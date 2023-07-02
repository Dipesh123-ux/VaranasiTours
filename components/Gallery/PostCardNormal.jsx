import React from 'react'
import Image from 'next/image'

const PostCardNormal = ({ fixedHeight, fixedWidth, postInfo }) => {
    return (
        <div className='p-2'>
            <Image
                style={{ height: fixedHeight, width: fixedWidth}}
                className="object-cover rounded-md"
                alt={`${postInfo.id}`}
                src={postInfo.src}
                width={500}
                height={500}
            ></Image>
        </div>
    )
}

export default PostCardNormal