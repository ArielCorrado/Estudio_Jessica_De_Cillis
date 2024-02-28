// https://www.npmjs.com/package/react-spinners
// https://www.davidhu.io/react-spinners/

import PuffLoader from "react-spinners/PuffLoader";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="contSpinners flex">
            <PuffLoader color="#333A4D" size={100}/>
        </div>
    );
};

export { Spinner };