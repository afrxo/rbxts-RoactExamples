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
    
    private textLabelRef;

    constructor(props: UIComponentProps) {
        super(props);
        this.textLabelRef = createRef<TextLabel>()
    }

    public render(): Roact.Element | undefined {
        return (<textlabel Ref={this.textLabelRef} Size={new UDim2(0,200,0,50)} TextColor3={this.state.textColor} Text={this.props.textContent} Event={{
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

    protected didMount(): void {
        
        const TextLabel = this.textLabelRef.getValue() as TextLabel;
        
        TextLabel.GetPropertyChangedSignal("TextColor3").Connect(() => {
            print("Color Changed.")
        })
    }
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent textContent="Roact Refs!"/>, TopNode);
    return function (): void {

        unmount(tree);
    }
}

export = Mount;