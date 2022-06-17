import React from "react";

const ErrorMessage = () => {
  return (
    <div
      style={{
        width: "70%",
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      Please select an option
    </div>
  );
};

export default ErrorMessage;
