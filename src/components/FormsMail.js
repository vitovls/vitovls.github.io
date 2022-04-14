import { useState } from 'react';
import emailJS from 'emailjs-com';

const FormsMail = () => {

  const [modal, setModal] = useState('disabled-modal')
  const [fields, setFields] = useState({
    from_name: '',
    from_mail: '',
    message: ''
  })

  const handleChange = e =>
  setFields({ ...fields, [e.target.name]: e.target.value });

  const sendMail = (event) => {
    event.preventDefault();

    emailJS.sendForm('gmailServicePersonalSite', 'template_2x1uu1s',
     event.target, 'bMp-q7o2JXMwvbURU')
     .then((res) => callModal(),
     (err) => alert('Algo deu errado! Tente novamente, ou outra maneira de contato'))
    event.target.reset()
  }

  const callModal = () => {
    if(modal === 'disabled-modal') {
      return setModal('active-modal')
    } setModal('disabled-modal')
  }

  const validateFields = () => {
    function validateGeneric (field, length) {
      if(field !== '') {
        return true
      } return false
    }

    function validateMail () {
      const regexMail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
      const regexTestMail = regexMail.test(fields.from_mail)

      if(fields.from_mail !== '' && regexTestMail) {
        return true
      } return false
    }

    if(validateMail() && validateGeneric(fields.from_name) && validateGeneric(fields.message)) {
      return false
    } return true
  }

  return (
    <>
    <form className='forms-mail' onSubmit={sendMail}>
      <input value={fields.from_name}
        onChange={(event) => handleChange(event)}
        className='forms-from name'
        name='from_name'
        placeholder='Seu Nome' 
      />
      <input value={fields.from_mail}
        onChange={(event) => handleChange(event)}
        className='forms-from mail'
        name='from_mail'
        placeholder='Seu Email' 
      />
      <textarea className='forms-from message'
        onChange={(event) => handleChange(event)}
        name='message'
        placeholder='Mensagem'
      />
      <button disabled={validateFields()} className='forms-button'>Enviar!</button>
    </form>
    <div className={modal}>
      <p className='text-modal'>Email enviado! Obrigado pelo Contato! 😀 </p>
      <button onClick={() => callModal()} className='button-modal'>Fechar</button>
    </div>
    </>
  );
};

export default FormsMail;