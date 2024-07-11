import { useStore } from '@nanostores/preact';
import { cartItems, isCartOpen } from '../stores/cartStore.ts';
import styles from './OffcanvasMenu.module.css';

export default function OffcanvasMenu() {
	const $isCartOpen = useStore(isCartOpen);
	const $cartItems = useStore(cartItems);
return(    
        <div class="offcanvas offcanvas-end show" id="offcanvas-cart" aria-modal="true" role="dialog">
       <div class="offcanvas-header">
      <span class="h5 offcanvas-title">Cart</span>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body p-0">
    {Object.values($cartItems).length ? (
        <ul className={styles.list} role="list">
            {Object.values($cartItems).map((cartItem) => (
                <li className={styles.listItem}>
                    <img className={styles.listItemImg} src={cartItem.imageSrc} alt={cartItem.name} />
                    <div>
                        <h3>{cartItem.name}</h3>
                        <p>Quantity: {cartItem.quantity}</p>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <p>Your cart is empty!</p>
    )}
    </div> </div>
    )
}
