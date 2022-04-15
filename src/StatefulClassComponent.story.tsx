import Roact, { createBinding, createRef, mount, unmount } from "@rbxts/roact";

interface UIComponentProps {
    textContent: string;
}

interface UIComponentState {
    textColor: Color3;
}

class UIComponent extends Roact.Component<UIComponentProps, UIComponentState> {

    state = {
        textColor: new Color3(0,0,0)
    }

    public render(): Roact.Element | undefined {
        return (<textlabel Size={new UDim2(0,200,0,50)} TextColor3={this.state.textColor}  Text={this.props.textContent} Event={{
            MouseEnter: () => {
                this.setState({
                    textColor: new Color3(1,0,0)
                })
            },
            MouseLeave: () => {
                this.setState({
                    textColor: new Color3(0,0,0)
                })
            }
        }} />)
    }
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent textContent="Class Component with Props!" />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;