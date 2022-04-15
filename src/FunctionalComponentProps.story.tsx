import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

interface UIComponentProps {
    textContent: string;
}

function UIComponent(props: UIComponentProps) {
    return (<textlabel Size={new UDim2(0,200,0,50)} Text={props.textContent} />)
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent textContent="Functional Component with Props!"/>, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;