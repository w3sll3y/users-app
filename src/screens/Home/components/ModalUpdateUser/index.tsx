import { useEffect, useState } from 'react';
import * as Styled from './styles';
import axios from 'axios';

interface IUser {
  id: number;
  nome: string;
  idade: number;
  cpf: string;
  rg: string;
  data_nasc: string;
  sexo: string;
  signo: string;
  mae: string;
  pai: string;
  email: string;
  senha: string;
  cep: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  telefone_fixo: string;
  celular: string;
  altura: string;
  peso: number;
  tipo_sanguineo: string;
  cor: string;
  createdBy: number;
}


export function ModalUpdateUser(value: IUser) {
  const token = localStorage.getItem('user');

  const [nome, setNome] = useState<string>(value?.value?.nome);
  const [idade, setIdade] = useState(value?.value?.idade);
  const [cpf, setCpf] = useState(value?.value?.cpf);
  const [rg, setRg] = useState(value?.value?.rg);
  const [data_nasc, setData_nasc] = useState(value?.value?.data_nasc);
  const [sexo, setSexo] = useState(value?.value?.sexo);
  const [signo, setSigno] = useState(value?.value?.signo);
  const [mae, setMae] = useState(value?.value?.mae);
  const [pai, setPai] = useState(value?.value?.pai);
  const [email, setEmail] = useState(value?.value?.email);
  const [senha, setSenha] = useState(value?.value?.senha);
  const [cep, setCep] = useState(value?.value?.cep);
  const [endereco, setEndereco] = useState(value?.value?.endereco);
  const [numero, setNumero] = useState(value?.value?.numero);
  const [bairro, setBairro] = useState(value?.value?.bairro);
  const [cidade, setCidade] = useState(value?.value?.cidade);
  const [estado, setEstado] = useState(value?.value?.estado);
  const [telefone_fixo, setTelefone_fixo] = useState(value?.value?.telefone_fixo);
  const [celular, setCelular] = useState(value?.value?.celular);
  const [altura, setAltura] = useState(value?.value?.altura);
  const [peso, setPeso] = useState(value?.value?.peso);
  const [tipo_sanguineo, setTipo_sanguineo] = useState(value?.value?.tipo_sanguineo);
  const [cor, setCor] = useState(value?.value?.cor);

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
    const url = `http://localhost:3000/user/${value.value.id}`;
    const config = {
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${JSON.parse(token).token}`
      },
    };
    axios.patch(url, user, config).then((response) => {
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

  useEffect(() => {
    if (value?.value?.data_nasc) {
      const partesData = value?.value?.data_nasc.split('/');
      if (partesData.length === 3) {
        const ano = partesData[2];
        const mes = partesData[1].padStart(2, '0');
        const dia = partesData[0].padStart(2, '0');
        const dataFormatada = `${ano}-${mes}-${dia}`;
        setData_nasc(dataFormatada);
      }
    }
  }, [value?.value?.data_nasc]);

  return (
    <Styled.Container>
      <Styled.Title>Edite Usuario</Styled.Title>
      <Styled.FormInput onSubmit={handleSubmit}>
        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>nome*</Styled.LabelInput>
            <Styled.InputType required placeholder='Nickloas Tesla' defaultValue={nome} value={nome} type='text' onChange={(e) => setNome(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>idade*</Styled.LabelInput>
            <Styled.InputType required placeholder='25' type='number' defaultValue={idade} value={idade} onChange={(e) => setIdade(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>cpf*</Styled.LabelInput>
            <Styled.InputType required placeholder='012.345.678-90' type='text' defaultValue={cpf} value={cpf} onChange={handleCpfChange} minLength={14} maxLength={14} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>rg*</Styled.LabelInput>
            <Styled.InputType required placeholder='01.234.567-8' type='text' defaultValue={rg} value={rg} onChange={handleRgChange} minLength={12} maxLength={12} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelContainer>
              <Styled.LabelInput>nascimento*</Styled.LabelInput>
              <Styled.InputType required placeholder='Nascimento*' type='date' defaultValue={data_nasc} value={data_nasc} onChange={(e) => setData_nasc(e.target.value)} />
            </Styled.LabelContainer>
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>sexo*</Styled.LabelInput>
            <Styled.InputType required placeholder='masculino' type='text' defaultValue={sexo} value={sexo} onChange={(e) => setSexo(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>signo*</Styled.LabelInput>
            <Styled.InputType required placeholder='leão' type='text' defaultValue={signo} value={signo} onChange={(e) => setSigno(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>nome da mãe*</Styled.LabelInput>
            <Styled.InputType required placeholder='lesly da Silva' type='text' defaultValue={mae} value={mae} onChange={(e) => setMae(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>nome do pai*</Styled.LabelInput>
            <Styled.InputType required placeholder='Carlos da Silva' type='text' defaultValue={pai} value={pai} onChange={(e) => setPai(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>email*</Styled.LabelInput>
            <Styled.InputType required placeholder='niktesla@mail.com' type='email' defaultValue={email} value={email} onChange={(e) => setEmail(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>senha*</Styled.LabelInput>
            <Styled.InputType required placeholder='******' type='password' defaultValue={senha} value={senha} onChange={(e) => setSenha(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>cep*</Styled.LabelInput>
            <Styled.InputType required placeholder='01.234-56' type='text' defaultValue={cep} value={cep} onChange={handleCepChange} minLength={9} maxLength={9} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>endereco*</Styled.LabelInput>
            <Styled.InputType required placeholder='Rua 12' type='text' defaultValue={endereco} value={endereco} onChange={(e) => setEndereco(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>numero casa*</Styled.LabelInput>
            <Styled.InputType required placeholder='12' type='number' defaultValue={numero} value={numero} onChange={(e) => setNumero(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>bairro*</Styled.LabelInput>
            <Styled.InputType required placeholder='aldeota' type='text' defaultValue={bairro} value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>cidade*</Styled.LabelInput>
            <Styled.InputType required placeholder='Fortaleza' type='text' defaultValue={cidade} value={cidade} onChange={(e) => setCidade(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>estado*</Styled.LabelInput>
            <Styled.InputType required placeholder='Ceará' type='text' defaultValue={estado} value={estado} onChange={(e) => setEstado(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>tel fixo*</Styled.LabelInput>
            <Styled.InputType required placeholder='11 4002-8922' type='text' defaultValue={telefone_fixo} value={telefone_fixo} onChange={handleTelChange} minLength={15} maxLength={15} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>celular*</Styled.LabelInput>
            <Styled.InputType required placeholder='11 4002-8922' type='text' defaultValue={celular} value={celular} onChange={handleCelularChange} minLength={15} maxLength={15} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>altura*</Styled.LabelInput>
            <Styled.InputType required placeholder='1,80' type='text' defaultValue={altura} value={altura} onChange={(e) => setAltura(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>peso*</Styled.LabelInput>
            <Styled.InputType required placeholder='85' type='number' defaultValue={peso} value={peso} onChange={(e) => setPeso(e.target.value)} />
          </Styled.LabelContainer>
          <Styled.LabelContainer>
            <Styled.LabelInput>tipo sanguineo*</Styled.LabelInput>
            <Styled.InputType required placeholder='O-' type='text' defaultValue={tipo_sanguineo} value={tipo_sanguineo} onChange={(e) => setTipo_sanguineo(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>

        <Styled.ContainerInput>
          <Styled.LabelContainer>
            <Styled.LabelInput>cor*</Styled.LabelInput>
            <Styled.InputType required placeholder='Branco' type='text' defaultValue={cor} value={cor} onChange={(e) => setCor(e.target.value)} />
          </Styled.LabelContainer>
        </Styled.ContainerInput>
        <Styled.ButtonSend hasUser={true} type="submit">Atualizar</Styled.ButtonSend>
      </Styled.FormInput>
    </Styled.Container>
  )
}