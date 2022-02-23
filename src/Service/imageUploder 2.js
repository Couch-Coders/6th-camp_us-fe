import axios from 'axios';

export async function imageUploader(file) {
  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', 'oxdsrfek');
  const response = await axios(
    'https://api.cloudinary.com/v1_1/divncmfka/image/upload',
    {
      method: 'POST',
      data: form,
    },
  );
  return response;
}
