export default function SingleUsp(props) {
    const words = props.title.split(' ')
    const [firstWord, ...otherWords] = words;
    const title = [firstWord, <br key={firstWord}/>, otherWords.join(' ')]
    
    return (
        <>
            <style jsx> {`
              .usp__title {
                text-align: center;
                margin-bottom: 24px;
              }

              .text--center {
                text-align: center;
                color: var(--color-grey);
              }

              .icons {
                background-color: var(--color-primary);
                border: var(--color-primary) 20px solid;
                width: 65px;
                height: 65px;
                border-radius: 10px;
                margin: 64px auto 48px auto;
                display: block;
              }

              .usp {
                max-width: 450px;
              }

              .text-end {
                margin: 96px 0 50px 0;
                padding: 0;
                text-align: center;
                color: var(--color-grey);
              }

              @media only screen and (min-width: 768px) {
                .usp {
                  width: 281px;
                  margin-right: 60px;
                }

                .usp__title {
                  text-align: left;
                }

                .icons {
                  margin: 64px 0 48px 0;
                }

                .text--center {
                  text-align: left;
                }
              }

              @media only screen and (min-width: 1440px) {
                .usp {
                  width: 255px;
                  margin-right: 30px;
                }
              }

              @media only screen and (min-width: 1440px) {
                .usp {
                  margin-right: 0;
                }
              }

            `}</style>
            <div className="usp">
                <img className="icons" src={props.image}/>
                <h3 className="usp__title">{title}</h3>
                <p className="text--center">{props.text}</p>
            </div>
        </>
    )
}