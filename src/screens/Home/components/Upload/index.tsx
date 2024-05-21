import { useState } from 'react';
import * as Styled from './styles';
import axios from 'axios';

export function UploadView() {
  const [hasFile, setHasFile] = useState(false);
  const [file, setFile] = useState<any>();
  const token = localStorage.getItem('user');

  function handleChange(event: any) {
    setFile(event.target.files[0])
    setHasFile(true);
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    const url = 'http://localhost:3000/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'authorization': `Bearer ${JSON.parse(token).token}`
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
    window.location.reload();
  }

  return (
    <Styled.Container>
      <Styled.Title>Importar arquivo</Styled.Title>
      <Styled.FormInput onSubmit={handleSubmit}>
        <Styled.InputButton accept=".json" type='file' onChange={handleChange} />
        <Styled.ButtonSend hasFile={hasFile} type="submit">Upload</Styled.ButtonSend>
      </Styled.FormInput>
    </Styled.Container>
  )
}