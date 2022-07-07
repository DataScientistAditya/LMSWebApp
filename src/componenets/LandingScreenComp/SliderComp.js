import React from "react";



const SliderComp=()=>{
    return(
        <section>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
               
                <div class="carousel-inner">
                    <div class="item slider1 active" >
                        <img src={require("../../static/images/slider/3.jpg")} alt=""/>
                        <div class="carousel-caption slider-con">
                            <h2>VRK <span>IT Solution</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <a style={{textDecoration:"none"}} class="bann-btn-1">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderComp;