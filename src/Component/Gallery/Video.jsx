import React from 'react'
import '../Gallery/Gallery.css'
import { Link } from 'react-router-dom';
import video_bg from '../../assets/image/villagelocation/v1.JPG'

function Video() {
    return (
        <div>
            {/* Coomon Slider */}
            <div className="common-slider">
                <div className="image-block">

                    <img src={video_bg} alt="slider_image" />
                    <div className="common-slider-content">
                        <div className="title">Video</div>
                        <div className="link"><Link to="/">Home</Link> - Video</div>
                    </div>
                </div>
            </div>
            {/* VIDEO START */}
            <div className="video-outer">
                <div className="container">
                    <div className="video-inner">
                        <div className="video content">
                            <div className="item">
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/1EyU_OPyHzQ?si=VnPYyhVv3JneVa0o" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                <div className="title">
                                    Kamdhenu Gaujatan
                                </div>
                            </div>
                            <div className="item">
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/OS6UhyjbufI?si=_yjYxh-Ch1iFT0I8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                <div className="title">
                                    Morning View
                                </div>
                            </div>
                            <div className="item">
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/h7hnNM_pKKc?si=MZKWuojfzfC9slDI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                <div className="title">
                                    Gaushala
                                </div>
                            </div>
                            <div className="item">
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/CRG4vxTn-2Y?si=WmZr2hlAol1nT53G" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                <div className="title">
                                    Marriage view
                                </div>
                            </div>
                            <div className="item">
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/xxxK_aOCXJA?si=o4Z9_28HibUrGAf4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                <div className="title">
                                    Night View
                                </div>
                            </div>
                            <div className="item">
                                <iframe width={560} height={315} src="https://www.youtube.com/embed/b6SWKXCCr2c?si=80Ry6Mno4fqI3TYV" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                                <div className="title">
                                    Ganesh Utsav
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* VIDEO END */}
        </div>
    )
}

export default Video;