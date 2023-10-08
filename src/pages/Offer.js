import React, { Component } from "react";
import { GekHeader } from "../components/GekHeader";
import { GekList } from "../components/GekList";
import axios from "axios";
import { ClipLoader } from "react-spinners";

import "../styles/Geckos.css";

class Offer extends Component {
  state = {
    showMale: true,
    showFemale: true,
    reservationCart: [],
    reservationMode: false,
  };

  componentDidMount() {
    axios
      .get("https://smilinggeckos.com/api/front_configs")
      .then((response) => {
        this.setState({ colors: response.data["hydra:member"][0].colors });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "https://smilinggeckos.com/api/geckos?pagination=false&geckType=" +
          this.props.geckType
        // "https://smilinggeckos.com/api/geckos"
      )
      .then((response) => {
        this.setState({ gecks: response.data["hydra:member"] });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    let geckType;

    switch (this.props.geckType) {
      case 1:
        geckType = "Lamparci";
        break;
      case 2:
        geckType = "Gruboogonowy";
        break;
      case 3:
        geckType = "Nowa Kaledonia";
        break;
      default:
        break;
    }

    if (this.state.gecks && geckType !== this.state.gecks[0].geckType) {
      axios
        .get(
          "https://smilinggeckos.com/api/geckos?pagination=false&geckType=" +
            this.props.geckType
          // "https://smilinggeckos.com/api/geckos"
        )
        .then((response) => {
          this.setState({ gecks: response.data["hydra:member"] });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  onClickReservationMode = (e) => {
    this.setState({ reservationMode: !this.state.reservationMode });
  };

  onClickReserve = () => {
    let csGecks = this.state.reservationCart.join();
    // window.location.href = "smilinggeckos.com/reservation_page/" + csGecks;
    window.location.href = `https://smilinggeckos.com/reservation_page/${csGecks}`;
  };

  onChangeReservationCheckbox = (e) => {
    if (!this.state.reservationCart.includes(e.target.name)) {
      this.setState({
        reservationCart: [...this.state.reservationCart, e.target.name],
      });
    } else {
      this.setState({
        reservationCart: this.state.reservationCart.filter(
          (value) => value !== e.target.name
        ),
      });
    }
  };

  onClickSexFilter = (e) => {
    if (e.target.value === "male" || e.target.parentElement.value === "male") {
      this.setState({
        showMale: !this.state.showMale,
      });
    } else if (
      e.target.value === "female" ||
      e.target.parentElement.value === "female"
    ) {
      this.setState({
        showFemale: !this.state.showFemale,
      });
    }
  };

  disco(e, colors) {
    const defaultColors = [
      "#ed6b5b",
      "#f9ac66",
      "#c36b84",
      "#4fa3a5",
      "#63c5ea",
      "#fcb424",
      "#90ee90",
    ];

    colors = colors.length === 0 ? defaultColors : colors;

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.outline = randomColor + " 1px solid";
    e.target.parentElement.style.backgroundColor = randomColor;
    e.target.nextElementSibling.style.opacity = "1";
    e.target.nextElementSibling.style.textShadow = "0 0 4px black";
    e.target.nextElementSibling.style.color = randomColor;
    e.target.nextElementSibling.nextElementSibling.style.opacity = "1";
    e.target.nextElementSibling.nextElementSibling.style.textShadow =
      "0 0 4px black";
    e.target.nextElementSibling.nextElementSibling.style.color = randomColor;
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.style.color =
      randomColor;
  }

  deDisco(e) {
    e.target.style.removeProperty("outline");
    e.target.parentElement.style.removeProperty("background-color");
    e.target.nextElementSibling.style.opacity = "0";
    e.target.nextElementSibling.style.textShadow = "0";
    e.target.nextElementSibling.nextElementSibling.style.opacity = "0";
    e.target.nextElementSibling.nextElementSibling.style.textShadow = "0";
    e.target.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.style.color =
      "transparent";
  }

  render() {
    const filters = [this.state.showMale, this.state.showFemale];
    return (
      <>
        <div className="geckos">
          <GekHeader />
          <div>
            <button
              className={!this.state.showMale ? "buttonOff" : null}
              onClick={this.onClickSexFilter}
              value="male"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416c61.9 0 112-50.1 112-112s-50.1-112-112-112s-112 50.1-112 112s50.1 112 112 112z" />
              </svg>
            </button>
            <button
              onClick={this.onClickReservationMode}
              className={
                !this.state.reservationMode
                  ? "reserveButton buttonOff"
                  : "reserveButton"
              }
            >
              Rezerwuj
            </button>
            <button
              className={!this.state.showFemale ? "buttonOff" : null}
              onClick={this.onClickSexFilter}
              value="female"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#eeeeee"
                  d="M304 176c0 61.9-50.1 112-112 112s-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"
                />
              </svg>
            </button>
          </div>
          {this.state.gecks ? (
            <GekList
              disco={this.disco}
              colors={this.state.colors}
              deDisco={this.deDisco}
              gecks={this.state.gecks}
              filters={filters}
              reservationMode={this.state.reservationMode}
              onChange={this.onChangeReservationCheckbox}
              reservationCart={this.state.reservationCart}
            />
          ) : (
            <div className="pWrapper">
              <ClipLoader color="#00adb5" size={230} />
            </div>
          )}
        </div>
        {this.state.reservationCart.length === 0 ? null : (
          <div className="reservationPanel">
            <button onClick={this.onClickReserve}>
              <b>Złóż rezerwację</b>
            </button>
          </div>
        )}
      </>
    );
  }
}

export default Offer;
