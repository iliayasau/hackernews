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

export const Container = styled.div`
  width: 100%;
  min-width: 375px;
  background: ${props => (props.theme === 'Light' ? 'white' : '#424242')};
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
  @media (min-width: 992px) {
    font-size: 80px;
    padding-top: 60px;
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
    height: 1.5rem;
    border: .1rem solid transparent;
    border-radius: 4px;
    background: #b5b5b5;
    content: '';
  }
  &+label::after {
    display: block;
    position: absolute;
    top: .6rem;
    left: .3rem;
    width: 15px;
    height: 15px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    border-radius: 4px;
    background: #fff;
    transition: all .25s ease-out;
    content: '';
  }
  &:checked+label::before {
    background: #00d1b2;
  }
  &:checked+label::after {
    left: 1.6rem;
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
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: ${props => (props.theme === 'Light' ? '#00657b' : '#0a8774')};
  }
  @media (min-width: 992px) {
    font-size: 14px;
    padding: 15px 25px;
  }
`;