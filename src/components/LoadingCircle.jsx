import styled from "styled-components";

import { MoonLoader } from "react-spinners";

const LoadingWrapper = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;

  h2 {
    font-family: "OswaldMedium, sans-serif;
    font-size: 1.5em;
  }
`;

export const LoadingCircle = ({ label = "Loading..." }) => {
  return (
    <LoadingWrapper>
      <MoonLoader color="#36d7b7" />
      <h2>{label}</h2>
    </LoadingWrapper>
  );
};
