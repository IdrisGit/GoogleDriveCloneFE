import React from "react";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddFileButton = () => {

    const handleUpload = (e) => {
        const file = e.target.file[0]
        if(file == null) return
    }

    return(
        <>
         <label className="btn btn-outline-success btn-m m-0 mr-2">
            <FontAwesomeIcon icon={faFileUpload} />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
            />
        </label>
        </>
    );
};

export default AddFileButton;