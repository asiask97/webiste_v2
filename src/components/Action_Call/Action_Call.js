import './Action_Call.css';
import video from '../../media/video.mp4'
import { useEffect, useRef, useState } from 'react'
function Action_Call() {
  
    const phrases = [
        { text: 'Exceltent working conditions'},
        { text: 'Fast Speed Conection'},
        { text: 'Something important too'},
        { text: 'Another important thing'},
    ]
    const ref = useRef();
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {

        const timer = window.setInterval(() => {

            ref.current.style.animation ='slide 6s ease-in-out infinite' 

            setActiveIndex(prev =>  prev + 1 >= phrases.length ? 0 : prev + 1)
        }, 6000)

        //ref.current.style.animation ='slide-in 2s forwards'


        return () => {
            window.clearInterval(timer)
        }
    }, [phrases])
    const activePhrase= phrases[activeIndex];

    return (
    <div className="Action_Call">
        <div className='action_call_text'>
            <h3>Are you interested in:</h3>
            <div className='animated_text'>
                <h2 ref={ref}>{activePhrase.text}</h2>
            </div>
        </div>
        <video className='backgroundVideo' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
    </div>
  );
}

export default Action_Call;