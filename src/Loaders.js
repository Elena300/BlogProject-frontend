import Cookies from 'js-cookie';

const getPostData = async () => {
  try {
    const response = await fetch(
      "https://goblogpost-867025111c75.herokuapp.com/api/blog/all"
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    } else {
      console.log(data);
      return data;
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

const getPost = async (id) => {
  try {
    const response = await fetch(
      `https://goblogpost-867025111c75.herokuapp.com/api/blog/${id}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    } else {
      console.log(data);
      return data;
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};


export async function postLoader({ params }) {
  const postContent = await getPost(params.postId);
  return postContent;
}

export async function postDataLoader() {
  const postData = await getPostData();
  return postData; 
}


