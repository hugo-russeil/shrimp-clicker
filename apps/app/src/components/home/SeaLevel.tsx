import { useEffect, useState } from "react"


const SeaLevel = () => {
    const [text, setText] = useState(0);
    const height = document.body.scrollHeight;
    
    const updateText = () => {
        setText(Math.round((window.scrollY*10916)/height))
    };

    useEffect(() => {
        window.addEventListener('scroll',updateText)
    });

    return (


        <div className="relative top-[45vh] z-10 text-center container content-center hover:hidden" >
            <img className="fixed size-48 " src="/ancre.png" alt="" />
            <p className="fixed left-10 mt-14 text-3xl text-white rounded-md bg-[#2b2925] w-28 border-solid border-2 border-gray-200">{text}m</p>
        </div>
    )
};
export default SeaLevel;