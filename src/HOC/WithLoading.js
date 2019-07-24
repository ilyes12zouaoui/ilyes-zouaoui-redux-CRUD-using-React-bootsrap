import React from "react";
export default Component => ({ isLoading, ...props }) => {
  if (isLoading)
    return (
      <div className="text-center display-4" style={{ minHeight: "70vh" }}>
        Loading...
      </div>
    );
  return <Component {...props} />;
};
