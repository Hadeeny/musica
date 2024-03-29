import { Link as a, Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");
  const toggleNav = () => {
    setToggle(!toggle);
    setShowBox(false);
  };

  const playlist = useSelector((state) => state.playlist);
  const { loading, error } = playlist;

  return (
    <div className="flex">
      <nav
        className={`bg-darkGray z-[300] p-5 ${
          toggle ? "h-[100vh]" : "h-[9vh]"
        } top-0 fixed  w-[100vw] lg:h-[100vh] lg:w-[5rem]`}
      >
        <div className={``}>
          <div className="flex">
            <div onClick={toggleNav} className="lg:hidden mr-4 cursor-pointer">
              <div className="w-8 h-[0.18rem] bg-white m-1 "></div>
              <div className="w-8 h-[0.18rem] bg-white m-1"></div>
              <div className="w-8 h-[0.18rem] bg-white m-1"></div>
            </div>
            <Link to={`/`}>
              <svg
                className="cursor-pointer"
                width="32"
                height="34"
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0601 0.587295L7.86476 2.13795C7.60683 2.19295 7.37555 2.3347 7.20947 2.53956C7.04339 2.74441 6.95254 3.00001 6.95207 3.26373V15.6468C6.42708 15.4645 5.87516 15.3717 5.3194 15.3724C2.80633 15.3724 0.768982 17.2177 0.768982 19.4941C0.768982 21.7704 2.80633 23.6158 5.31947 23.6158C7.04656 23.6158 8.77399 22.677 9.49197 21.0764C10.116 19.6854 9.86983 18.0132 9.86983 16.5213V6.62223L19.779 4.32072C19.7449 1.87246 17.4654 0.0689939 15.0601 0.587361L15.0601 0.587295Z"
                  fill="#FACD66"
                />
                <path
                  d="M15.0565 11.998V25.2556C15.0563 25.2872 15.0488 25.3184 15.0345 25.3466C15.0202 25.3748 14.9996 25.3993 14.9742 25.4182C14.9488 25.437 14.9194 25.4497 14.8882 25.4552C14.8571 25.4607 14.8251 25.4589 14.7948 25.4499C14.349 25.3225 13.8875 25.2581 13.4238 25.2585C10.9107 25.2585 8.87341 27.1039 8.87341 29.3802C8.87341 31.6566 10.9107 33.502 13.4238 33.502C15.1509 33.502 16.8784 32.5632 17.5964 30.9626C18.2204 29.5716 17.9743 27.8993 17.9743 26.4075V15.6245C17.9744 15.5481 18.0004 15.474 18.048 15.4143C18.0957 15.3545 18.1621 15.3127 18.2366 15.2956L27.8834 13.055C27.9331 13.0433 27.9848 13.043 28.0346 13.0541C28.0844 13.0651 28.1311 13.0873 28.1712 13.1189C28.2112 13.1506 28.2436 13.1908 28.266 13.2367C28.2883 13.2826 28.3 13.3329 28.3002 13.384V24.2421C28.3 24.2737 28.2925 24.3048 28.2782 24.3331C28.2639 24.3613 28.2433 24.3858 28.2179 24.4046C28.1925 24.4235 28.1631 24.4362 28.1319 24.4417C28.1008 24.4472 28.0688 24.4454 28.0385 24.4364C27.5926 24.309 27.1312 24.2446 26.6675 24.245C24.1544 24.245 22.1171 26.0904 22.1171 28.3667C22.1171 30.6431 24.1544 32.4884 26.6674 32.4884C28.1883 32.4884 29.7005 31.7011 30.5534 30.413C31.3799 29.1648 31.2183 27.8537 31.2179 26.4434C31.2171 23.9282 31.2171 21.413 31.2179 18.8979V8.84266C31.2174 8.69091 31.1829 8.54119 31.1171 8.40447C31.0512 8.26776 30.9556 8.14751 30.8372 8.05253C30.7189 7.95755 30.5808 7.89026 30.433 7.85557C30.2853 7.82089 30.1317 7.81969 29.9834 7.85208L15.9692 10.8722C15.7113 10.9272 15.48 11.069 15.3139 11.2738C15.1478 11.4787 15.057 11.7343 15.0565 11.998Z"
                  fill="#A4C7C6"
                />
                <path
                  d="M26.3081 13.384C26.3079 13.3329 26.2962 13.2826 26.2739 13.2367C26.2515 13.1908 26.2191 13.1506 26.1791 13.1189C26.139 13.0873 26.0923 13.0651 26.0425 13.0541C25.9927 13.043 25.941 13.0433 25.8913 13.055L16.2445 15.2956C16.17 15.3127 16.1036 15.3545 16.0559 15.4143C16.0083 15.474 15.9823 15.5481 15.9822 15.6245V26.4075C15.9822 27.8993 16.2283 29.5716 15.6043 30.9626C15.0241 32.256 13.7847 33.1169 12.419 33.3998C12.7497 33.4676 13.0864 33.5018 13.4239 33.502C15.151 33.502 16.8785 32.5632 17.5965 30.9626C18.2205 29.5716 17.9744 27.8993 17.9744 26.4075V15.6245C17.9745 15.5481 18.0005 15.474 18.0481 15.4143C18.0958 15.3545 18.1622 15.3127 18.2367 15.2956L26.3081 13.4209V13.384ZM13.0623 25.2727C12.8491 25.2878 12.6371 25.3165 12.4276 25.3588C12.5546 25.3847 12.6799 25.4147 12.8027 25.4499C12.8316 25.4584 12.862 25.4604 12.8917 25.4557C12.9214 25.451 12.9497 25.4398 12.9745 25.4228C12.9994 25.4058 13.0201 25.3836 13.0353 25.3576C13.0505 25.3316 13.0597 25.3026 13.0623 25.2726V25.2727ZM31.218 26.4434C31.2172 23.9282 31.2172 21.413 31.218 18.8979V8.84266C31.2175 8.69091 31.183 8.54119 31.1172 8.40447C31.0513 8.26776 30.9557 8.14751 30.8373 8.05253C30.719 7.95755 30.5809 7.89026 30.4331 7.85557C30.2854 7.82089 30.1318 7.81969 29.9835 7.85208L28.8857 8.08868C28.9927 8.18298 29.0784 8.29901 29.137 8.42902C29.1956 8.55902 29.2259 8.70004 29.2258 8.84266V26.4434C29.2262 27.8536 29.3878 29.1648 28.5613 30.413C27.8792 31.4207 26.8345 32.1263 25.6449 32.3826C25.9813 32.4528 26.324 32.4883 26.6676 32.4884C28.1883 32.4884 29.7006 31.7011 30.5535 30.413C31.38 29.1648 31.2184 27.8537 31.218 26.4434ZM26.306 24.2591C26.0928 24.2742 25.8808 24.303 25.6712 24.3453C25.7983 24.3712 25.9236 24.4012 26.0464 24.4364C26.0752 24.4449 26.1056 24.4469 26.1353 24.4422C26.165 24.4375 26.1933 24.4263 26.2182 24.4093C26.243 24.3923 26.2638 24.3701 26.279 24.3441C26.2942 24.3181 26.3034 24.2891 26.306 24.2591Z"
                  fill="#9CBCBB"
                />
              </svg>
            </Link>
          </div>

          <ul className={`${!toggle ? "hidden" : "block"}  lg:block`}>
            <Link to={"/"}>
              <li
                onClick={() => {
                  setToggle(false);
                }}
                className="flex items-center my-10"
              >
                <span className="lg:hidden ml-6 order-2">Home</span>
                <svg
                  className="lg:-ml-1 cursor-pointer"
                  width="40"
                  height="42"
                  viewBox="0 0 40 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_19_207)">
                    <path
                      d="M17.3818 29.0503V26.239C17.3818 25.5266 17.9611 24.9478 18.6786 24.9433H21.3132C22.034 24.9433 22.6183 25.5234 22.6183 26.239V29.0421C22.6182 29.66 23.1204 30.1622 23.7427 30.1667H25.5402C26.3797 30.1688 27.1855 29.8392 27.7799 29.2507C28.3743 28.6621 28.7084 27.8629 28.7084 27.0294V19.0437C28.7084 18.3704 28.4077 17.7318 27.8876 17.2999L21.7811 12.4514C20.7137 11.6034 19.1891 11.6308 18.1533 12.5166L12.1781 17.2999C11.6334 17.7191 11.3078 18.3596 11.2917 19.0437V27.0213C11.2917 28.7584 12.7101 30.1667 14.4598 30.1667H16.2163C16.5159 30.1688 16.804 30.0522 17.0167 29.8426C17.2294 29.633 17.349 29.3478 17.3489 29.0503H17.3818Z"
                      fill="#EFEEE0"
                      fillOpacity="0.25"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_19_207"
                      x="0.291687"
                      y="0.833344"
                      width="39.4167"
                      height="40.3334"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.980392 0 0 0 0 0.803921 0 0 0 0 0.4 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_19_207"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_19_207"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </li>
            </Link>
            <Link to={"/collection"}>
              <li
                onClick={() => {
                  setToggle(false);
                }}
                className="flex items-center lg:ml-1 ml-[0.7rem] mb-10"
              >
                <span className="lg:hidden ml-8 order-2">My Collections</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5833 4.35416H14.6666V2.98832C14.6666 2.22749 14.0433 1.60416 13.2825 1.60416H8.71748C7.95665 1.60416 7.33331 2.22749 7.33331 2.98832V4.35416H6.41665C5.40831 4.35416 4.58331 5.17916 4.58331 6.18749V6.30666C4.87665 6.22416 5.17915 6.18749 5.49998 6.18749H16.5C16.8208 6.18749 17.1233 6.22416 17.4166 6.30666V6.18749C17.4166 5.17916 16.5916 4.35416 15.5833 4.35416Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M12.7691 15.5192C12.4758 15.5192 12.2466 15.7575 12.2466 16.0417C12.2466 16.3258 12.485 16.5642 12.7691 16.5642C13.0533 16.5642 13.2916 16.3258 13.2916 16.0417C13.2916 15.7575 13.0533 15.5192 12.7691 15.5192Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M8.31419 16.3258C8.02085 16.3258 7.79169 16.5642 7.79169 16.8483C7.79169 17.1325 8.03002 17.3708 8.31419 17.3708C8.59835 17.3708 8.83669 17.1325 8.83669 16.8483C8.83669 16.5642 8.60752 16.3258 8.31419 16.3258Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M17.4166 7.68167C17.1233 7.59917 16.8208 7.5625 16.5 7.5625H5.49998C5.17915 7.5625 4.87665 7.59917 4.58331 7.68167C3.00665 8.09417 1.83331 9.53333 1.83331 11.2292V16.7292C1.83331 18.7458 3.48331 20.3958 5.49998 20.3958H16.5C18.5166 20.3958 20.1666 18.7458 20.1666 16.7292V11.2292C20.1666 9.53333 18.9933 8.09417 17.4166 7.68167ZM14.6666 12.1733V16.0417C14.6666 17.0867 13.8141 17.9392 12.7691 17.9392C11.7241 17.9392 10.8716 17.0867 10.8716 16.0417C10.8716 14.9967 11.7241 14.1442 12.7691 14.1442C12.9525 14.1442 13.1266 14.1808 13.2916 14.2267V13.0717L10.2208 13.9058V16.8483C10.2208 16.8575 10.2208 16.8667 10.2116 16.8758C10.2025 17.9117 9.34998 18.755 8.31415 18.755C7.26915 18.755 6.41665 17.9025 6.41665 16.8483C6.41665 15.7942 7.26915 14.9508 8.31415 14.9508C8.49748 14.9508 8.67165 14.9875 8.84581 15.0333V13.3833V11.9625C8.84581 11.1742 9.34081 10.5325 10.0925 10.3308L12.5216 9.66167C13.3008 9.45083 13.7958 9.6525 14.0708 9.86333C14.3458 10.0742 14.6666 10.4867 14.6666 11.3025V12.1733Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                </svg>
              </li>
            </Link>
            <Link to={"/"}>
              <li
                onClick={() => {
                  setToggle(false);
                }}
                className="flex items-center ml-[0.7rem] lg:ml-1 mb-10"
              >
                <span className="lg:hidden ml-8 order-2">Radio</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.10419 1.83333V4.58333H6.41669C6.17835 4.58333 5.94919 4.5925 5.72919 4.62916V1.83333C5.72919 1.45749 6.04085 1.14583 6.41669 1.14583C6.79252 1.14583 7.10419 1.45749 7.10419 1.83333Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M15.5833 4.58333H6.41665C6.17831 4.58333 5.94915 4.5925 5.72915 4.62916C3.36415 4.90416 1.83331 6.65499 1.83331 9.16666V15.5833C1.83331 18.3333 3.66665 20.1667 6.41665 20.1667H15.5833C18.3333 20.1667 20.1666 18.3333 20.1666 15.5833V9.16666C20.1666 6.41666 18.3333 4.58333 15.5833 4.58333ZM7.22331 14.6667C5.95831 14.6667 4.93165 13.64 4.93165 12.375C4.93165 11.11 5.95831 10.0833 7.22331 10.0833C8.48831 10.0833 9.51498 11.11 9.51498 12.375C9.51498 13.64 8.48831 14.6667 7.22331 14.6667ZM13.1816 14.8958H12.7233C12.3475 14.8958 12.0358 14.5842 12.0358 14.2083C12.0358 13.8325 12.3475 13.5208 12.7233 13.5208H13.1816C13.5575 13.5208 13.8691 13.8325 13.8691 14.2083C13.8691 14.5842 13.5575 14.8958 13.1816 14.8958ZM16.39 14.8958H15.9316C15.5558 14.8958 15.2441 14.5842 15.2441 14.2083C15.2441 13.8325 15.5558 13.5208 15.9316 13.5208H16.39C16.7658 13.5208 17.0775 13.8325 17.0775 14.2083C17.0775 14.5842 16.7658 14.8958 16.39 14.8958ZM16.39 11.2292H12.7233C12.3475 11.2292 12.0358 10.9175 12.0358 10.5417C12.0358 10.1658 12.3475 9.85416 12.7233 9.85416H16.39C16.7658 9.85416 17.0775 10.1658 17.0775 10.5417C17.0775 10.9175 16.7658 11.2292 16.39 11.2292Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                </svg>
              </li>
            </Link>
            <Link to={"/"}>
              <li
                onClick={() => {
                  setToggle(false);
                }}
                className="flex items-center ml-[0.7rem] lg:ml-1 mb-10"
              >
                <span className="lg:hidden ml-8 order-2">Music Video</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3125 7.205H1.83331V14.8408C1.83331 14.8958 1.83331 14.9508 1.84248 14.9967H10.3125V7.205Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M7.04919 5.83H10.3125V1.83333H7.07669V5.71999C7.07669 5.75666 7.05836 5.79333 7.04919 5.83Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M5.70168 5.72V1.98C3.66668 2.40166 2.33751 3.75833 1.95251 5.83H5.72001C5.71085 5.79333 5.70168 5.75666 5.70168 5.72Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M14.8683 1.83333H11.6875V5.83H14.8683V1.83333Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M16.2342 5.83001H20.0475C19.6625 3.74001 18.315 2.37417 16.2434 1.97084V5.80251C16.2434 5.81167 16.2342 5.82084 16.2342 5.83001Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M16.2433 20.0292C18.2508 19.635 19.5708 18.3517 20.0017 16.3717H16.2433V20.0292Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M14.8683 16.3717H11.6875V20.1667H14.8683V16.3717Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M11.6875 14.9967H20.1575C20.1667 14.9508 20.1667 14.8958 20.1667 14.8408V7.205H11.6875V14.9967Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M10.3125 16.3717H7.07666V20.1667H10.3125V16.3717Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M1.99835 16.3717C2.42919 18.3333 3.73085 19.6167 5.70169 20.02V16.3717H1.99835Z"
                    fill="#EFEEE0"
                    fillOpacity="0.25"
                  />
                </svg>
              </li>
            </Link>
          </ul>
          <ul className={`${!toggle ? "hidden" : "block"} lg:block`}>
            <Link to={"/"}>
              <li
                onClick={() => {
                  setToggle(false);
                }}
                className="flex items-center ml-[0.7rem] lg:ml-1 mb-10"
              >
                <span className="lg:hidden ml-8 order-2">Profile</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.25">
                    <path
                      d="M11 1.83333C8.59831 1.83333 6.64581 3.78583 6.64581 6.1875C6.64581 8.54333 8.48831 10.45 10.89 10.5325C10.9633 10.5233 11.0366 10.5233 11.0916 10.5325C11.11 10.5325 11.1191 10.5325 11.1375 10.5325C11.1466 10.5325 11.1466 10.5325 11.1558 10.5325C13.5025 10.45 15.345 8.54333 15.3541 6.1875C15.3541 3.78583 13.4016 1.83333 11 1.83333Z"
                      fill="#EFEEE0"
                    />
                    <path
                      d="M15.6567 12.9708C13.0992 11.2658 8.92836 11.2658 6.35253 12.9708C5.18836 13.75 4.54669 14.8042 4.54669 15.9317C4.54669 17.0592 5.18836 18.1042 6.34336 18.8742C7.62669 19.7358 9.31336 20.1667 11 20.1667C12.6867 20.1667 14.3734 19.7358 15.6567 18.8742C16.8117 18.095 17.4534 17.05 17.4534 15.9133C17.4442 14.7858 16.8117 13.7408 15.6567 12.9708Z"
                      fill="#EFEEE0"
                    />
                  </g>
                </svg>
              </li>
            </Link>
            <Link to={"/"}>
              <li
                onClick={() => {
                  setToggle(false);
                }}
                className="flex items-center ml-[0.7rem] lg:ml-1"
              >
                <span className="lg:hidden order-2 ml-8">Logout</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.25">
                    <path
                      d="M10.535 1.83333C12.8107 1.83333 14.6666 3.6575 14.6666 5.90333V10.2942H9.07072C8.66967 10.2942 8.35257 10.6058 8.35257 11C8.35257 11.385 8.66967 11.7058 9.07072 11.7058H14.6666V16.0875C14.6666 18.3333 12.8107 20.1667 10.5163 20.1667H5.9743C3.6893 20.1667 1.83331 18.3425 1.83331 16.0967V5.9125C1.83331 3.6575 3.69862 1.83333 5.98363 1.83333H10.535ZM16.9952 7.83768C17.2702 7.55352 17.7193 7.55352 17.9943 7.82852L20.671 10.496C20.8085 10.6335 20.8818 10.8077 20.8818 11.0002C20.8818 11.1835 20.8085 11.3668 20.671 11.4952L17.9943 14.1627C17.8568 14.3002 17.6735 14.3735 17.4993 14.3735C17.316 14.3735 17.1327 14.3002 16.9952 14.1627C16.7202 13.8877 16.7202 13.4385 16.9952 13.1635L18.4618 11.706H14.6668V10.2943H18.4618L16.9952 8.83685C16.7202 8.56185 16.7202 8.11268 16.9952 7.83768Z"
                      fill="#EFEEE0"
                    />
                  </g>
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="h-16 w-full">
        <svg
          onClick={() => {
            setShowBox(!showBox);
          }}
          className="absolute z-[200] right-[1rem] top-6 lg:left-[5em] lg:top-6"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 14L11.1 11.1"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search artist"
          className={`lg:flex absolute ${
            !showBox ? "hidden" : ""
          } right-[2.3rem] lg:left-2 min-w-[10rem] lg:w-[30rem] pl-6 lg:pl-[3rem] rounded-3xl mt-4 ml-[4rem] h-8 bg-[#1D2123]`}
          type="search"
        />
      </div>
      {loading ? (
        ""
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <SearchBox setQuery={setQuery} query={query} />
      )}
    </div>
  );
};

export default Navbar;
