import SingleUsp from "../molecules/SingleUsp";

export default function Usp(props) {
    return (
        <div className="usp-icons">
            <style jsx> {`
              .usp-icons {
                padding: var(--padding-m);
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
              }

              @media only screen and (min-width: 768px) {
                .usp-icons {
                  display: flex;
                  flex-wrap: wrap;
                }

                @media only screen and (min-width: 1440px) {

                  .usp-icons {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: left;
                    margin-left: 165px;
                    padding: 0;
                  }
                }
                @media only screen and (min-width: 1440px) {
                  .usp-icons {
                    justify-content: space-between;
                    margin: 100px 165px 0 165px;

                  }
                }
              }
            `}</style>

            {props.usps.map(usp => {
                return <SingleUsp key={usp.sys.id} image={usp.fields.icons} title={usp.fields.title}
                                  text={usp.fields.text}/>
            })}
        </div>
    )
}