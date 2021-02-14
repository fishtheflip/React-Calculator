import "./field.css";
const Field = ({begginin})=> {
    if(begginin === undefined){
        return(
            <div className="field">
                <div className="beg" value={begginin}>{begginin}</div>
            </div>
        );
    }
    if(begginin.length >= 10){
        return(
            <div className="fieldMini">
                <div className="beg" value={begginin}>{begginin}</div>
            </div>
        );
    }
    return(
        <div className="field">
            <div className="beg" value={begginin}>{begginin}</div>
        </div>
    );
};
export default Field;