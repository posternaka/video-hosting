import React from 'react';

function Grid({data}) {
    return (
    <div className="wrapper_grid">
        {
            data &&
                data.map(item => (
                    
                    <div key={item.id} className="require__show grid">
                        <img src={item.url} />
                        <div className="require_text">
                        <p className='video_name'>{item.title}</p>
                        <p className='chanel_name'>{item.chanel_title}</p>
                        <p className='count_views'>{item.views}тыс. просмотров</p>
                        </div>
                    </div>
                    
                ))
        }
    </div>
    )
}

export default Grid;