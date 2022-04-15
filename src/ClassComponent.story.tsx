import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

class UIComponent extends Roact.Component {
    public render(): Roact.Element | undefined {
        return (<textlabel Size={new UDim2(0,200,0,50)} Text={"Class Component!"} />)
    }
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;