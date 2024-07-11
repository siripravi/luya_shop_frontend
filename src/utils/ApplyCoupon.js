import React, { useState } from 'react';
import { useOtherCartMutations } from './useOtherCartMutations';

const ApplyCoupon = () => {
  const [code, setCode] = useState('');
  const { applyCoupon, removeCoupon } = useOtherCartMutations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    applyCoupon(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Apply Coupon:
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      </label>
      <button type="submit">Apply</button>
    </form>
  );
};

export default ApplyCouponForm;