import { SingleMotor, Spring } from "@rbxts/flipper";
import Roact, { Binding, BindingFunction, createBinding, mount, unmount } from "@rbxts/roact";

interface UIProps {}

class UIComponent extends Roact.Component<UIProps> {
	private transparencyMotor: SingleMotor;
	private transparencyBinding: Binding<number>;
	private setTransparencyBinding: BindingFunction<number>;
	constructor(props: UIProps){
		super(props);
		this.transparencyMotor = new SingleMotor(1)
		const [localTransperncyBinding, localSetTransparencyBinding] = createBinding(this.transparencyMotor.getValue());
		this.transparencyBinding = localTransperncyBinding;
		this.setTransparencyBinding = localSetTransparencyBinding;
		this.transparencyMotor.onStep(this.setTransparencyBinding);
	}

    public render(): Roact.Element | undefined {
        return (<textlabel Size={new UDim2(0,200,0,50)} Text={"Roact Flipper!"} Transparency={this.transparencyBinding} />)
    }

	public didMount(): void {
		this.transparencyMotor.setGoal(new Spring(0, {
			frequency: 5,
			dampingRatio: 1
		}))
	}
}

const Mount = (TopNode: GuiObject) => {
    const tree = mount(<UIComponent />, TopNode);
    return function (): void {
        unmount(tree);
    }
}

export = Mount;