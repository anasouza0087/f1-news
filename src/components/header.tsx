import React from 'react'

const Header = () => {
    return (
        <>
            <header
                style={{
                    backgroundColor: '#E10600',
                    color: '#fff',
                    height: '10vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: 0
                }}
            >
                <ul
                    style={{
                        listStyle: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <li>
                        <img src='./images/f1_logo.svg' />
                    </li>
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '70%',
                        }}>
                        <li>Calendário</li>
                        <li>Equipes</li>
                        <li>Pilotos</li>
                        <li>Ranking</li>
                        <li>Pistas</li>
                    </span>
                </ul>
            </header>
        </>
    )
}

export default Header