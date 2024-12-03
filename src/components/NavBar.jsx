import styled from "styled-components"

const Container = styled.div`
    height: 50px;
    padding-bottom: 25px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline #ff6f20;
    color: #1c1c1c;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
`
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
`
const Button = styled.button`
    border: 2px solid #1c1c1c;
    padding: 10px 15px;
    background-color: #ff6f20;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Store</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>
            <Button>LOGIN</Button>
        </Wrapper>
    </Container>
  )
}

export default NavBar