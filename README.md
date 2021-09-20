# react-draggable-modal-soeasy

# get started:
 
#### after install package import Modal:
```

import {Modal} from "react-draggable-modal-soeasy"

```
#### dont forgot to import css as globalcss in your project:
```

import"react-draggable-modal-soeasy/dist/modal.css"

```
# props:
## children:
#### by default we design a modal if you want to define your modal with your style you can define a children and design it.

```

<Modal><h1>Reza noori</h1></Modal>

```
#### code above show text as modal you can pass className and id and design your modal.


## show vs setshow:
these props are so important. you should define them to manage your show and unshow your modal.
the best way to do that is define state and setstate with useState hook.
```

const[show,setshow]=useState(true)


<Modal show={show} setshow={setshow}/>

```

# back:
#### if back is true your modal in the end of the drag return it`s first position in the screen(by default center of screen)
```

<Modal back={true} show={show} setshow={setshow}/>

```
# number:
#### this props get number by defining it you will have hot modal in your project and dont forgot to set **back(true)**
```

<Modal back={true} number={200} show={show} setshow={setshow}/>

```
#### code above set modal to after drag or touch end it return its first position if its distance is less than 200px else modal will unshow and set show false.

# bgcolor:
#### by default we set rgba(0,0,0,0.1) you can change it by bgcolor props:
```

<Modal bgcolor="red" show={show} setshow={setshow}/>

```
# content:
if you want to use default modal you can change modals content with this prop
```

<Modal content="new content" show={show} setshow={setshow}/>

```