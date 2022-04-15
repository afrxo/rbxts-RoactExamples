import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

function UIComponent() {
    return (
        <>
            <textlabel />
            <textlabel />
        </>
    )
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;