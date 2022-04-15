import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

interface UIComponentProps {
    textContent: string;
}

class UIComponent extends Roact.Component<UIComponentProps> {
    public render(): Roact.Element | undefined {
        return (<textlabel Size={new UDim2(0,200,0,50)} Text={this.props.textContent} />)
    }
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent textContent="Class Component with Props!" />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;