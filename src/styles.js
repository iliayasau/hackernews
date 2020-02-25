import styled, { createGlobalStyle } from 'styled-components';
import importGoogleFonts from 'import-google-fonts';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  background: ${props => (props.theme === 'Light' ? 'white' : '#424242')};
`;

export const GoogleFonts = importGoogleFonts(createGlobalStyle, null, [ 'Roboto' ]);

export const TitleContainer = styled.div`
  width: 100%;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Header = styled.div`
  background-color: ${props => (props.theme === 'Light' ? '#eeeeee' : '#333333')};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23${props => (props.theme === 'Light' ? 'd0d0d0' : '4c4b4b')}' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
`;

export const Row = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => (props.theme === 'Light' ? '#0085a1' : '#00d1b2')};
  margin-top: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 992px) {
    font-size: 80px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

export const Form = styled.form`
  display: block;
  width: 100%;
  padding-bottom: 15px;
  @media (min-width: 992px) {
    width: 50%;
    padding-bottom: 30px;
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
`;

export const Switch = styled.input`
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  position: absolute;
  opacity: 0;
  &+label {
    position: relative;
    display: initial;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: initial;
    padding-left: 4rem;
    padding-top: 0.5rem;
    cursor: pointer;
    @media (min-width: 992px) {
      padding-top: 0.4rem;
      font-size: 21px;
    }
  }
  &+label::before {
    position: absolute;
    display: block;
    top: 4px;
    left: 0;
    width: 2.8rem;
    height: 1.4rem;
    border: .1rem solid transparent;
    border-radius: 4px;
    background: #b5b5b5;
    content: '';
  }
  &+label::after {
    display: block;
    position: absolute;
    top: .58rem;
    left: .35rem;
    width: 15px;
    height: 15px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    border-radius: 3px;
    background: #fff;
    transition: all .25s ease-out;
    content: '';
  }
  &:checked+label::before {
    background: #00d1b2;
  }
  &:checked+label::after {
    left: 1.7rem;
  }
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Radio = styled.div`
  width: 25%;
`;

export const Label = styled.label`
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1;
  padding-left: 15px;
  color: ${props => (props.theme === 'Light' ? '#424242' : 'white')};
  @media (min-width: 992px) {
    font-size: 21px;
  }
`;

export const Filter = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 1rem;
  height: 1.5em;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  background: ${props => (props.theme === 'Light' ? 'white' : '#424242')};
  border-color: ${props => (props.theme === 'Light' ? '#dbdbdb' : '#cccccc')};
  color: ${props => (props.theme === 'Light' ? '#424242' : 'white')};
  box-shadow: none;
  max-width: 100%;
  width: calc(100% - 1.25em);
  margin-bottom: 30px;
`;

export const Loading = styled.div`
  padding-bottom: 15px;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: ${props => (props.theme === 'Light' ? '#424242' : 'white')};
  @media (min-width: 992px) {
    padding-bottom: 30px;
    font-size: 21px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  min-height: 200px;
  flex-shrink: 0;
  @media (min-width: 992px) {
    width: 200px;
    text-align: left;
    padding-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const LinkContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-left: 0;
  @media (min-width: 992px) {
    width: unset;
    text-align: left;
    padding-left: 30px;
  }
`;

export const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => (props.theme === 'Light' ? '#0085a1' : '#00d1b2')};
  &:hover {
    color: ${props => (props.theme === 'Light' ? '#00657b' : '#0a8774')};
  }
  @media (min-width: 992px) {
    font-size: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  min-height: 100px;
`;

export const Button = styled.button`
  display: block;
  float: right;
  background: ${props => (props.theme === 'Light' ? '#0085a1' : '#00d1b2')};
  border: none;
  color: white;
  font-size: 12px;
  font-weight: 800;
  padding: 10px 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 5px;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: ${props => (props.theme === 'Light' ? '#00657b' : '#0a8774')};
  }
  @media (min-width: 992px) {
    font-size: 14px;
    padding: 15px 25px;
  }
`;