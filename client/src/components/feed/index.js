

function Feed ({feedImages}){
    console.log(feedImages);
    return (
        <div>
            {feedImages.slice(0).reverse().map((image, index) =>
                <div key = {index}>
                    <img style ={{height : "100px"}} src={image.photoUrl} alt={image.createdAt}/>
                </div >
            )}
        </div>
    )
}

export default Feed;

//{feedImages.slice(0).reverse().map(image)}