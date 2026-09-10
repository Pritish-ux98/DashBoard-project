export function Footer({TaskCompleted , TaskLeft ,ClaimEveryThing }){
    return(
        <div className="footer">
            <div className="total-left">
                <h3>Task left : {TaskLeft}</h3>
            </div>
            <div className="total-finish">
                <h3>Task finish : {TaskCompleted}</h3>
            </div>
            <div>
                <button
                    onClick={ClaimEveryThing}
                    className="claim-button"
                >
                    claim
                </button>
            </div>

        </div>
    );
}