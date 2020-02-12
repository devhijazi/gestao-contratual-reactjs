import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
html{
    background: #e8e8e8;
    scroll-behavior:smooth;
}
body,

ul{
    list-style-type:none;
}

li{
    list-style:none;
}

a{
    text-decoration: none;
}
.main-container {
    display:flex;
    justify-content: space-between;
    -ms-flex-pack:justify;
    min-height: 100vh;
}
`