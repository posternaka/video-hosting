import React from 'react'

function Flex({data}) {
    return (
    <>
        {
            data &&
                data.map(item => (
                    <div key={item.id} className="require__show flex">
                        <img src={item.url} />
                        <div className="require_text">
                        <p className='video_name'>{item.title}</p>
                        <p className='chanel_name'>{item.chanel_title}</p>
                        <p className='count_views'>{item.views}тыс. просмотров</p>
                        </div>
                    </div>
                ))
        }
    </>
    )
}

export default Flex;