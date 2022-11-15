import React from 'react'

const Footer = () => {
    return (
        <>
            <footer
                style={{
                    backgroundColor: '#E10600',
                    color: '#fff',
                    height: '10vh',
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'fixed',
                    left: 0,
                    bottom: 0
                }}
            >
                <span
                    style={{
                        marginLeft: 20
                    }}>
                    &copy; F1 News
                </span>
            </footer>
        </>
    )
}

export default Footer