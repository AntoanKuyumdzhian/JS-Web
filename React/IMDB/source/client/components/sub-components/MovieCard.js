import React from 'react';
import {Link} from 'react-router';

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moviescore: this.props.score,
            movieVotes: this.props.votes
        };
    }

    render() {
        return(
            <div className='animated fadeIn'>
                <div className='media movie'>
                    <span className='position pull-left'>{this.props.index + 1}</span>
                    <div className='media-body'>
                        <h4 className='media-heading'>
                            <Link to={`/movie/${this.props.movie._id}/${this.props.movie.name}`}>
                                {this.props.movie.name}
                            </Link>
                        </h4>
                        <small>Genres: {this.props.movie.genres}</small>
                        <br/>
                        <p>{this.props.movie.description}</p>
                        <span className='votes'>Votes:
                            {/*<strong> {this.state.movieVotes}</strong*/}
                        </span>
                        {/*{nodes.rating}*/}
                    </div>
                    {/*{nodes.panelToggles}*/}
                </div>
                {/*{nodes.votePanel}*/}
                {/*{nodes.commentPanel}*/}
                <div id='clear'></div>
            </div>
        );
    }
}