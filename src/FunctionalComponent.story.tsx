import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

function UIComponent() {
    return (<textlabel Size={new UDim2(0,200,0,50)} Text={"Functional Component!"} />)
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;