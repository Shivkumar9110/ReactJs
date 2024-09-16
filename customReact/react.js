function customRender(reactElement,maincontainer){
    // const DomElement = document.createElement(reactElement.type)

    // DomElement.innerHTML = reactElement.children
    // DomElement.setAttribute('href', reactElement.props.href)

    // DomElement.setAttribute('target', reactElement.props.target)

    // maincontainer.appendChild(DomElement)


    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    
    for(const props in reactElement.props){
        if(props=='children')continue;
        domElement.setAttribute(props,reactElement.props[props])
        // else{
        //     console.log("props can not be found.")
        // }
    }

    maincontainer.appendChild(domElement)
}



const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'click to me visit google' 
};



const maincontainer = document.querySelector("#root")

customRender(reactElement,maincontainer)