import "./field.css";
import Btn from '../btn/btn'
const Field = ({begginin})=> {
    return(
        <div className="field">
            <div className="beg">{begginin}</div>
        </div>
    );
};
export default Field;