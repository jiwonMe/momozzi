import styled from 'styled-components'

const LoadSpinner = () => {
  return (
    <Layout/>
  )
}

export default LoadSpinner

const Layout = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  color: #b3b3b3;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;

@keyframes animloader {
  0% {
    box-shadow: -38px -6px, -14px 6px,  14px -6px;
  }
  33% {
    box-shadow: -38px 6px, -14px -6px,  14px 6px;
  }
  66% {
    box-shadow: -38px -6px, -14px 6px, 14px -6px;
  }
  100% {
    box-shadow: -38px 6px, -14px -6px, 14px 6px;
  }
}
`