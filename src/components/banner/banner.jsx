import React, { Component } from "react";
import './animations.css';

class Banner extends Component {

    render() {
        console.log("Banner Rendered");
        const timeOfDay = this.lightOfDay();
        const lightSource = this.timeOfDay === ("day" || "dusk") ? "sun" : "moon";
        console.log(lightSource);

        return (
            <div className="relCanvas" style={{backgroundColor: 'blue'}}>
                <div className={timeOfDay}>
                    {
                    /*TODO: import CSS file and adjust for banner 
                            correct format from .net to REACT
                            Set up appropriate routing for images
                            
                    */}
                    <div id={lightSource}></div>   
                </div>
                <div className="contentContainer">
                    <div id="logo">
                        {/*TODO: add in logo text and format it*/}
                    </div>
                </div>
                
                <div className="contentContainer">
                    <div className="island">
                        <img src="/public/img/banner/sunShrineZeal.png" id="sunShrine" alt="Sun Shrine"/>
                        <div id="blackBird">
                            {/*onClick()="planeLaunch()" */}
                        </div>
                        <img src="/public/img/banner/PalaceZeal.png" id="zealPalace" alt="Zeal Palace"/>
                        <img src="/public/img/NuuStructureZeal.png" id="nuuStruct" alt="Sealed Structure" />
                        <img src="/public/img/EnhasaZeal.png" id="enhasa" alt="Enhasa"/>
                    </div>    
                
                    <div id="clouds">

                    </div>
                </div>
            </div>
        );
    }

    lightOfDay() {
        const curTime = new Date();
        console.log(curTime);
        const curHour = curTime.getHours();
        console.log(curHour);

        if (curHour > 3 && curHour <= 6)
        {
            return "dawn";
        }
        else if (curHour > 6 && curHour <= 17)
        {
            return "day";
        }
        else if (curHour > 17 && curHour <= 19)
        {
            return "dusk";
        }
        else
        {
            return "night";
        } 
    }

    planeLaunch() {
        console.log("this happened");
    }
}

export default Banner;