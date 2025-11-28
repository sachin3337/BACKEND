function handleClick() {
    console.log("hello!");
};

function handleMouseOver() {
    console.log("Bye Bye")
}
function handleDoubleClick(){
    console.log("Double Clicked")
}
export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p onMouseOver={handleMouseOver}>This parah is for event demo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque repellendus corrupti enim quam assumenda neque, possimus ducimus. Doloribus illum accusamus aliquam officiis, laborum, debitis asperiores ad labore a blanditiis suscipit nobis? Veniam sunt facere dolor distinctio eligendi, atque iste quae quos eum labore maiores iure?</p>
            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
        </div>
    )
}