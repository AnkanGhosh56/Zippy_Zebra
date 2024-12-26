import React from 'react'
import './TicketPage.css'
export default function TicketPage({ history }) {

    const handleSignOut = e => {
        e.preventDefault()
        sessionStorage.removeItem('authToken')
        localStorage.removeItem('reservedSeats')
        localStorage.removeItem('nameData')
        localStorage.clear()
        history.push('/')
    }
    const handleBookAgainIcon = e => {
        e.preventDefault()
        history.push('/routes')
    }
    const getLocationData = () => {
        let from = localStorage.getItem("start")
        let to = localStorage.getItem("destination")
        return (
            <div>
                <p>From:  {from}</p>
                <p>To:  {to}</p>
            </div>
        )
    }
    const getPassengerName = () => {
        let nameArray = localStorage.getItem("nameData")
        let names = JSON.parse(nameArray)
        return names.map((name, idx) => {
            return (
                <div key={idx}>
                    <p className="names">{name}</p>
                </div>
            )
        })
    }
    const getSeatNumbers = () => {
        let noArray = localStorage.getItem("reservedSeats")
        let arr = JSON.parse(noArray)
        return arr.map((element, idx) => {
            return (
                <div key={idx}>
                    <p classsName="seatNo">{element}</p>
                </div>
            )
        })
    }
    const getIdNumber = () => {
        let tokenData = localStorage.getItem("selectedBusId")
        return (
            <p className="idData">
                {tokenData}
            </p>
        )
    }
    const getDateValue = () => {
        let dat = localStorage.getItem("date")
        return <p>On: {dat}, 10 AM (Hourly commute)</p>
    }
    return (

        <div className="container">
            <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
                    <a href="/#" className="navbar-brand Company-Log">Zippy_Zebra</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-3" aria-controls="navbarSupportedContent-3" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-3">
                        <ul className="navbar-nav ml-auto nav-flex-icons ic">
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleBookAgainIcon(e)}>Book Again &nbsp;<i class="fa fa-book" aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link waves-effect waves-light" onClick={e => handleSignOut(e)}>Sign-Out &nbsp;<i class="fa fa-sign-in" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="tpMain">
                <article className="ticket">
                    <header className="ticket__wrapper">
                        <div className="ticket__header">
                        Zippy_Zebra &nbsp;<i class="fa fa-ticket" aria-hidden="true"></i>&nbsp; Tickets    
                        </div>
                    </header>
                    <div className="ticket__divider">
                        <div className="ticket__notch"></div>
                        <div className="ticket__notch ticket__notch--right"></div>
                    </div>
                    <div className="ticket__body">
                        <section className="ticket__section">
                            {getLocationData()}
                            {getSeatNumbers()}
                            <p>Your seats are together <i class="fa fa-wheelchair-alt" aria-hidden="true"></i><span>{getDateValue()}</span></p>
                        </section>
                        <section className="ticket__section">
                            <h3>Passenger Names &nbsp;<i class="fa fa-users" aria-hidden="true"></i></h3>
                            {getPassengerName()}
                        </section>
                        <section className="ticket__section">
                            <h3>Payment Method &nbsp;<i class="fa fa-paypal" aria-hidden="true"></i></h3>
                            <p>Credit Card</p>
                        </section>
                    </div>
                    <footer className="ticket__footer">
                        <p>Transaction-ID <i class="fa fa-id-badge" aria-hidden="true"></i></p>
                        {getIdNumber()}
                    </footer>
                </article>
            </div>

        </div>

    )
}
