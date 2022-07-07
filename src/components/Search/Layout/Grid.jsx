
function Grid({data}) {
    return (
    <div className="wrapper_grid">
        {
            data.items.map(item => (
                    
                    <div key={item.etag} className="require__show grid">
                        <img src={item.snippet.thumbnails.medium.url} />
                        <div className="require_text">
                        <p className='video_name'>{item.snippet.title}</p>
                        <p className='chanel_name'>{item.snippet.channelTitle}</p>
                        <p className='count_views'>435тыс. просмотров</p>
                        </div>
                    </div>
                    
                ))
        }
    </div>
    )
}

export default Grid;