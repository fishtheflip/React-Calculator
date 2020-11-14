import Btn from "../btn/btn";
import './btnfield.css'
const BtnField = ({fl, stl, getStyle}) => {
    return(
        <div className='btnfield' id={stl}>
            <Btn hello={fl.firbtn} />
            <Btn hello={fl.secbtn}/>
            <Btn hello={fl.thrbtn} />
            <Btn hello={fl.fourbtn} />
        </div>
    );
};
export default BtnField;