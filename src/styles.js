import styled, { createGlobalStyle } from 'styled-components';
import importGoogleFonts from 'import-google-fonts';

export const GoogleFonts = importGoogleFonts(createGlobalStyle, null, [ 'Roboto' ]);

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
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

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #0085a1;
  @media (min-width: 992px) {
    font-size: 80px;
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
  background-color: white;
  border-color: #dbdbdb;
  color: #363636;
  box-shadow: none;
  max-width: 100%;
  width: calc(100% - 1.25em);
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
  max-width: unset;
  text-align: center;
  padding-bottom: 15px;
  min-height: 200px;
  @media (min-width: 992px) {
    width: unset;
    max-width: 200px;
    text-align: left;
    padding-bottom: 0;
  }
`;

export const BaseImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  flex-shrink: 0;
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
  color: #424242;
  &:hover {
    color: #0085a1;
  }
  @media (min-width: 992px) {
    font-size: 32px;
  }
`;

export const Button = styled.button`
  float: right;
  margin-bottom: 30px;
  background: #0085a1;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 800;
  padding: 15px 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 0;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: #00657b;
  }
`;