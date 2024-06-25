import React from 'react'
import "./Gallery.css"
const Gallery = () => {
    let Gallery=[
        "/img1.webp",
        "/img2.jpg",
        "/img3.jpg",
        "/img4.jpg",
        "/img5.jpg",
        "/img7.jpg",
        "/img8.jpg",
        // "/img9.jpg",
        "/img6.jpg",

    ]
  return (
    <>
    <div className="galler">
        <h1>BETTER BEATS BEST</h1>
        <div className="images">
            <div>
                {
                    Gallery.slice(0,3).map((elm,index)=>{
                        return <img src={elm} alt="Gallery img" />
                    })
                }
            </div>
            <div>
                {
                    Gallery.slice(3,6).map((elm,index)=>{
                        return <img src={elm} alt="Gallery img"   />
                    })
                }
            </div>
            <div>
                {
                    Gallery.slice(6,8).map((elm,index)=>{
                        return <img src={elm} alt="Gallery img" />
                    })
                }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Gallery