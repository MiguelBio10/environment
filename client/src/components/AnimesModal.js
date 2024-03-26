import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from "react-redux";
import { addItem } from '../actions/animesActions';

class AnimesModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e =>{
        e.preventDefault();

        const newAnimes ={
            
            name: this.state.name
        }

        // add animes via AddItems action
        this.props.addItem(newAnimes);

        //close modal
        this.toggle();
    }
    
    render(){
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Animes</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
               
                >
                    <ModalHeader toggle={this.toggle}>Add to Favorite Character</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="animes">Animes</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="animes"
                                    placeholder="Add favorite animes"
                                    onChange={this.onChange}
                                
                                />
                                <Button color="dark"style={{marginTop: '2rem'}} block
                                >Add Animes</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    animes: state.animes
});

export default connect(mapStateToProps, {addItem})(AnimesModal);