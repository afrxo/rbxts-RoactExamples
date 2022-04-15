import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

function UIComponent() {
    const [clickCount, setClickCount] = createBinding(0)
    return (<textbutton Size={new UDim2(0,200,0,50)} Text={clickCount.map((count) => {
        return `Clicks: ${count}`
    })} Event={{
        MouseButton1Click: () => setClickCount(clickCount.getValue() + 1)
    }} />)
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;