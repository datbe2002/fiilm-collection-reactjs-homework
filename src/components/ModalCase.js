import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function ModalCase({ setIsOpen, film }) {
    const { theme } = useContext(ThemeContext)
    // style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '50%' }}>
                <div className="modal-content" >
                    <h4 style={{ color: "black" }}>Video for {film.Title} </h4>
                    <p><iframe src={film.Clip} width="100%" height="400px" title={film.Title} frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close red text close">Close</a>
                </div>
            </div>
        </div>
    )
}