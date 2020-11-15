import './btn.css'
const Btn = ({hello, styleId, onTookBtn})=> {
    return(
    <button className="btn" id={styleId} onClick={onTookBtn} name={hello}>{hello} </button>
    );
};

export default Btn;
