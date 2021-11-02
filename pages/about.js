import Head from 'next/head'

export default function About() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;900&display=swap"
                      rel="stylesheet"/>
                <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png"/>
                <link rel="stylesheet" href="styles.css"/>
                <title>Frontend Mentor | Typemaster pre-launch landing page</title>

            </Head>
            <body>

            <div class="logo-heading">
                <img class="logo" src="static/assets/shared/logo.svg"/>
                <button class="button button--grey">Pre-order now</button>
            </div>
            <div class="heading">
                <div class="grey-square grey-square--right"></div>
                <div class="grey-square grey-square--left"></div>
                <div class="heading-cta">
                    <h1 class="heading-cta__title">Typemaster keyboard</h1>

                    <p class="heading-cta__intro"> Improve your productivity and gaming without breaking the bank.
                        Upgrade to a high quality
                        mechanical typing experience.</p>

                    <div class="cta">
                        <button class="button button--orange    "> Pre-order now</button>
                        <h4 class="cta__release">Release on 5/27</h4>
                    </div>

                </div>
                <div class="first--image"></div>


                <div class="keyboard-images">
                    <div class="keyboard-one"></div>
                    <div class="keyboard-two"></div>

                </div>
                <div class="wireless-keyboard">
                    <h2 class="wireless-keyboard__title">Mechanical <br/> wireless <br/> keyboard</h2>
                    <p class="text--center keyboard-content"> The Typemaster keyboard boasts top-notch build and
                        practical design. It offers a wide variety
                        of switches and keycaps, along with reliable wireless connectivity.</p>
                </div>
            </div>


            <div class="usp-icons">
                <div class="usp">
                    <img class="icons" src="/static/assets/shared/icon-compatible.svg"/>
                    <h3 class="usp__title">Highly <br/>compatible</h3>
                    <p class="text--center">Easy to use and works well with all major computer brands, gaming consoles
                        and mobile devices.
                        Plug & play, no installation or driver needed.</p>
                </div>

                <div class="usp">
                    <img class="icons" src="/static/assets/shared/icon-bluetooth.svg"/>
                    <h3 class="usp__title">Wireless <br/>with bluetooth</h3>
                    <p class="text--center">Powerful 2.4G RF technology allows you to connect the cordless keyboard from
                        up to 30ft away.
                        Simply plug the unifying receiver into your computer.</p>
                </div>

                <div class="usp">
                    <img class="icons" src="/static/assets/shared/icon-battery.svg"/>
                    <h3 class="usp__title">High capacity <br/>battery</h3>
                    <p class="text--center">Equipped with a long-lasting built-in battery, you’ll never have to spend a
                        dime on replaceable
                        ones.
                        Enjoy 40 hours of usage time between charges.</p>
                </div>

                <div class="usp">
                    <img class="icons" src="/static/assets/shared/icon-light.svg"/>
                    <h3 class="usp__title">RGB backlit <br/>modes</h3>
                    <p class="text--center">Choose from 4 backlight brightness levels and adjustable breathing speed.
                        Each key glows
                        intensely in the dark and
                        helps
                        you type in low light conditions.</p>
                </div>
            </div>

            <p class="text-end"><b>Typemaster 2021</b> | All Rights Reserved</p>
            </body>
        </div>
    )
}