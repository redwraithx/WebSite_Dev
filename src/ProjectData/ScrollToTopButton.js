import React from 'react';


const ScrollToTopButton = (props) => {

    const [intervalId, setIntervalId] = React.useState(0);
    const [thePosition, setThePosition] = React.useState(false);
    
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                console.log("scrolling true");

                setThePosition(true)
            } else {
                console.log("scrolling false");

                setThePosition(false);
            }
        });
        // window.scrollTo(0, 0);
    }, [])
    
    const onScrollStep = () => {

        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - props.scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
 
    }

    const renderGoTopIcon = () => {
        return (
            <button className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>
                <img className="scrollToTopButton" src={process.env.PUBLIC_URL + "/Images/MyIcons/ScrollToTopArrowV2.png"}  alt='Go to top' style={{  }}  />
            </button>
        )
    }

    return (
            <div>

            </div>
            
            
    )
}

export default ScrollToTopButton;
// const App = () => {

//  return (
//  		<div>
      
//             <GoTop scrollStepInPx="100" delayInMs="10.50"/>                         

//  		</div>
//  )
// }

//ReactDOM.render(<App />, document.querySelector("#app"))
