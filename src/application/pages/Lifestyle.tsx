import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";

const lifestyleQuery = gql`
  {
    lifestyle {
      imageUrl: imageUrl
      uuid: uuid
    }
  }
`;

export class Lifestyle extends React.PureComponent {
  public render() {
    return (
      <Query query={lifestyleQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Don't look. croute.</p>;
          }
          if (error) {
            return <p>Error :(</p>;
          }

          const numberOfIMages = data.lifestyle.length;
          const randomImageIndex = Math.floor(Math.random() * numberOfIMages);
          return (
            <img
              key={data.lifestyle[randomImageIndex].uuid}
              src={data.lifestyle[randomImageIndex].imageUrl}
              style={{
                backgroundImage: `url("${
                  data.lifestyle[randomImageIndex].imageUrl
                }")`,
                height: "100%",
                marginTop: -400
              }}
            />
          );
        }}
      </Query>
    );
  }
}
