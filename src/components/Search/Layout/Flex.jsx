
function Flex({data}) {
    console.log(data, 'flex');
    return (
        <>
            { data && 
                data.items.map(item => 
                            <div key={item.etag} className="require__show flex">
                                <img src={item.snippet.thumbnails.medium.url} />
                                <div className="require_text">
                                <p className='video_name'>{item.snippet.title}</p>
                                <p className='chanel_name'>{item.snippet.channelTitle}</p>
                                <p className='count_views'>838тыс. просмотров</p>
                                </div>
                            </div>
                        )
            }
        </>
    )
}

export default Flex;