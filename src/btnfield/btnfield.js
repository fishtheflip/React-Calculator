import Btn from "../btn/btn";
import './btnfield.css'
const BtnField = ({fl, stl, stylebtn, onTook}) => {
    return(
        <div className='btnfield' id={stl}>
            <Btn hello={fl.firbtn} styleId={stylebtn.firstbtn} onTookBtn={onTook} />
            <Btn hello={fl.secbtn} styleId={stylebtn.secondbtn}  onTookBtn={onTook}/>
            <Btn hello={fl.thrbtn} styleId={stylebtn.thirdbtn} onTookBtn={onTook} />
            <Btn hello={fl.fourbtn} styleId={stylebtn.fourbtn} onTookBtn={onTook}/>
        </div>
    );
};
export default BtnField;