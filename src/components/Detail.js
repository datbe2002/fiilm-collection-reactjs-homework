import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DFilm } from "../Share/ListOfFilms";
import { Card, Container, Icon } from 'react-materialize'
import { useState } from 'react'
import ModalCase from './ModalCase';
import { ThemeContext } from './ThemeContext';
export default function Detail() {


    const { theme } = useContext(ThemeContext)
    // style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}
    const filmName = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const film = DFilm.find(obj => {
        return obj.id == filmName.id;
    });
    return (
        <div className='Details'>
            <Container >
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                <Card style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <Card style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                        <img src={`../${film.Image}`} alt='' />
                        <div style={{ fontSize: "2.5rem" }}>{film.Title}</div>
                        <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                            <Icon >ondemand_video</Icon>
                        </a>
                    </Card>

                    <Card className='card-panel teal lighten-2'>
                        <p style={{ fontSize: "1.5rem" }}>{film.Info}</p>
                        <p style={{ fontSize: "1.5rem" }}>Nation :{film.Nation}</p>
                        <p style={{ fontSize: "1.5rem" }}>Year :{film.Year}</p>
                    </Card>
                </Card>
            </Container>
        </div>
    )

}