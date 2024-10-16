import {MasonryPhotoAlbum} from "react-photo-album";
import "react-photo-album/masonry.css";
import photos from "../photos.json"
import "../App.css"
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Gallery() {

    let foldersCat = new Set<String>()
    const [index, setIndex] = useState(-1);
    const [selectedFolder, setSelectedFolder] = useState(String);
    const updateSelectedFolder = (event: any) => {
        console.log(event.target.value);
        debugger
        setSelectedFolder(event.target.value);
    }

    photos.forEach(photo => {
        foldersCat.add(photo.folder);
    })
    let folders = Array.from(foldersCat.values())


    let photosFiltered = photos.filter(photo => {
        return photo.folder.toLowerCase() === selectedFolder.toLowerCase();
    })


    useEffect(() => {
        let first = selectedFolder
        if (!selectedFolder) {

            first = folders[0] as string
        }
        setSelectedFolder(first)

    }, [selectedFolder])

    return (
        <Container>


            <Row className="p-2 timeline">
                {
                    folders.map((folder, index) => {

                        return <Col className="flex justify-content-center align-items-center"><Button
                            value={"" + folder} onClick={updateSelectedFolder}>{folder}</Button>
                        <div className="vert">&nbsp;
                            <div className="open-circle"></div>
                        </div>
                        </Col>
                    })
                }
                <hr></hr>
            </Row>
            <Row xs={2} sm={2} md={2}>
                <Col>
                    <div className="m-2">

                        <Form.Select aria-label="Default select example" onChange={updateSelectedFolder}>
                            {
                                folders.map((folder, index) => {
                                    return <option value={"" + folder}>{folder}</option>
                                })
                            }
                        </Form.Select>
                    </div>
                </Col>
            </Row>
            <MasonryPhotoAlbum photos={photosFiltered} onClick={({index}) => setIndex(index)}/>

            <Lightbox
                slides={photosFiltered}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </Container>
    )
}

export default Gallery;