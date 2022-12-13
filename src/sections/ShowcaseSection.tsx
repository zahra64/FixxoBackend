import React from 'react'
import {Link} from 'react-router-dom';


const ShowcaseSection: React.FC = ()=> {
    return (
        <section className="showcase container">
            <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" className="showcase-image-left" alt="showcase-img-1" />
            <div className="showcase-body">
                <h1>Sale Up</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <Link to="/products" className="btn-theme">
                    <span className="corner-left "></span>
                    SHOP NOW
                    <span className="corner-right"></span>
                </Link>
            </div>
            <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" className="showcase-image-right" alt="showcase-img-2" />
        </section>
    )
}

export default ShowcaseSection