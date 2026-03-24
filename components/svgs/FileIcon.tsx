import React from "react";

const FileIcon = ({
  className,
  transform = "",
}: {
  className?: string;
  transform?: string;
}) => {
  if (transform) {
    return (
      <svg
        width="41"
        height="29"
        viewBox="0 0 41 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0_2027_457)">
          <path
            d="M8.3659 10.5868C7.1835 11.2962 7.08985 12.5829 8.15706 13.4561L19.7664 22.9547C20.8336 23.8279 22.6626 23.961 23.845 23.2515L32.42 18.1066C33.6024 17.3971 33.696 16.1104 32.6288 15.2372L24.2392 8.37304C23.7253 7.95253 23.0081 7.68399 22.2433 7.62833L15.4529 7.13636C14.6881 7.0807 13.943 7.24054 13.3735 7.5822L8.3659 10.5868ZM22.446 9.68479L19.3142 11.5639C18.8687 11.8312 18.1868 11.7816 17.7847 11.4526L14.9579 9.13979L22.446 9.68479Z"
            fill="#294F7C"
          />
        </g>
        <defs>
          <clipPath id="clip0_2027_457">
            <rect width="25" height="25" fill="white" transform={transform} />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 2.5C6.12109 2.5 5 3.62109 5 5V20C5 21.3789 6.12109 22.5 7.5 22.5H17.5C18.8789 22.5 20 21.3789 20 20V9.16016C20 8.49609 19.7383 7.85938 19.2695 7.39062L15.1055 3.23047C14.6367 2.76172 14.0039 2.5 13.3398 2.5H7.5ZM17.7148 9.375H14.0625C13.543 9.375 13.125 8.95703 13.125 8.4375V4.78516L17.7148 9.375Z"
        fill="#294F7C"
      />
    </svg>
  );
};

export default FileIcon;
