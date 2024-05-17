import { useState } from "react";
import "./otherData.css"

const OtherData = ({user, otherData, setOtherData}) => {


    const [isOtherDataVisible, setIsOtherDataVisible] = useState(false);

  return (
    <div className="otherDataContainer">
      <button
        onClick={(e) => setIsOtherDataVisible(false)}
        onMouseEnter={() => setIsOtherDataVisible(true)}
        className="otherDataBtn"
      >
        Other Data
      </button>

      {isOtherDataVisible && (
        <div className="data">
          <div className="inputStreet">
            <label htmlFor="">Street:</label>
            <input
              type="text"
              value={otherData.street}
              onChange={(e) =>
                setOtherData({ ...otherData, street: e.target.value })
              }
            />
          </div>
          <div className="inputCity">
            <label htmlFor="">City:</label>
            <input
              type="text"
              value={otherData.city}
              onChange={(e) =>
                setOtherData({ ...otherData, city: e.target.value })
              }
            />
          </div>
          <div className="inputZipCode">
            <label htmlFor="">Zip code:</label>
            <input
              type="text"
              value={otherData.zipcode}
              onChange={(e) =>
                setOtherData({ ...otherData, zipcode: e.target.value })
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherData;
