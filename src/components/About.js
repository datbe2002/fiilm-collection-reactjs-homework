import React, { useContext } from 'react'
import { Container, Icon, Card, Collapsible, CollapsibleItem } from 'react-materialize'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
export default function About() {

    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <Container className='wrapper'>
                <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}>
                    <Card
                        style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}
                    >
                        <Collapsible
                            accordion
                            popout
                        >
                            <CollapsibleItem
                                expanded={false}
                                header="Chi nhánh"
                                icon={<Icon>people</Icon>}
                                node="div"
                                style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000", color: "#FABD72" }}
                            >
                                Address: 208 Đường Nguyễn Hữu Cảnh, Ho Chi Minh City<br></br>
                                Phone: 0999999999
                            </CollapsibleItem>
                            <CollapsibleItem
                                expanded={false}
                                header="Email address"
                                icon={<Icon>inbox</Icon>}
                                node="div"
                                style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000", color: "#FABD72" }}

                            >
                                -- datttse161294@fpt.edu.vn <br></br>
                                -- truongtandat1409@gmail.com <br></br>

                            </CollapsibleItem>
                            <CollapsibleItem
                                expanded={false}
                                header="More detail"
                                icon={<Icon>help</Icon>}
                                node="div"
                                style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000", color: "#FABD72" }}

                            >
                                Any complain about the service you can contact us through the contact form <Link to={"/contact"} style={{ color: "red" }}> click me</Link>
                            </CollapsibleItem>
                        </Collapsible>
                    </Card>
                </div>
            </Container>


        </div>
    )

}