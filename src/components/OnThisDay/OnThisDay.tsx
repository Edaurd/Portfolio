import * as React from "react";
import { Fragment } from "react";
import axios from "axios";

async function getDeath(): Promise<Array<{ name: string; url: string }>> {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const response = await axios.get(
    `https://en.wikipedia.org/api/rest_v1/feed/onthisday/deaths/${month}/${day}`
  );
  const randomIndex = Math.floor(Math.random() * response.data.deaths.length);
  const randomDeath = response.data.deaths[randomIndex];
  return [randomDeath.text, randomDeath.pages[0].content_urls.desktop.page];
}
async function getBirth(): Promise<Array<{ name: string; url: string }>> {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const response = await axios.get(
    `https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/${month}/${day}`
  );
  const randomIndex = Math.floor(Math.random() * response.data.births.length);
  const randomBirth = response.data.births[randomIndex];
  return [randomBirth.text, randomBirth.pages[0].content_urls.desktop.page];
}

export class OnThisDay extends React.Component {
  state = {
    death: [],
    birth: [],
  };

  async componentDidMount() {
    const death = await getDeath();
    const birth = await getBirth();
    console.log(death);
    this.setState({ death, birth });
  }
  render() {
    const { death, birth } = this.state;
    var deathString = String(death[0]);
    var birthString = String(birth[0]);
    var deathName = deathString.substring(0, deathString.indexOf(","));
    var birthName = birthString.substring(0, birthString.indexOf(","));
    var deathDesc = deathString.substring(deathString.indexOf(",") + 2);
    var birthDesc = birthString.substring(birthString.indexOf(",") + 2);
    var deathUrl = death[1];
    var birthUrl = birth[1];
    return (
      <section id="onthisday" className="container container-about">
        <Fragment>
          {death && birth ? (
            <div className="boxed" style={{ position: "unset" }}>
              <h3>
                Did you know that
                <br />
                On This Day
              </h3>
              <br />
              <a className="red" href={deathUrl}>
                <h2>{deathName}</h2>
              </a>
              <br />
              <i>{deathDesc}</i>
              <br />
              passed away and
              <br />
              <a className="green" href={birthUrl}>
                <h2>{birthName}</h2>
              </a>
              <br />
              <i>{birthDesc}</i>
              <br />
              was brought into this world
            </div>
          ) : (
            <div className="boxed" style={{ position: "unset" }}>
              Loading...
            </div>
          )}
        </Fragment>
      </section>
    );
  }
}

export default OnThisDay;
