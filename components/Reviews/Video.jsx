import React from 'react'

function Video() {
    return (
        <div className=' ' style={{ height: '600px' }}>
            <div className="bX9O_S bgVideo yK6aSC h-full ">
                <video
                    id="comp-lg4ra1py_video"
                    className="K8MSra"
                    role="presentation"
                    crossOrigin="anonymous"
                    playsInline
                    preload="auto"
                    loop
                    tabIndex="-1"
                    autoPlay
                    src="https://video.wixstatic.com/video/7dae14_8600e275e4b44bcf80670393cd0634b7/720p/mp4/file.mp4"  
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        opacity: 1
                    }}
                />
                {/* <wow-image
                    id="comp-lg4ra1py_img"
                    className="HlRz5e Z_wCwr Jxk_UL bgVideoposter yK6aSC"
                    data-image-info={{
                        containerId: 'comp-lg4ra1py',
                        alignType: 'center',
                        displayMode: 'fill',
                        targetWidth: 980,
                        targetHeight: 626,
                        isLQIP: true,
                        imageData: {
                            width: 3840,
                            height: 2160,
                            uri: '7dae14_8600e275e4b44bcf80670393cd0634b7f000.jpg',
                            name: '',
                            displayMode: 'fill',
                            quality: {
                                unsharpMask: {
                                    radius: 0.33,
                                    amount: 1,
                                    threshold: 0
                                }
                            },
                            devicePixelRatio: 1
                        }
                    }}
                    data-bg-effect-name=""
                    data-has-ssr-src=""
                    data-src="https://static.wixstatic.com/media/7dae14_8600e275e4b44bcf80670393cd0634b7f000.jpg/v1/fill/w_980,h_626,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/7dae14_8600e275e4b44bcf80670393cd0634b7f000.jpg"
                    style={{ opacity: 0 }}
                >
                    <img
                        src="https://static.wixstatic.com/media/7dae14_8600e275e4b44bcf80670393cd0634b7f000.jpg/v1/fill/w_980,h_626,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/7dae14_8600e275e4b44bcf80670393cd0634b7f000.jpg"
                        alt=""
                        style={{
                            width: '980px',
                            height: '626px',
                            objectFit: 'cover',
                            objectPosition: '50% 50%'
                        }}
                        fetchpriority="high"
                    />
                </wow-image> */}
            </div>
        </div>
    )
}

export default Video