export default function KeyboardImages() {
    return (
        <div className="keyboard-images">
            <style jsx> {`
              .keyboard-images {
                display: flex;
                flex-direction: row;
              }

              .keyboard-two {
                background-image: url("/static/assets/mobile/image-glass-and-keyboard.jpg");
                width: 220px;
                height: 193px;
                margin: 24px 24px 0 24px;
                border-radius: 10px;
              }

              .keyboard-one {
                background-image: url("/static/assets/mobile/image-phone-and-keyboard.jpg");
                background-color: var(--color-primary);
                background-blend-mode: multiply;
                background-size: cover;
                width: 129px;
                height: 193px;
                border-radius: 10px;
                margin: 24px 0 0 -20px;
              }

              @media only screen and (min-width: 768px) {
                .keyboard-one {
                  background-image: url("/static/assets/tablet/image-phone-and-keyboard.jpg");
                  height: 320px;
                  width: 214px;
                  padding: 0;
                  margin: 0;
                }

                .keyboard-two {
                  background-image: url("/static/assets/tablet/image-glass-and-keyboard.jpg");
                  background-size: cover;
                  height: 320px;
                  width: 445px;
                  padding: 0;
                  margin: 0 0 0 24px;
                }

                .keyboard-images {
                  padding: 0 40px;
                  margin-top: 24px;
                }

                @media only screen and (min-width: 1440px) {
                  .keyboard-one {
                    background-image: url("/static/assets/desktop/image-phone-and-keyboard.jpg");
                    width: 255px;
                    height: 480px;
                  }

                  .keyboard-two {
                    background-image: url("/static/assets/desktop/image-glass-and-keyboard.jpg");
                    width: 455px;
                    height: 480px;
                  }

                  .keyboard-images {
                    padding: 0;
                  }
                }
              }
            `}</style>

            <div className="keyboard-one"></div>
            <div className="keyboard-two"></div>

        </div>
    )
}