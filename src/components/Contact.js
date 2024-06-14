import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Assine Nossa Newsletter e Fique por Dentro das Novidades!</h3>
        <div className='content'>
          <p>
          Quer receber ofertas exclusivas e saber de todas as novidades da Yes Tabacaria em primeira mão? Então, inscreva-se agora na nossa newsletter!

Ao assinar, você terá acesso a:

Ofertas Exclusivas: Descontos e promoções especiais apenas para assinantes.
Lançamentos de Produtos: Seja o primeiro a conhecer nossos novos produtos e kits de acessórios.
Dicas e Novidades: Receba dicas, novidades e tudo sobre o mundo da tabacaria.
💨 Não perca essa oportunidade! Inscreva-se agora e ganhe um brinde especial na sua próxima compra.
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              Inscreva-se
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
