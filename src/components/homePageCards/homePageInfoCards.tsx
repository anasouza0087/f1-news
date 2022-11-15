import React from 'react'

import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material'

const HomePageInfoCards = () => {

    const cardInformation = [
        { title: 'Últimas Notícias', backgroundImage: '' },
        { title: 'Campeonato', backgroundImage: '' },
        { title: 'Próxima Corrida', backgroundImage: '' },
        { title: 'Estatísticas', backgroundImage: '' },
        { title: 'F1 ao longo dos anos', backgroundImage: '' },
    ]

    return (
        <div
            style={{
                marginTop: 60,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}
        >
            <Grid
                container
                spacing={4}
                xs={10}
            >
                {cardInformation?.map(cardInfo => {
                    return (
                        <Grid item xs={4}>
                            <Card
                                style={{
                                    height: '22vh',
                                    width: '26vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                    border: '2px solid #E10600',
                                    borderRadius: 16
                                }}>
                                <CardMedia />
                                <CardContent>
                                    <span>{cardInfo?.title}</span>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid >
        </div>
    )
}

export default HomePageInfoCards