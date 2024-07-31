const ShapeOne = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      height={60}
      width={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      {" "}
      <g clip-path="url(#clip0_105_296)">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M200 98.5234C196.477 99.4861 192.769 100 188.941 100H144.233C121.117 100 102.378 118.739 102.378 141.854V191.319C102.378 194.295 102.067 197.199 101.477 200C100.514 196.477 100 192.769 100 188.941V144.233C100 121.117 81.2612 102.378 58.1456 102.378H8.68122C5.70469 102.378 2.80073 102.067 0 101.477C3.52289 100.514 7.23105 100 11.0593 100H55.7675C78.8831 100 97.622 81.2611 97.622 58.1456L97.622 8.68118C97.622 5.70466 97.9327 2.80071 98.5234 0C99.4861 3.5229 100 7.23107 100 11.0593V55.7675C100 78.8831 118.739 97.622 141.855 97.622H191.319C194.295 97.622 197.199 97.9327 200 98.5234Z"
          fill="url(#paint0_linear_105_296)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_105_296"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
          className="rotate-90 animate-spin"
        >
          {" "}
          <stop stop-color="#F2E85E" /> <stop offset="1" stop-color="#FFDBB0" />{" "}
        </linearGradient>{" "}
        {/* <clipPath id="clip0_105_296">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "} */}
      </defs>{" "}
    </svg>
  );
};

export default ShapeOne;
