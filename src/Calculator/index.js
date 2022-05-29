import React from "react";

const Cal = () => {
  return (
    <div>
      <div>
        <h3>All Data</h3>
        <h4>All Ans</h4>
      </div>
      <div>
        <div>
          <button name="1" >
            1
          </button>
          <button name="2" className="btn">
            2
          </button>
          <button name="3" className="btn">
            3
          </button>
          <button name="4" className="btn">
            4
          </button>
          <button name="5" className="btn">
            5
          </button>
          <button name="6" className="btn">
            6
          </button>
          <button name="7" className="btn">
            7
          </button>
          <button name="8" className="btn">
            8
          </button>
          <button name="9" className="btn">
            9
          </button>
          <button name="0" className="btn">
            0
          </button>
        </div>
        <button name="+" className="btn">
          +
        </button>
        <button name="-" className="btn">
          -
        </button>
        <button name="*" className="btn">
          *
        </button>
        <button name="/" className="btn">
          /
        </button>
      </div>
    </div>
  );
};

export default Cal;
