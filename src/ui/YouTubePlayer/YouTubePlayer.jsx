export const YouTubePlayer = ( { url, title, width = '416', height = '234', controls = '0', className = '', style = {} } ) => {
  const extractVideoId = ( url ) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = url.match( regex )
    return match ? match[1] : null
  }

  const videoId = extractVideoId( url )

  if ( !videoId ) {
    return null
  }

  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}?controls=${controls}`}
      title={title || 'YouTube Video'}
      allowFullScreen
      className={className}
      style={{ maxWidth: '100%', borderRadius: '8px', ...style }}
    />
  )
}