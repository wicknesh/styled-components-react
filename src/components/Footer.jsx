import styled from "styled-components";

const Footer = () => {

    const Container = styled.div`
        height: 10%;
        background-color: #1c1c1c;
        color: lightgray;
        display: flex;
    `;
    const Wrapper = styled.div`
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    const List = styled.ul`
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
    `;
    const ListItem = styled.li`
       margin-right : 20px;
    `;
    const Copyright = styled.span``;

  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem>Guide</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>API</ListItem>
                <ListItem>Community</ListItem>
            </List>
            <Copyright>Vignesh J S ©</Copyright>
        </Wrapper>
    </Container>
  )
}

export default Footer