import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid'; // Importing v4 function from uuid package

class FavoriteCharacter extends Component {
    state = {
        
        characters: [

            { id: uuidv4(), name: 'Naruto' },
            { id: uuidv4(), name: 'Luffy' },
            { id: uuidv4(), name: 'Saitama'},
            { id: uuidv4(), name: 'Ichigo'}
        ]
    };

    render() {
        const { characters } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter Character');
                        if (name) {
                            this.setState(state => ({
                                characters: [...state.characters, { id: uuidv4(), name }]
                            }));
                        }
                    }}
                >
                    Add Character
                </Button>
                <ListGroup>
                    <TransitionGroup className="favorite-characters">
                        {characters.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state =>({
                                            characters: state.characters.filter(character =>character.id !==id)

                                        }));
                                    }}>
                                        x</Button>

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

export default FavoriteCharacter;
