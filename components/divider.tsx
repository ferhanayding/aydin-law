"use client";

import React from "react";

type DividerProps = {
    inverted?: boolean;
    className?: string;
};

const Divider: React.FC<DividerProps> = ({
    inverted = false,
    className = "",
}) => {
    const yPos = "bottom-0";
    const leftRotate = inverted ? "-rotate-0.5" : "rotate-1";
    const rightRotate = inverted ? "rotate-1" : "-rotate-1";
    const baseBar = `absolute ${yPos} h-[5px] w-[50%] bg-gray-700 z-40`;

    return (
        <div className="md:block hidden  ">
            {/* <div className={`${baseBar} left-0 ${leftRotate} ${className}`} />
            <div className={`${baseBar} right-0 ${rightRotate} ${className}`} /> */}
            <div
                className={`
        absolute ${yPos} left-1/2 transform -translate-x-1/2 h-10 w-full bg-gray-white z-50   rotate-180 
         
        ${className}
      `}
                style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    zIndex: 49,

                }}
            />
        </div>
    );
};

export default Divider;
