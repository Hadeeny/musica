import axios from "axios";

// Get all music file
const allMusic = async () => {
  const { data } = await axios.get("https://musica-api.up.railway.app/new");
  return data;
};

const musicAuth = {
  allMusic,
};

export default musicAuth;
