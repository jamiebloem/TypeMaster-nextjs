import HeadingCta from "../organism/HeadingCta";
import WirelessKeyboard from "../organism/WirelessKeyboard";
import KeyboardImages from "../organism/KeyboardImages";

export default function Heading() {
    return (
        <div className="heading">
            <style jsx> {`
              .first--image {
                background-image: url("/static/assets/mobile/image-keyboard.jpg");
                border-radius: 10px;
                margin-left: auto;
                margin-right: -24px;
                width: 373px;
                height: 331px;
                background-size: cover;
              }

              @media only screen and (min-width: 768px) {
                .first--image {
                  height: 425px;
                  margin-left: 0;
                  transform: translateX(36px);
                  background-image: url("/static/assets/tablet/image-keyboard.jpg");
                }

                .heading {
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  justify-content: center;
                }

              }

              @media only screen and (min-width: 1440px) {
                .first--image {
                  width: 540px;
                  height: 480px;
                  background-image: url("/static/assets/desktop/image-keyboard.jpg");
                  transform: unset;
                  margin-right: 0;
                }

                .heading {
                  margin: 0 165px;
                  justify-content: space-between;
                }

                .grey-square {
                  background-color: var(--color-grey-light);
                  height: 255px;
                  width: 240px;
                  position: absolute;
                  border-radius: 20px;
                }

                .grey-square--right {
                  top: 177px;
                  right: -120px;
                }

                .grey-square--left {
                  top: 910px;
                  left: -120px;
                }
              }

              @media only screen and (max-width: 1440px) {
                .grey-square {
                  display: none;
                }
              }
            `}</style>

            <div className="grey-square grey-square--right"></div>
            <div className="grey-square grey-square--left"></div>
            <HeadingCta/>
            <div className="first--image"></div>
            <KeyboardImages/>
            <WirelessKeyboard/>
        </div>
    )
};

