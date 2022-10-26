import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {addToNowPlaying} from '../features/musicSlice'

const AlbumScreen = () => {
  const dispatch = useDispatch()
  const playlist = useSelector((state) => state.playlist);

  let { id } = useParams();
  const { myPlaylist } = playlist;

  const newPlay = myPlaylist.filter((playlist) => playlist.id === id);
  const list = newPlay[0].files
// const list = [{
//   artist: 'dfa',
//   title: 'dakj',
//   cover: 'jldlllllll'
// }]
// const newPlay = [{
//   artist: 'dfa',
//   title: 'dakj',
//   cover: 'jldlllllll'
// }]

  // const playAll = () => {
  //   dispatch(addToNowPlaying(newPlay))
  // }
  return (
    <section className="overflow-x-hidden bg-cover bg-fixed bg-left bg-[url('../assets/Lead-image.png')] w-[90%] mt-[5em] mx-auto  lg:mb-24 gap-8 items-center">
      <div className="lg:flex gap-8 items-center">
        <div className="w-[22rem] lg:w-[15rem]">
          <img className="w-full" src={newPlay[0].cover} />
        </div>
        <div className="w-[25em] space-y-3">
          <h2 className="text-blue-300 text-3xl">{newPlay[0].title}</h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, cum voluptatum! Quisquam
          </p>
          <div>64 Songs - 16 hrs+</div>
          <div className="flex gap-3">
            <div onClick={()=>{dispatch(addToNowPlaying(list))}} className="bg-[#323239] rounded-3xl py-2 flex gap-2 items-center px-3 cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 1.33331C11.6744 1.33331 14.6667 4.32415 14.6667 8.00384C14.6667 11.6758 11.6744 14.6666 8.00001 14.6666C4.32562 14.6666 1.33334 11.6758 1.33334 8.00384C1.33334 4.32415 4.32562 1.33331 8.00001 1.33331ZM7.24068 5.35325C7.09911 5.35325 6.96397 5.38541 6.83527 5.44973C6.6744 5.53978 6.5457 5.68128 6.47491 5.84851C6.42987 5.96428 6.35908 6.3116 6.35908 6.31804C6.2883 6.69752 6.24969 7.31498 6.24969 7.99676C6.24969 8.64703 6.2883 9.23812 6.34621 9.62403C6.35265 9.63047 6.42343 10.0614 6.50065 10.2093C6.64222 10.4795 6.91893 10.6467 7.21494 10.6467H7.24068C7.43373 10.6403 7.83913 10.473 7.83913 10.4666C8.52125 10.1836 9.86616 9.30244 10.4067 8.71714L10.4453 8.67854C10.5161 8.60779 10.6062 8.49845 10.6255 8.47272C10.7285 8.33765 10.7799 8.17042 10.7799 8.00384C10.7799 7.81667 10.722 7.64301 10.6126 7.50151C10.5869 7.47578 10.4904 7.36644 10.4003 7.27639C9.8726 6.71038 8.4955 5.78419 7.77478 5.50119C7.66539 5.45681 7.38868 5.35968 7.24068 5.35325Z"
                  fill="#FACD66"
                />
              </svg>
              Play all
            </div>
            <div className="bg-[#323239] flex items-center gap-2 rounded-3xl py-2 px-3 cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8067 10.0067C12.08 9.96002 11.3333 10.2267 10.78 10.78C9.74 11.82 9.74 13.5067 10.78 14.5534C11.1333 14.9067 11.5667 15.14 12.0267 15.2534C12.28 15.32 12.5467 15.34 12.8133 15.3267C13.4467 15.3 14.0667 15.0467 14.5533 14.56C15.24 13.8734 15.4733 12.9067 15.2533 12.0334C15.1467 11.5734 14.9067 11.14 14.5533 10.7867C14.0733 10.3 13.4467 10.04 12.8067 10.0067ZM14.16 12.6534C14.16 12.7934 14.1067 12.9134 14.0133 13.0067C13.92 13.1 13.8 13.1534 13.66 13.1534H13.1667V13.6734C13.1667 13.8134 13.1133 13.9334 13.02 14.0267C12.9267 14.12 12.8067 14.1734 12.6667 14.1734C12.3933 14.1734 12.1667 13.9467 12.1667 13.6734V13.1534H11.6667C11.3933 13.1534 11.1667 12.9267 11.1667 12.6534C11.1667 12.38 11.3933 12.1534 11.6667 12.1534H12.1667V11.68C12.1667 11.4067 12.3933 11.18 12.6667 11.18C12.94 11.18 13.1667 11.4067 13.1667 11.68V12.1534H13.66C13.94 12.1534 14.16 12.38 14.16 12.6534Z"
                  fill="#FACD66"
                />
                <path
                  d="M8.15334 8.04669C7.88 8.04669 7.66 8.26669 7.66 8.54003C7.66 8.81336 7.88 9.03336 8.15334 9.03336C8.42667 9.03336 8.64667 8.81336 8.64667 8.54003C8.64667 8.26669 8.42667 8.04669 8.15334 8.04669Z"
                  fill="#FACD66"
                />
                <path
                  d="M4.50667 8.70673C4.23334 8.70673 4.01334 8.92673 4.01334 9.20006C4.01334 9.47339 4.23334 9.69339 4.50667 9.69339C4.78 9.69339 5 9.47339 5 9.20006C5 8.92673 4.78 8.70673 4.50667 8.70673Z"
                  fill="#FACD66"
                />
                <path
                  d="M10.7933 1.33331H5.20668C5.02001 1.33331 4.84001 1.33998 4.66668 1.36665C2.56668 1.55998 1.33334 2.96665 1.33334 5.20665V10.7933C1.33334 13.0333 2.56668 14.44 4.66668 14.6333C4.84001 14.66 5.02001 14.6666 5.20668 14.6666H9.00001C9.26001 14.6666 9.42668 14.3733 9.32668 14.1333C9.13334 13.6733 9.00001 13.14 9.00001 12.6666C9.00001 10.6466 10.6467 8.99998 12.6667 8.99998C13.1733 8.99998 13.6667 9.09998 14.12 9.29998C14.3667 9.40665 14.6667 9.23998 14.6667 8.97331V5.20665C14.6667 2.77998 13.22 1.33331 10.7933 1.33331ZM9.65334 5.36665V8.53998C9.65334 8.54665 9.64668 8.55331 9.64668 8.56665C9.63334 9.37998 8.97334 10.04 8.15334 10.04C7.32668 10.04 6.66001 9.36665 6.66001 8.54665C6.66001 7.71998 7.33334 7.05331 8.15334 7.05331C8.32668 7.05331 8.49334 7.08665 8.65334 7.14665V6.01998L6.00668 6.73998V9.20665C6.00668 9.21331 6.00001 9.21998 6.00001 9.22665C5.98668 10.04 5.32668 10.6933 4.50668 10.6933C3.68001 10.6933 3.01334 10.02 3.01334 9.19998C3.01334 8.37998 3.68668 7.70665 4.50668 7.70665C4.68001 7.70665 4.84668 7.73998 5.00001 7.79998V6.35998V5.19331C5.00001 4.57331 5.38668 4.07331 5.98001 3.91331L7.96668 3.36665C8.58668 3.19998 8.96668 3.36665 9.18001 3.52665C9.48668 3.75998 9.64001 4.13998 9.64001 4.64665V5.36665H9.65334Z"
                  fill="#FACD66"
                />
              </svg>
              Add to Collections
            </div>
            <div className="bg-[#323239] flex items-center rounded-3xl py-2 px-3 cursor-pointer">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.51987 0.666973C4.93987 0.679746 5.34654 0.75308 5.74054 0.88708H5.77987C5.80654 0.899746 5.82654 0.913746 5.83987 0.926413C5.9872 0.973746 6.12654 1.02708 6.25987 1.10041L6.5132 1.21375C6.6132 1.26708 6.7332 1.36641 6.79987 1.40708C6.86654 1.44641 6.93987 1.48708 6.99987 1.53308C7.74054 0.96708 8.63987 0.660413 9.56654 0.666973C9.9872 0.666973 10.4072 0.726413 10.8065 0.860413C13.2672 1.66041 14.1539 4.36041 13.4132 6.72041C12.9932 7.92641 12.3065 9.02708 11.4072 9.92641C10.1199 11.1731 8.7072 12.2797 7.18654 13.2331L7.01987 13.3337L6.84654 13.2264C5.32054 12.2797 3.89987 11.1731 2.60054 9.91975C1.7072 9.02041 1.01987 7.92641 0.593202 6.72041C-0.160131 4.36041 0.726535 1.66041 3.21387 0.846413C3.4072 0.779746 3.60654 0.73308 3.80654 0.70708H3.88654C4.07387 0.679746 4.25987 0.666973 4.44654 0.666973H4.51987ZM10.4599 2.77375C10.1865 2.67975 9.88654 2.82708 9.78654 3.10708C9.6932 3.38708 9.83987 3.69375 10.1199 3.79308C10.5472 3.95308 10.8332 4.37375 10.8332 4.83975V4.86041C10.8205 5.01308 10.8665 5.16041 10.9599 5.27375C11.0532 5.38708 11.1932 5.45308 11.3399 5.46708C11.6132 5.45975 11.8465 5.24041 11.8665 4.95975V4.88041C11.8865 3.94641 11.3205 3.10041 10.4599 2.77375Z"
                  fill="#E5524A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        {list.map((li, index) => (
          <div
            key={index}
            className="bg-[#25292C] flex justify-between items-center py-8 px-2 rounded-xl w-full h-14"
          >
            <div className="flex gap-2 lg:gap-60 items-center">
              <div className="flex items-center gap-8">
                <img width="50rem" src = {li.cover} />
                <svg
                  className="hidden lg:flex"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.43496 10.3718C1.54079 7.58016 2.58662 4.10933 5.51746 3.16599C7.05912 2.66849 8.96162 3.08349 10.0425 4.57433C11.0616 3.02849 13.0191 2.67183 14.5591 3.16599C17.4891 4.10933 18.5408 7.58016 17.6475 10.3718C16.2558 14.7968 11.4 17.1018 10.0425 17.1018C8.68579 17.1018 3.87329 14.8485 2.43496 10.3718Z"
                    stroke="#EFEEE0"
                    stroke-width="0.625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.1572 6.30328C14.163 6.40662 14.7922 7.20412 14.7547 8.32162"
                    stroke="#EFEEE0"
                    stroke-width="0.625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="lg:flex lg:justify-between lg:w-96">
                <h3>{li.title}</h3>
                <p>{li.title}</p>
              </div>
            </div>
            <div className="lg:flex gap-52 items-center text-right">
              <svg
                className="order-1 lg:order-2"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25789 7.58341C7.58006 7.58341 7.84123 7.32225 7.84123 7.00008C7.84123 6.67792 7.58006 6.41675 7.25789 6.41675C6.93573 6.41675 6.67456 6.67792 6.67456 7.00008C6.67456 7.32225 6.93573 7.58341 7.25789 7.58341Z"
                  stroke="#FACD66"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.25789 3.49992C7.58006 3.49992 7.84123 3.23875 7.84123 2.91659C7.84123 2.59442 7.58006 2.33325 7.25789 2.33325C6.93573 2.33325 6.67456 2.59442 6.67456 2.91659C6.67456 3.23875 6.93573 3.49992 7.25789 3.49992Z"
                  stroke="#FACD66"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.25789 11.6667C7.58006 11.6667 7.84123 11.4055 7.84123 11.0833C7.84123 10.7612 7.58006 10.5 7.25789 10.5C6.93573 10.5 6.67456 10.7612 6.67456 11.0833C6.67456 11.4055 6.93573 11.6667 7.25789 11.6667Z"
                  stroke="#FACD66"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="order-2 lg:order-1 text-right">{li.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumScreen;
