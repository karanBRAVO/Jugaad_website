import React from "react";

type Props = {};

const BidirectionalLine = (props: Props) => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full md:w-1/2 px-2">
          <svg viewBox="0 0 300 10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker
                id="arrow-start"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
                stroke="white"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
              </marker>
              <marker
                id="arrow-end"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto"
                stroke="white"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
              </marker>
            </defs>
            <line
              x1="10"
              y1="5"
              x2="290"
              y2="5"
              stroke="white"
              markerStart="url(#arrow-start)"
              markerEnd="url(#arrow-end)"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default BidirectionalLine;
