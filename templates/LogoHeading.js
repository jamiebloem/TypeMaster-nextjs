import Button from "../atom/Button";

export default function LogoHeading() {
    return (
        <div className="logo-heading">
            <style jsx> {`.logo {
              width: 40px;
              height: 40px;
            }

            .logo-heading {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              padding: 24px 24px 0 24px;
            }

            @media only screen and (min-width: 768px) {
              .logo-heading {
                margin-bottom: 40px;
              }
            }

            @media only screen and (min-width: 1440px) {
              .logo-heading {
                max-width: unset;
                padding: 55px 165px 0 165px;
                margin-bottom: 83px;
              }
            }
            `}</style>
            <img className="logo" alt="logo" src="/static/assets/shared/logo.svg"/>
            <Button variant="button button--grey">Pre-order now</Button>
        </div>
    )
}

