import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/animesActions';
import PropTypes from 'prop-types';

class FavoriteCharacter extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { characters } = this.props.animes;

        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Character');
                        if (name) {
                            // Dispatch action to add character here
                        }
                    }}
                >
                    Add Character
                </Button>
                <ListGroup>
                    <TransitionGroup className="favorite-characters">
                        {characters && characters.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            // Dispatch action to delete character here
                                        }}
                                    >
                                        x
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

FavoriteCharacter.propTypes = {
    getItems: PropTypes.func.isRequired,
    animes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    console.log(state.animes); // Log the state to check if it contains the characters array
    return {
        animes: state.animes
    };
};


export default connect(mapStateToProps, { getItems })(FavoriteCharacter);
