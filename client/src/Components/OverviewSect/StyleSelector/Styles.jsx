import React from 'react';
import styles from './Thumbnails.css';

class Styles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        // console.log(e.target.alt);
        this.props.changeStyle(e.target.alt);
        // this.props.reset();
    }

    render() {
        return (
            <div>
                <img src={this.props.photos[0].thumbnail_url} alt={this.props.name} onClick={this.handleClick} className={styles.thumbnail} />
            </div>
        )
    }
}

export default Styles;