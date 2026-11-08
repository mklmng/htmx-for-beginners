import ALBUMS_DATA from "../data/data.js";
import createAlbumTemplate from "./album.js";

const createListTemplate = () => `
<ul>
    ${ALBUMS_DATA.map((album) => createAlbumTemplate(album)).join('')}
</ul>
`;

export default createListTemplate;