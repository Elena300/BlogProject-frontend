import { Form } from 'react-router-dom'

export default function NewPostPage() {
    return (
      <Form className="NewPostForm">
        <fieldset>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" required minLength={5} />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Post Text</label>
          <textarea
            id="text"
            name="post-text"
            required
            minLength={10}
            rows={5}
          ></textarea>
        </fieldset>
        <button type="button">Submit</button>
        <button type="button">Cancel</button>
      </Form>
    );
}

//Add button disabling and update of home element on submisson

  


