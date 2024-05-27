let image;
let submit_btn = document.getElementById('submit_btn');
submit_btn.disabled = true;

async function addPost() {
  //accept values

  let id = document.getElementById('id').value;

  let title = document.getElementById('title').value;

  let send_this_data = {
    id,
    title,
    image,
  };

  let res = await fetch(`http://localhost:3000/posts`, {
    method: 'POST',

    body: JSON.stringify(send_this_data),

    headers: {
      'Content-Type': 'application/json',
    },

    //   payload:
    // //   package:
    //   shipment:
  });

  let data = await res.json();
  console.log('data:', data);
}

async function deletePost() {
  let id = document.getElementById('delete_id').value;

  let res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE',

    headers: {
      'Content-Type': 'application/json',
    },
  });

  let data = await res.json();
  console.log('data:', data);
}

async function updatePost() {
  let id = document.getElementById('update_id').value;

  let title = document.getElementById('update_title').value;

  let send_data = {
    title,
  };

  let res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PATCH',

    body: JSON.stringify(send_data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let data = await res.json();
  console.log('data:', data);
}

async function replacePost() {
  let id = document.getElementById('replace_id').value;

  let title = document.getElementById('replace_title').value;

  let send_data = {
    title,
  };

  let res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',

    body: JSON.stringify(send_data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  let data = await res.json();
  console.log('data:', data);
}

const handleImage = async (event) => {
  var file = document.getElementById('image');
  var form = new FormData();
  form.append('image', file.files[0]);

  let res = await fetch('https://api.imgbb.com/1/upload?key=1fcee6d5bb2290c06e96305785728322', {
    method: 'POST',
    body: form,
  });
  let data = await res.json();
  console.log('data:', data);
  image = data.data.display_url;
  submit_btn.disabled = false;
};
