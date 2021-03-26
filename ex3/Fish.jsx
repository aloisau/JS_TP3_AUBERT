import React from "react"


const Fish = ({size}) => {
    const fishBody = `><${"==".repeat(size)}°>`;
    React.useEffect(()=>console.log(size, fishBody), [size]);
    return <p>{fishBody}</p>;
};

export default Fish;
