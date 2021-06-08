import { css } from 'styled-components'

// const button = css`
//   color: var(--green);
//   &:hover,
//   &:focus,
//   &:active {}
//   &:after {}
// `

const mixins = {

  resume: css`
    @media (max-width: 500px) {
      object.resume {
        max-width: 100% !important;
        max-height: 700px !important;
      }
    }
  `,

  customUnderline: css`
    position: relative;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  `,

  disableSelection: css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,

  shareButtonsWrap: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.2rem 0.4rem;
    * {
      margin: 0 0.2rem;
    }
  `,

  curTheme: '',

  btnCustom: css`
    cursor: pointer;
    background: none;
    border: none;
    user-select: none;
    font-size: inherit;
    &:focus {
      outline-width: 1px;
      /* outline: 0; */
    }
  `,

  // button,

}

export default mixins
