import React from 'react'

class DestinationCard extends React.Component {

    render() {
        // console.log("DestinationCard: this.props => ", this.props)
        return (
            <div className="ui text container">
                <div className="ui very relaxed unstackable items">
                    <div className="item">

                        <div className="ui small circular image">
                            <img src={this.props.photo_url} alt="" />
                        </div>

                        <div className="content">
                            <p className="header">{this.props.destination.city}, {this.props.destination.country}</p>
                            <div className="meta">
                                <span><strong>{this.props.users_visited.length}</strong> visited</span>
                            </div>
                            {/* <div className="description">
                                <p></p>
                            </div>
                            <div className="extra">
                                <p></p>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default DestinationCard