import { useStore } from '@nanostores/preact';
import { isCartOpen } from '../../stores/cartStore.ts';

export default function CartFlyoutToggle() {
	const $isCartOpen = useStore(isCartOpen);
	//return <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>;
	return <button class="btn btn-outline-secondary ms-1 ms-md-2 position-relative cart-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart" aria-controls="offcanvas-cart">
    <div class="d-inline-flex align-items-center">
      <i class="fa fa-shopping-cart"></i><span class="visually-hidden-focusable">Cart</span>
                  <span class="cart-content">
          </span>    
          </div>
  </button>;
}
