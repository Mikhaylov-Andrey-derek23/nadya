
function Card(data){
    return(
        <div className="card bg-info bg-gradient text-light py-1 my-3">
            <h5 className="card-header text-center">{data.data.title}</h5>
            <div className="card-body">
                <audio src={'/audi/'+data.data.src+'.MP3'} controls style={{width : 100+"%"}}></audio>
            </div>
        </div>
    )
}

export default Card;