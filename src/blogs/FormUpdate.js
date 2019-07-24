import React, { Component } from "react";
import _ from "lodash";

import { connect } from "react-redux";
import * as actions from "./store/action";
import { Button, Form, FormInput, Container } from "react-bootstrap";

class FormUpdate extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    imageUrl: "",
    isTitleFieldTouched: false,
    isDescriptionFieldTouched: false,
    isImageUrlFieldTouched: false,
    globalError: null
  };

  onInputChange = event => {
    let { name, value } = event.target;
    let isFieldName = `is${name.charAt(0).toUpperCase() +
      name.slice(1)}FieldTouched`;

    this.setState({ [name]: value, [isFieldName]: true });
  };

  verifyTitleInput = () => {
    const { title } = this.state;
    return title != "" && title.length >= 3;
  };
  verifyDescriptionInput = () => {
    const { description } = this.state;
    return description != "" && description.length >= 5;
  };
  verifyImageUrlInput = () => {
    const { imageUrl } = this.state;
    return imageUrl != "";
  };

  verifyFormInputs = () => {
    return (
      this.verifyDescriptionInput() &&
      this.verifyImageUrlInput() &&
      this.verifyTitleInput()
    );
  };
  onCancel = () => {
    this.props.history.push("/blogs");
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.verifyFormInputs()) {
      this.props.onUpdateBlog(
        this.state.id,
        this.state.title,
        this.state.description,
        this.state.imageUrl
      );

      this.props.history.push("/blogs");
    }
    this.setState({
      globalError: "failed verify your inputs values",
      isDescriptionFieldTouched: true,
      isImageUrlFieldTouched: true,
      isTitleFieldTouched: true
    });
  };
  componentDidMount() {
    const { currentBlog } = this.props;
    this.setState({ ...currentBlog });
  }

  render() {
    const {
      globalError,
      isDescriptionFieldTouched,
      isTitleFieldTouched,
      isImageUrlFieldTouched,
      description,
      title,
      imageUrl
    } = this.state;

    return (
      <Container style={{ minHeight: "70vh" }}>
        <h1 className="display-4">Update blog</h1>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formGroupTitle">
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter title"
              name="title"
              value={title}
              onChange={this.onInputChange}
              isValid={isTitleFieldTouched && this.verifyTitleInput()}
              isInvalid={isTitleFieldTouched && !this.verifyTitleInput()}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              title is required, minimum length 3
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGroupDescription">
            <Form.Label>Description :</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="enter description"
              name="description"
              value={description}
              onChange={this.onInputChange}
              isValid={
                isDescriptionFieldTouched && this.verifyDescriptionInput()
              }
              isInvalid={
                isDescriptionFieldTouched && !this.verifyDescriptionInput()
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              description is required, minimum length 5
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formGroupImageUrl">
            <Form.Label>Description :</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter image url"
              name="imageUrl"
              value={imageUrl}
              onChange={this.onInputChange}
              isValid={isImageUrlFieldTouched && this.verifyImageUrlInput()}
              isInvalid={isImageUrlFieldTouched && !this.verifyImageUrlInput()}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              imageUrl is required
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            update
          </Button>
          <Button variant="primary" className="ml-2" onClick={this.onCancel}>
            cancel
          </Button>
          {globalError && (
            <div className="small mt-2" style={{ color: "red" }}>
              {globalError}
            </div>
          )}
        </Form>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onUpdateBlog: (id, title, description, imageUrl) => {
      dispatch(actions.update({ id, title, description, imageUrl }));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentBlog: _.cloneDeep(
      state.blogs.list.find(blog => blog.id == ownProps.match.params.id)
    )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUpdate);
