import React from 'react'
import '../Gallery/Gallery.css'
import { Link } from 'react-router-dom';
import photos_bg from '../../assets/image/about_1.png'
import photos_1 from '../../assets/image/Childreplay/20231224154102_IMG_2090.JPG'
import photos_2 from '../../assets/image/entryview/20231224153947_IMG_2088.JPG'
import photos_3 from '../../assets/image/farmview/20231224163803_IMG_2209.JPG'
import photos_4 from '../../assets/image/food/food1.jpeg'
import photos_5 from '../../assets/image/gajebo/20231224163844_IMG_2212.JPG'
import photos_6 from '../../assets/image/gaushala/20231224162022_IMG_2159.JPG'
import photos_7 from '../../assets/image/generalroom/20231224162704_IMG_2177.JPG'
import photos_8 from '../../assets/image/get/entrygate.jpeg'
import photos_9 from '../../assets/image/meerigefunction/merrige view.jpeg'
import photos_10 from '../../assets/image/office/20231224161630_IMG_2149.JPG'
import photos_11 from '../../assets/image/parking/20231224162154_IMG_2165.JPG'
import photos_12 from '../../assets/image/temple/20231224153153_IMG_2071.JPG'
import photos_13 from '../../assets/image/villagelocation/20231224165140_IMG_2231.JPG'
import photos_14 from '../../assets/image/theater/theater view.jpeg'
import photos_15 from '../../assets/image//villagelocation/20231224161220_IMG_2145.JPG'
import photos_16 from '../../assets/image/villagelocation/20231224160049_IMG_2128.JPG'
import photos_17 from '../../assets/image/viproom/20231224162847_IMG_2181.JPG'
import photos_18 from '../../assets/image/water/20231224153456_IMG_2078.JPG'
import photos_19 from '../../assets/image/waterfall/20231224153250_IMG_2074.JPG'
import photos_20 from '../../assets/image/wedding/merrige view.jpeg'
import photos_21 from '../../assets/image/well/20231224162205_IMG_2166.JPG'
import photos_22 from '../../assets/image/yagnakund/20231224162054_IMG_2162.JPG'
import photos_23 from '../../assets/image/villagelocation/20231224160807_IMG_2139.JPG'
import photos_24 from '../../assets/image/meerigefunction/weddig1.jpeg'



function Photos() {
    const galleryImages = [
        { image: photos_1 },
        { image: photos_2 },
        { image: photos_3 },
        { image: photos_4 },
        { image: photos_5 },
        { image: photos_6 },
        { image: photos_7 },
        { image: photos_8 },
        { image: photos_9 },
        { image: photos_10 },
        { image: photos_11 },
        { image: photos_12 },
        { image: photos_13 },
        { image: photos_14 },
        { image: photos_15 },
        { image: photos_16 },
        { image: photos_17 },
        { image: photos_18 },
        { image: photos_19 },
        { image: photos_20 },
        { image: photos_21 },
        { image: photos_22 },
        { image: photos_23 },
        { image: photos_24 },
    ];
    return (
        <div>
            {/* Coomon Slider */}
            <div class="common-slider">
                <div class="image-block">
                    <img src={photos_bg} alt="slider_image" />
                    <div class="common-slider-content">
                        <div className="title">Photos</div>
                        <div className="link"><Link to="/">Home</Link> - Photos</div>
                    </div>
                </div>
            </div>
            {/* Gallery Start */}
            <div className="Gallery-outer">
                <div className="container">
                    <div className="gallery-inner">
                        <div className="row item justify-content-center">
                            {galleryImages.map((item, index) => (
                                <div key={index} className="gallery-item colxl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="item-inner">
                                        <img src={item.image} alt="gallery-item" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Gallery End */}

        </div>
    )
}

export default Photos