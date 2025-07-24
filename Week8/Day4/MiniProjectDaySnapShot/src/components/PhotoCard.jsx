const PhotoCard = ({ photo }) => {
    return (
        <div className="photo-card">
            <img src={photo.src.medium} alt={photo.alt || "Photo"} loading="lazy" />
            <div className="photographer">{photo.photographer}</div>
        </div>
    )
}

export default PhotoCard