import React from "react";
import type { FC } from "react";

const CaptureForm: FC = () => {
  return (
    <>
      <div className="formContainer border-2 border-gray-300 h-[70vh] w-[80%] rounded-sm shadow-xl flex flex-col bg-white-200">
        <form>
          <label>
            <input type="text" />
          </label>
        </form>
      </div>
    </>
  );
};

export default CaptureForm;
