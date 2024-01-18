import React from 'react'
import '../Gallery/Gallery.css'
import { Link } from 'react-router-dom';
import photos_bg from '../../assets/image/get/get7.jpeg';
import photos_1 from '../.../../../assets/image/gaushala/gaushala.JPG';
import photos_2 from '../.../../../assets/image/gajebo/g1.JPG';
import photos_3 from '../.../../../assets/image/food/food1.png';
import photos_4 from '../.../../../assets/image/generalroom/g3.JPG';
import photos_5 from '../.../../../assets/image/viproom/vip6.JPG';
import photos_6 from '../.../../../assets/image/marrigre/me9.png';
import photos_7 from '../.../../../assets/image/yagnakund/y5.JPG';
import photos_8 from '../.../../../assets/image/meerigesit/sit4.jpeg';
import photos_9 from '../.../../../assets/image/farmview/fv5.JPG';
import photos_10 from '../.../../../assets/image/office/off3.JPG';
import photos_11 from '../.../../../assets/image/onedaypicnic/farm1.jpeg';
import photos_13 from '../.../../../assets/image/onedaypicnic/villaa view.jpeg';
import photos_14 from '../.../../../assets/image/parking/park3.JPG';
import photos_15 from '../.../../../assets/image/swimmingpull/s5.jpeg';
import photos_12 from '../.../../../assets/image/temple/t3.JPG';
import photos_16 from '../.../../../assets/image/theater/theater1.jpeg';
import photos_17 from '../.../../../assets/image/villagelocation/v1.JPG';
import photos_18 from '../.../../../assets/image/villagelocation/v7.JPG';
import photos_19 from '../.../../../assets/image/villagelocation/v8.JPG';
import photos_20 from '../.../../../assets/image/villagelocation/v3.JPG';
import photos_21 from '../.../../../assets/image/villagelocation/v5.JPG';
import photos_22 from '../.../../../assets/image/yagnakund/y9.JPG';



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
    ];
    return (
        <div>
            {/* Coomon Slider */}
            <div className="common-slider">
                <div className="image-block">
                    <img src={photos_bg} alt="slider_image" />
                    <div className="common-slider-content">
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