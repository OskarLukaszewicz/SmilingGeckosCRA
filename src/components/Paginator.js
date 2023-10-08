import React from "react";

const Paginator = ({ page, elNum, onClick, children }) => {
  let length = 4;
  let pagesNum = Math.ceil(elNum / length);
  let firstElement = (page - 1) * length;
  let lastElement = page * length;

  let pagin = (
    <div style={{ marginBottom: 50 }}>
      <button
        name={"previous"}
        onClick={onClick}
        disabled={page === 1 ? true : false}
      >
        ←
      </button>
      {page} / {pagesNum}
      <button
        name={"next"}
        onClick={onClick}
        disabled={page === pagesNum || pagesNum === 0 ? true : false}
      >
        →
      </button>
    </div>
  );

  const childrenWithProps = React.cloneElement(children, {
    firstElement,
    lastElement,
    pagin,
  });

  return <>{childrenWithProps}</>;
};

export default Paginator;
