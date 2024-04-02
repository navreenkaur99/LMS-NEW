import ListGroup from "react-bootstrap/ListGroup";
import { Container} from "react-bootstrap";
import Individual from "./Individual";
export default function Tutorial() {
  const topic = [
    {
      name: "MODULE1",
      link: "/video?id=LusTv0RlnSU",
    },
    {
      name: "MODULE 2",
      link: "/Language",
    },
    {
      name: "MODULE3",
      link: "/video?id=t9UkgPM3n4T0EO1yn",
    },
    {
      name: "MODULE 4",
      link: "https://youtu.be/LusTv0RlnSU?si=t9UkgPM3n4T0EO1y",
    },
    {
      name: "Conditional Statement",
      link: "I5srDu75h_M&t=23s",
    },

  ];

  return (
    <>
      <center>
        <h3>Topics to Learn</h3>
      </center>

      <ListGroup>
        {topic.map((value) => {
          return (
            <>
              <Container>
                <ListGroup.Item key={value}>
                  <Individual
                    value={value.name}
                    link={value.link}
                  /> 
                </ListGroup.Item>
              </Container>
            </>
          );
        })}
      </ListGroup>
    </>
  );
}