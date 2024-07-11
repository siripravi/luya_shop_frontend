export const useOtherCartMutations = () => {
    const {
      setCart,
      setCustomer,
    } = useSession();
  
    const [applyCouponToCart, { loading: applyingCoupon }] = useMutation({
      mutation: ApplyCouponToCart,
      onCompleted({ applyCoupon: data }) {
        if (data?.cart) {
          setCart(data.cart as Cart);
        }
      },
    });
  
    const [removeCouponFromCart, { loading: removingCoupon }] = useMutation({
      mutation: RemoveCouponFromCart,
      onCompleted({ removeCoupons: data }) {
        if (data?.cart) {
          setCart(data.cart as Cart);
        }
      },
    });
  
    const [setShippingLocale, { loading: savingShippingLocale }] = useMutation({
      mutation: SetShippingLocale,
      onCompleted({ updateCustomer: data }) {
        if (data?.customer) {
          setCustomer(data.customer);
        }
      },
    });
  
    const [setShippingMethod, { loading: savingShippingMethod }] = useMutation({
      mutation: SetShippingMethod,
      onCompleted({ updateShippingMethod: data }) {
        if (data?.cart) {
          setCart(data.cart as Cart);
        }
      },
    });
  
    const applyCouponHelper = (code) => applyCouponToCart({ variables: { code } });
    const removeCouponHelper = (code) => removeCouponFromCart({ variables: { code } });
    const setShippingLocaleHelper = (input) => setShippingLocale({
      variables: {
        ...input,
      },
    });
  
    const setShippingMethodHelper = (shippingMethod) => setShippingMethod({
      variables: { shippingMethod },
    });
  
    const store = {
      applyingCoupon,
      removingCoupon,
      savingShippingInfo: savingShippingLocale || savingShippingMethod,
      applyCoupon: applyCouponHelper,
      removeCoupon: removeCouponHelper,
      setShippingLocale: setShippingLocaleHelper,
      setShippingMethod: setShippingMethodHelper,
    };
  
    return store;
  };