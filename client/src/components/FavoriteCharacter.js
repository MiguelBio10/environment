import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid'; // Importing v4 function from uuid package

class FavoriteCharacter extends Component {
    state = {
        characters: [
            { id: uuidv4(), name: 'Naruto' },
            { id: uuidv4(), name: 'Luffy' },
            { id: uuidv4(), name: 'Saitama'},
            { id: uuidv4(), name: 'Ichigo'}
        ],
        searchText: '', // State for search text
        editingCharacterId: null, // State to track which character is being edited
        editedCharacterName: '' // State to store edited character name
    };

    // Function to handle adding a new character
    handleAddCharacter = () => {
        const name = prompt('Enter Character');
        if (name) {
            this.setState(state => ({
                characters: [...state.characters, { id: uuidv4(), name }]
            }));
        }
    }

    // Function to handle removing a character
    handleRemoveCharacter = id => {
        this.setState(state => ({
            characters: state.characters.filter(character => character.id !== id)
        }));
    }

    // Function to handle starting edit of a character
    handleEditCharacter = (id, name) => {
        this.setState({
            editingCharacterId: id,
            editedCharacterName: name
        });
    }

    // Function to handle editing character name
    handleEditedCharacterNameChange = e => {
        this.setState({ editedCharacterName: e.target.value });
    }

    // Function to handle saving edited character name
    handleSaveEditedCharacterName = id => {
        const { editedCharacterName, characters } = this.state;
        const updatedCharacters = characters.map(character =>
            character.id === id ? { ...character, name: editedCharacterName } : character
        );
        this.setState({
            characters: updatedCharacters,
            editingCharacterId: null,
            editedCharacterName: ''
        });
    }

    // Function to handle search input change
    handleSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    render() {
        const { characters, searchText, editingCharacterId, editedCharacterName } = this.state;

        // Filter characters based on search text
        const filteredCharacters = characters.filter(character =>
            character.name.toLowerCase().includes(searchText.toLowerCase())
        );

        return (
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Button to add a new character */}
                <Button
                    color="dark"
                    style={{ marginBottom: '1rem', alignSelf: 'flex-start', backgroundColor: '#ff9800', borderColor: '#ff9800' }}
                    onClick={this.handleAddCharacter}
                >
                    Add Character
                </Button>

                {/* Search bar */}
                <Input
                    type="text"
                    placeholder="Search Characters..."
                    value={searchText}
                    onChange={this.handleSearchChange}
                    style={{ marginBottom: '1rem', width: '100%' }}
                />

                {/* List of characters */}
                <ListGroup style={{ width: '100%', justifyContent: 'flex-start' }}>
                    <TransitionGroup className="favorite-characters">
                        {filteredCharacters.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ flex: 1 }}>
                                        {editingCharacterId === id ? (
                                            <Input
                                                type="text"
                                                value={editedCharacterName}
                                                onChange={this.handleEditedCharacterNameChange}
                                            />
                                        ) : (
                                            <>
                                                {/* Character name */}
                                                {name}
                                            </>
                                        )}
                                    </div>

                                    {/* Button to remove a character */}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.handleRemoveCharacter(id)}
                                    >
                                        x
                                    </Button>

                                    {/* Edit button */}
                                    {!editingCharacterId ? (
                                        <Button
                                            className="edit-btn"
                                            color="info"
                                            size="sm"
                                            style={{ backgroundColor: '#cccccc', borderColor: '#cccccc' }}
                                            onClick={() => this.handleEditCharacter(id, name)}
                                        >
                                            Edit
                                        </Button>
                                    ) : (
                                        <Button
                                            className="save-btn"
                                            color="success"
                                            size="sm"
                                            style={{ backgroundColor: '#4caf50', borderColor: '#4caf50' }}
                                            onClick={() => this.handleSaveEditedCharacterName(id)}
                                        >
                                            Update
                                        </Button>
                                    )}

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
