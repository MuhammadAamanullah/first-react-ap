export function Card({name, children}){
    return(
        <div className="Card">
            <h2>{name}</h2>
            <>
            {children}
            </>
        </div>
    )
}