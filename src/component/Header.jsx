import { useEffect } from "react";
export function Header({Exp,Level , maxExp}){

    useEffect(() => {
        console.log(`📊 Stats Updated -> Level: ${Level} | EXP: ${Exp}`);
    }, [Level, Exp]);
    const percentage =Math.min(Exp/maxExp*100,100);
    const dynamicHUE =percentage*1.2;
    return(
        <div className="header">
        <p className="top">Level : {Level}/10</p>
        <div className="bar-row">
            <div className="bar"
                style={{ 
                    width: `${percentage}%`, 
                    backgroundColor: `hsl(${dynamicHUE}, 100%, 50%)` 
                }}
            >
            </div>
            <p>{Math.round(percentage)}%</p>
        </div>
        </div>
    );
}