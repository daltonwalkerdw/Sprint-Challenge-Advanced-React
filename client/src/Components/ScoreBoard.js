import React from "react"

import axios from "axios"

class ScoreBoard extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
            .then(result => {
                console.log(result)
                this.setState({
                    data: result.data
                })
            })
            .catch(err => {
                console.log(err)

            })
    }


    render() {
        return (
            <div>
                {this.state.data.map(players => {
                    return (
                        <div className="players">
                            <p>{players.name}</p>
                            <p>{players.country}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default ScoreBoard
