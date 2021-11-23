import Button from "../atom/Button";
import Link from 'next/link';

export default function HeadingCta() {
    return (
        <div className="heading-cta">
            <style jsx> {`
              .heading-cta {
                padding: var(--padding-m);
                max-width: 450px;
              }

              .heading-cta__title {
                margin-top: 40px;
                margin-bottom: 32px;
              }

              .heading-cta__intro {
                font-weight: 500;
                font-size: 16px;
                color: var(--color-grey);
                margin-bottom: 32px;
              }

              .cta__release {
                font-family: 'Barlow', sans-serif;
                font-weight: 500;
                font-size: 16px;
                color: var(--color-grey);
                text-transform: uppercase;
                margin-left: 24px;
              }

              .cta {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 40px;
              }

              @media only screen and (min-width: 768px) {
                .heading-cta {
                  width: 50%;
                }

                @media only screen and (min-width: 1440px) {

                  .heading-cta {
                    padding: 0;
                  }

                  .heading-cta__intro {
                    font-size: 18px;
                    margin-bottom: 40px;
                  }

                  .heading-cta__title {
                    margin-top: 60px;
                    margin-bottom: 24px;
                  }
                }
              }
            `}</style>
            <h1 className="heading-cta__title">Typemaster keyboard</h1>

            <p className="heading-cta__intro"> Improve your productivity and gaming without breaking the bank.
                Upgrade to a high quality
                mechanical typing experience.
                <br/>
                <br/>

                Lets do a <Link href="/typinggame"><a>typing game</a></Link> to feel if your keyboard is comfy enough!
            </p>

            <div className="cta">
                <Button variant="button--orange">Pre order now</Button>
                <h4 className="cta__release">Release on 5/27</h4>
            </div>

        </div>

    )
}