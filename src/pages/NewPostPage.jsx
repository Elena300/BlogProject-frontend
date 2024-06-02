import { Form } from 'react-router-dom'

export default function NewPostPage() {
    return (
      <Form className="NewPostForm" method="post">
        <label>
          <span>Post title</span>
          <input name="title" type="text" required placeholder="Title" />
        </label>

        <label>
          <span>Post description</span>
          <input
            name="description"
            type="text"
            required
            placeholder="short description"
          />
        </label>

        <label>
          <span>Content</span>
          <input
            name="description"
            type="text"
            required
            placeholder="post your contect here"
          />
        </label>

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        
        <button type="button">Submit</button>
        <button type="button">Cancel</button>
      </Form>
    );
}

//Add button disabling and update of home element on submisson

  


