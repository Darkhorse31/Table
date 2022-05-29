import React,{useState} from "react";

const Cal = () => {
  const [data,setData]=useState({data:'0 '});
  const [ans,setans]=useState(0);
  const handleClick=(e)=>{
    setData({...data,data:e.target.name})
    let a=0;
    Number(data)
    setans(a)

  }
  return (
    <div>
      <div>
        <h3>{data.data}</h3>
        <h4>{ans}</h4>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div>
          <button name="1" className="btn" onClick={handleClick}>
            1
          </button>
          <button name="2" className="btn" onClick={handleClick}>
            2
          </button>
          <button name="3" className="btn" onClick={handleClick}>
            3
          </button>
          <button name="4" className="btn" onClick={handleClick}>
            4
          </button>
          <button name="5" className="btn" onClick={handleClick}>
            5
          </button>
          <button name="6" className="btn" onClick={handleClick}>
            6
          </button>
          <button name="7" className="btn" onClick={handleClick}>
            7
          </button>
          <button name="8" className="btn" onClick={handleClick}>
            8
          </button>
          <button name="9" className="btn" onClick={handleClick}>
            9
          </button>
          <button name="0" className="btn" onClick={handleClick}>
            0
          </button>
        </div>
        <div>
          <button name="+" className="btn" onClick={handleClick}>
            +
          </button>
          <button name="-" className="btn" onClick={handleClick}>
            -
          </button>
          <button name="*" className="btn" onClick={handleClick}>
            *
          </button>
          <button name="/" className="btn" onClick={handleClick}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cal;
