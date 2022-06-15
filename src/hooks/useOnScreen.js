import { useState, useEffect } from 'react'

function useOnScreen(options, ref){
  //const ref = useRef();
  const [visible, setVisible] = useState(false);

  //will run only once on load if arguments in []
  useEffect(() =>{

    const observer = new IntersectionObserver(([entry])=>{
      
      //console.log(entry.isIntersecting);
      setVisible(entry.isIntersecting);

    }, options);

    //makes sure that ref is something and observer is looking at it.
    if(ref.current){
      observer.observe(ref.current)
    }

    //clean up function 
    return () => {
      if(ref.current){
        observer.unobserve(ref.current);
      }
    }

  },[ref, options]);

  return [visible];
}

export default useOnScreen;

