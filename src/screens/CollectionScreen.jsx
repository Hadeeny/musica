import NewRelease from '../components/NewRelease'
const CollectionScreen = () => {
    return (
        <div className='mt-[5rem] ml-16'>
            <div className='flex gap-2'>
                <div className='py-2 px-4 cursor-pointer active:bg-yellow hover:bg-yellow hover:text-darkGray rounded-3xl border-[1.2px] border-[#eee]' href="">My Collection</div>
                <div className='py-2 px-4 cursor-pointer rounded-3xl border-[1.2px] active:bg-yellow hover:text-darkGray hover:bg-yellow border-[#eee]' href="">Likes</div>
            </div>
            < NewRelease/>
        </div>
    )
}

export default CollectionScreen
