import { useStore } from '@nanostores/preact';
import { isCartOpen } from '../../stores/cartStore';

export default function CartFlyoutToggle() {
	const $isCartOpen = useStore(isCartOpen);
	return <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>;
}
