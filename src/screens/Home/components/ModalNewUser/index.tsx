import { useState } from 'react';
import * as Styled from './styles';
import axios from 'axios';

export function ModalNewUser() {
  const [hasUser, setHasUser] = useState(false);
  const token = localStorage.getItem('user');

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [data_nasc, setData_nasc] = useState('');
  const [sexo, setSexo] = useState('');
  const [signo, setSigno] = useState('');
  const [mae, setMae] = useState('');
  const [pai, setPai] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone_fixo, setTelefone_fixo] = useState('');
  const [celular, setCelular] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [tipo_sanguineo, setTipo_sanguineo] = useState('');
  const [cor, setCor] = useState('');

  function handleSubmit(event: any) {

    const user = {
      nome,
      idade: Number(idade),
      cpf,
      rg,
      data_nasc,
      sexo,
      signo,
      mae,
      pai,
      email,
      senha,
      cep,
      endereco,
      numero: Number(numero),
      bairro,
      cidade,
      estado,
      telefone_fixo,
      celular,
      altura,
      peso: Number(peso),
      tipo_sanguineo,
      cor,
    }

    event.preventDefault()
    const url = 'http://localhost:3000/user';
    const config = {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${JSON.parse(token).token}`
      },
    };
    axios.post(url, user, config).then((response) => {
      console.log(response.data);
    });
    window.location.reload();
  }

  const handleCpfChange = (event) => {
    let cpfInput = event.target.value.replace(/\D/g, '');
    cpfInput = cpfInput.replace(/(\d{3})(\d)/, '$1.$2');
    cpfInput = cpfInput.replace(/(\d{3})(\d)/, '$1.$2');
    cpfInput = cpfInput.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(cpfInput);
  };

  const handleRgChange = (event) => {
    let rgInput = event.target.value.replace(/\D/g, '');
    rgInput = rgInput.replace(/^(\d{2})(\d)/, '$1.$2');
    rgInput = rgInput.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    rgInput = rgInput.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    setRg(rgInput);
  };

  const handleCepChange = (event) => {
    let cepInput = event.target.value.replace(/\D/g, '');
    cepInput = cepInput.replace(/^(\d{5})(\d)/, '$1-$2');
    setCep(cepInput);
  };

  const handleCelularChange = (event) => {
    let celularInput = event.target.value.replace(/\D/g, '');
    celularInput = celularInput.replace(/^(\d{2})(\d)/, '($1) $2');
    celularInput = celularInput.replace(/(\d{5})(\d)/, '$1-$2');
    setCelular(celularInput);
  };

  const handleTelChange = (event) => {
    let celularInput = event.target.value.replace(/\D/g, '');
    celularInput = celularInput.replace(/^(\d{2})(\d)/, '($1) $2');
    celularInput = celularInput.replace(/(\d{5})(\d)/, '$1-$2');
    setTelefone_fixo(celularInput);
  };

  return (
    <Styled.Container>
      <Styled.Title>Adicionar Usuario</Styled.Title>
      <Styled.FormInput onSubmit={handleSubmit}>
        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>nome*</Styled.LabelInput>
            <Styled.InputType required placeholder='Nickloas Tesla' type='text' onChange={(e) => setNome(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>idade*</Styled.LabelInput>
            <Styled.InputType required placeholder='25' type='number' onChange={(e) => setIdade(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>cpf*</Styled.LabelInput>
            <Styled.InputType required placeholder='012.345.678-90' type='text' value={cpf} onChange={handleCpfChange} minLength={14} maxLength={14} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>rg*</Styled.LabelInput>
            <Styled.InputType required placeholder='01.234.567-8' type='text' value={rg} onChange={handleRgChange} minLength={12} maxLength={12} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelContainer>
              <Styled.LabelInput>nascimento*</Styled.LabelInput>
              <Styled.InputType required placeholder='Nascimento*' type='date' onChange={(e) => setData_nasc(e.target.value)} />
            </Styled.LabelContainer>
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>sexo*</Styled.LabelInput>
            <Styled.InputType required placeholder='masculino' type='text' onChange={(e) => setSexo(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>signo*</Styled.LabelInput>
            <Styled.InputType required placeholder='leão' type='text' onChange={(e) => setSigno(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>nome da mãe*</Styled.LabelInput>
            <Styled.InputType required placeholder='lesly da Silva' type='text' onChange={(e) => setMae(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>nome do pai*</Styled.LabelInput>
            <Styled.InputType required placeholder='Carlos da Silva' type='text' onChange={(e) => setPai(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>email*</Styled.LabelInput>
            <Styled.InputType required placeholder='niktesla@mail.com' type='email' onChange={(e) => setEmail(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>senha*</Styled.LabelInput>
            <Styled.InputType required placeholder='******' type='password' onChange={(e) => setSenha(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>cep*</Styled.LabelInput>
            <Styled.InputType required placeholder='01234-56' type='text' value={cep} onChange={handleCepChange} minLength={9} maxLength={9} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>endereco*</Styled.LabelInput>
            <Styled.InputType required placeholder='Rua 12' type='text' onChange={(e) => setEndereco(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>numero casa*</Styled.LabelInput>
            <Styled.InputType required placeholder='12' type='number' onChange={(e) => setNumero(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>bairro*</Styled.LabelInput>
            <Styled.InputType required placeholder='aldeota' type='text' onChange={(e) => setBairro(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>cidade*</Styled.LabelInput>
            <Styled.InputType required placeholder='Fortaleza' type='text' onChange={(e) => setCidade(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>estado*</Styled.LabelInput>
            <Styled.InputType required placeholder='Ceará' type='text' onChange={(e) => setEstado(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>tel fixo*</Styled.LabelInput>
            <Styled.InputType required placeholder='11 4002-8922' type='text' value={telefone_fixo} onChange={handleTelChange} minLength={15} maxLength={15} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>celular*</Styled.LabelInput>
            <Styled.InputType required placeholder='11 4002-8922' type='text' value={celular} onChange={handleCelularChange} minLength={15} maxLength={15} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>altura*</Styled.LabelInput>
            <Styled.InputType required placeholder='1,80' type='text' onChange={(e) => setAltura(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>peso*</Styled.LabelInput>
            <Styled.InputType required placeholder='85' type='number' onChange={(e) => setPeso(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>tipo sanguineo*</Styled.LabelInput>
            <Styled.InputType required placeholder='O-' type='text' onChange={(e) => setTipo_sanguineo(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>cor*</Styled.LabelInput>
            <Styled.InputType required placeholder='Branco' type='text' onChange={(e) => setCor(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>
        <Styled.ButtonSend hasUser={true} type="submit">Adicionar</Styled.ButtonSend>
      </Styled.FormInput>
    </Styled.Container>
  )
}