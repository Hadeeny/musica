import NewRelease from '../components/NewRelease'
import {useSelector} from 'react-redux'
const CollectionScreen = () => {

    const playlist = useSelector(state => state.playlist)
    const allMusic = useSelector(state => state.allMusic)
  
    const {myCollection} = allMusic

  const {myPlaylist, error, message:errorMessage, loading:loadingMusic} = playlist
  
    return (
        <div className='mt-[5rem] ml-16'>
            <div className='flex gap-2'>
                <div className='py-2 px-4 cursor-pointer active:bg-yellow hover:bg-yellow hover:text-darkGray rounded-3xl border-[1.2px] border-[#eee]' href="">My Collection</div>
                <div className='py-2 px-4 cursor-pointer rounded-3xl border-[1.2px] active:bg-yellow hover:text-darkGray hover:bg-yellow border-[#eee]' href="">Likes</div>
            </div>
            <NewRelease error= {error} myPlaylist={myCollection} erroMessage={errorMessage} loadingMusic = {loadingMusic} />
        </div>
    )
}

export default CollectionScreen
