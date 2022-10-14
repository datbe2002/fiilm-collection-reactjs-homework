import React from 'react'
import { useContext } from 'react'
import { Card, Col, Row, Tab, Tabs } from 'react-materialize'
import { ThemeContext } from './ThemeContext'
import { upcomingFilm } from "../Share/ListOfNewFilms"


export default function News() {
    const { theme } = useContext(ThemeContext)

    return (
        <div>

            <Tabs
                className="tab-demo z-depth-1"
                options={{
                    swipeable: true
                }}
                scope="tabs-35"
                style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}

            >
                {upcomingFilm.map((nfilm) => (

                    <Tab
                        style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}

                        options={{
                            duration: 300,
                            onShow: null,
                            responsiveThreshold: Infinity,
                            swipeable: false
                        }}
                        title={nfilm.title}
                    >
                        <Card style={{ backgroundColor: theme.backgroundColor, color: theme.color, zIndex: "1000" }}>
                            <Row className='component'>
                                <Col

                                >
                                    <Col s={3}>
                                        <img src={nfilm.imageUri}></img>

                                    </Col>
                                    <Col s={9}>
                                        <h3 style={{ fontWeight: "bold", fontFamily: "Arial" }}>{nfilm.name}</h3>
                                        <h5>
                                            {nfilm.des}
                                        </h5>
                                    </Col>
                                </Col>


                            </Row>
                        </Card>
                    </Tab>
                ))}

                {/* <Tab
                    active
                    className="red"
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Test 2"
                >
                    Test 2
                </Tab>
                <Tab
                    className="green"
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="Test 3"
                >
                    Test 3
                </Tab> */}
            </Tabs>

        </div>
    )
}
