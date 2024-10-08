import { Pannellum } from "pannellum-react";
const ThreeSixtyImage = ({image,height,compass}) => {
    return (
        <div className="App">
            <Pannellum
                width="100%"
                height={height}
                image={image}
                pitch={-50}
                yaw={180}
                hfov={110}
                autoLoad
                autoRotate={3}
                showZoomCtrl={false}
                keyboardZoom={false}
                mouseZoom={false}
                showFullscreenCtrl={false}
                compass={compass}
                onLoad={() => {
                    // console.log("panorama loaded");
                }}
            >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={31}
                    yaw={150}
                    // handleClick={(evt, name) => console.log(name)}
                    name="hs1"
                />
            </Pannellum>
        </div>
    );
};

export default ThreeSixtyImage;