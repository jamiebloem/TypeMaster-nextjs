export default function WirelessKeyboard() {
    return (
        <div className="wireless-keyboard">
            <style jsx> {`
              .wireless-keyboard__title {
                margin-bottom: 24px;
                margin-top: 75px;
                text-align: center;
              }

              .wireless-keyboard {
                padding: var(--padding-m);
                max-width: 450px;
                margin: auto;
              }

              .text--center {
                text-align: center;
                color: var(--color-grey);
              }

              @media only screen and (min-width: 768px) {
                .wireless-keyboard {
                  display: flex;
                  flex-direction: row;
                  margin-top: 32px;
                  max-width: 768px;
                }

                .keyboard-content {
                  display: flex;
                  text-align: left;
                  align-items: center;
                  margin-left: 80px;
                }

                .wireless-keyboard__title {
                  padding: 0;
                  text-align: left;
                }

                .text--center {
                  text-align: left;
                }

                @media only screen and (min-width: 1440px) {
                  .wireless-keyboard {
                    width: 255px;
                    height: 265px;
                    display: flex;
                    flex-direction: column;
                    padding: 0;
                    margin: 0;
                    align-self: center;
                  }

                  .keyboard-content {
                    margin: 0;
                  }

                  .wireless-keyboard__title {
                    margin-top: 0;
                  }
                }
              }
            `}
            </style>

            <h2 className="wireless-keyboard__title">Mechanical <br/> wireless <br/> keyboard</h2>
            <p className="text--center keyboard-content"> The Typemaster keyboard boasts top-notch build and
                practical design. It offers a wide variety
                of switches and keycaps, along with reliable wireless connectivity.</p>
        </div>
    )
}