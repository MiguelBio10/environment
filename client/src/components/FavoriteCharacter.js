import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; // Import connect
import { getItems, deleteItem } from '../actions/animesActions';
import PropTypes from 'prop-types';

class FavoriteCharacter extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        console.log(id); // Check if the correct ID is received
        this.props.deleteItem(id);
    }

    render() {
        const { characters } = this.props.animes;

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="favorite-characters">
                        {characters && characters.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.onDeleteClick(_id)}
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
    deleteItem: PropTypes.func.isRequired, // Make sure deleteItem is also included in propTypes
    animes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    animes: state.animes
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(FavoriteCharacter);
