const createAlbumTemplate = (album) => `
    <li data-id="${album.id}">
        <div class="details">
            <h3>${album.title}</h3>
            <p>${album.artist}<p>
        </div>
        <button>Delete</button>
    </li>
`
export default createAlbumTemplate;