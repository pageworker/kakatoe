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


            <Row className="p-2 ">

                <div className="timeline-wrapper">
                    {folders.map((folder, index) => {
                        return (

                            <div className="timeline-item">
                                <Button
                                    value={"" + folder} onClick={updateSelectedFolder}>{folder}</Button>

                                <div className="vert">
                                    <div className="open-circle"></div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="timeline-line"></div>


                    {/*{*/}
                    {/*    folders.map((folder, index) => {*/}

                    {/*        return <Col>*/}
                    {/*            <Button*/}
                    {/*                value={"" + folder} onClick={updateSelectedFolder}>{folder}</Button>*/}
                    {/*            <div className="vert">&nbsp;*/}
                    {/*                <div className="open-circle"></div>*/}
                    {/*            </div>*/}
                    {/*        </Col>*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*    <hr></hr>*/}
                    {/*</div>*/}
                </div>
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