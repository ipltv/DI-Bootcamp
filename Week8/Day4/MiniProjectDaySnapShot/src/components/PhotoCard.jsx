const PhotoCard = ({ photo }) => {
    return (
        <div className="photo-card">
            <img src={photo.src.small} alt={photo.alt || "Photo"} loading="lazy" />
            <p>{photo.photographer}</p>
        </div>
    )
}

export default PhotoCard