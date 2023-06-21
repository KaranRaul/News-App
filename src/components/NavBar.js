import React, { Component } from 'react'

export default class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            serachItem: '',
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
                    <div className="container-fluid ">
                        <h1>Navbar</h1>

                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                        </div>
                        <form class="form-inline d-flex" >
                            <input class="form-control mr-sm-2" onChange={(e) => { this.setState({ serachItem: e.target.value }) }} type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0 " type="button" onClick={this.props.categoryTo(this.state.serachItem)}
                            >Serach </button>
                        </form>
                    </div>
                </nav >
            </div >

        )
    }
}
