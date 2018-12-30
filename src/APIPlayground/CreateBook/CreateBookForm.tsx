import React, { Component } from "react";

class CreateBookForm extends Component<any, any> {

  render() {
    const {
      toggleModal,
      onSubmit,
      onChangeAuthor,
      onChangeTitle,
      onChangePublishYear,
      author,
      title,
      publish_year
    } = this.props;
    
    const closeBtn = toggleModal ? (
      <button onClick={toggleModal}>Close</button>
    ) : null;

    return (
      <form onSubmit={onSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={onChangeTitle} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={onChangeAuthor} />
        </label>
        <label>
          Publish year:
          <input
            type="number"
            value={publish_year}
            onChange={onChangePublishYear}
          />
        </label>
        <section className="form-buttons">
          <button type="submit">Submit</button>
          {closeBtn}
        </section>
      </form>
    );
  }
}

export default CreateBookForm;
