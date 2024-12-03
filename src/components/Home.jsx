import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 75px);
    background-color: #ff6f20;
    display: flex;
    padding: 0;
`

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Right = styled.div`
    width: 40%;
    background-image: url("../public/images/home-right-tile.jpg");
    background-size: cover;
    background-position: center;
`

const Title  = styled.h1`
    font-size: 60px;
    width: 75%;
`

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    width: 75%;
`

const Home = () => {
  return (
    <Container>
        <Left>
            <Title>Your One-Stop Shop for Everything You Need!</Title>
            <Desc>Discover a wide range of products, unbeatable deals, and exceptional service—all in one convenient place!</Desc>
        </Left>
        <Right></Right>
    </Container>
  )
}

export default Home