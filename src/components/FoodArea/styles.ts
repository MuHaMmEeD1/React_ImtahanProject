import styled, { css } from "styled-components";
import { MyColor } from "../../colors/MyColor";

interface RoundDivProps {
  colorStyle: "orange" | "green";
}

const shouldForwardProp = (prop: string) => !["colorStyle"].includes(prop);

export const MainDiv = styled.div`
  display: flex;
`;

export const RoundDiv = styled.div.withConfig({
  shouldForwardProp,
})<RoundDivProps>`
  background-color: ${({ colorStyle }) =>
    colorStyle === "orange"
      ? MyColor.colorLightOrange
      : colorStyle === "green"
      ? MyColor.colorLightGreen
      : "transparent"};

  border-radius: 50%;
  width: 99vw;
  height: 188.2vh;
  position: absolute;
  top: -118.3vh;
  left: 20.6vw;
`;

export const BgImg = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: 0px;
  left: 0px;
`;

export const TitleDiv = styled.div.withConfig({
  shouldForwardProp,
})<RoundDivProps>`
  z-index: 2;
  position: relative;
  left: 8vw;
  top: -5vh;
  height: 48vh;

  :nth-child(1) {
    color: ${({ colorStyle }) =>
      colorStyle === "orange"
        ? MyColor.colorOrange
        : colorStyle === "green"
        ? MyColor.colorGreen
        : "transparent"};
    font-size: 38px;
    font-weight: 700;
  }

  h1 {
    width: 370px;
  }

  :nth-child(3) {
    width: 370px;
  }

  button {
    background-color: ${({ colorStyle }) =>
      colorStyle === "orange"
        ? MyColor.colorOrange
        : colorStyle === "green"
        ? MyColor.colorGreen
        : "transparent"};
    color: white;
    font-weight: 700;
    border-radius: 25px;
    padding: 12px 25px;

    &:hover {
      opacity: 0.8;
    }
  }

  :nth-child(6) {
    position: absolute;
    top: 67vh;
  }
`;

export const StarsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  padding-bottom: 15px;
  margin: 0;

  li {
    width: 20px !important;
    position: relative;
    display: flex;
    justify-content: center;
  }

  img {
    width: 20px;
  }
`;

export const FoodImageDiv = styled.div`
  position: absolute;
  left: 47vw;
  bottom: -60vh;
`;

export const FoodImageDivImages = styled.div`
  position: relative;
  z-index: 1;

  > img {
    position: relative;
    top: 0vh;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    bottom: 25vh;
    right: 3.3vw;
    width: 600px;
    gap: 40px;

    img {
      width: 85px;
      height: 85px;
      border-radius: 50%;
    }

    :nth-child(1) > img {
      position: relative;
      right: 0.5vw;
      bottom: 2.7vh;
    }
    :nth-child(2) > img {
      position: relative;
      bottom: 23vh;
      right: 3.4vw;
    }
    :nth-child(3) > img {
      position: relative;
      bottom: 32vh;
      right: 0.7vw;
    }
    :nth-child(4) > img {
      position: relative;
      bottom: 22vh;
      left: 2.4vw;
    }
    :nth-child(5) > img {
      position: relative;
      bottom: 0.7vh;
    }
  }
`;
export const FoodImageDivController = styled.div`
  position: relative;
  z-index: 2;
  left: 3.7vw;

  display: flex;
  gap: 50px;

  bottom: 70vh;

  :nth-child(2) {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  :nth-child(1),
  :nth-child(3) {
    height: 60px;
    position: relative;
    top: 30vh;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
