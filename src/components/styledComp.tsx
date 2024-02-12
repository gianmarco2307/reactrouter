import styled from "styled-components";

export const FormLogin = styled.form(() => ({
  display: "flex",
}));

export const HomeDiv = styled.div(() => ({
    display: "flex",
    flexFlow: "column nowrap"
}))

export const Button = styled.button(() => ({
  width: "25%",
  fontSize: "18px",
  margin: "auto",
  marginTop: "1em",
  marginBottom: "2em"
}));

export const Li = styled.li(() => ({
    width: "70%"
}))

export const DetailDiv = styled.div(() => ({
    width: "80%",
    margin: "auto",
    textAlign: "justify"
}));

export const DetailId = styled.h1(() => ({
    paddingBottom: "0.3em",
    borderBottom: "0.07em grey solid"
}));