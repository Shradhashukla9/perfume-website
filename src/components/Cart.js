import React from 'react'

const Cart = () => {
  return (
    <div>
      <section id="cart-drawer" class="cart-drawer">
  <p class="h4">Cart</p>
  <div class="cart-drawer__items">
    <div class="line-item">
      <img src="//paris-elysees.co.in/cdn/shop/products/0037_VL_DolceSense_Patchouli.jpg?v=1702012106" alt="paris-elysees.co.in" width="100"/>
      <div class="line-item-info">
        <a href="/products/paris-elysees-dolce-sense-patchouli-eau-de-parfum-60-ml-for-women?variant=32356431954055"> Patchouli Perfume For Women 60 ml</a>
        <p class="text-subdued">Rs. 690.00</p>
        
      </div>
    </div>
  </div>
  <form action="/cart" method="POST" class="cart-drawer__footer">
    <button type="submit" class="button">Checkout</button>
    <p class="text-subdued">Taxes and shipping calculated at checkout</p>
  </form>
</section>

    </div>
  )
}

export default Cart;
