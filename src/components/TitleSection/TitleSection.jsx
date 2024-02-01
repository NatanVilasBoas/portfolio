import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const TitleSection = (props) => {
    useEffect(() => {
        ScrollReveal().reveal('.title', {
            delay: 200,
            distance: '20px',
            origin: 'bottom',
            opacity: 0,
            easing: 'ease-in-out',
          });
    })

    return(
        <h1 className="title" style={{ fontSize: '42px', marginLeft: '1em' }}>{props.title}</h1>
    )
}

export default TitleSection;