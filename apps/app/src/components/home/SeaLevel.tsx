
import { useEffect, useState } from "react"


const SeaLevel = () => {
    const [text, setText] = useState(0);
    const height = document.body.scrollHeight;
    
    const updateText = () => {
        setText(Math.round((window.scrollY*10916)/height))
    };

    const sound = () => {
        
        var audio 
        if (Math.floor(Math.random() * 2))
        {
            audio = new Audio("sound/oof.mp3")
        }
        else
        {
            audio = new Audio("sound/yee.mp3")
        }
        audio.play()
    };

    useEffect(() => {
        window.addEventListener('scroll',updateText)
        
    });

    return (

        // <div className="sticky z-50 top-1/2 text-center">
        //     <img className="  size-48" src="/ancre.png" alt="" />
        //     <p className=" absolute text-3xl rounded-md border-solid border-2 border-gray-200 bg-[#2b2925]">{text}m</p>
        // </div>

        <div className="relative top-[45vh] z-10 text-center container content-center hover:opacity-0" >
            <img className="fixed size-48 " src="/ancre.png" alt="" onMouseEnter={sound} />
            <p className="fixed left-10 mt-14 text-3xl text-white rounded-md bg-[#2b2925] w-28 border-solid border-2 border-gray-200">{text}m</p>
        </div>
    )
};
export default SeaLevel;